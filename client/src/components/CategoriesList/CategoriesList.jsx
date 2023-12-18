import React, { useContext, useState } from "react";
import { Context } from "../..";
import "./index.css";
import { observer } from "mobx-react-lite";
import AddButton from "../../common/ui/AddButton/AddButton";
import CreateUnitModal from "../modals/CreateUnitModal";
import Collapsible from "../../common/ui/Collapsible/Collapsible";

export const CategoriesList = observer(({ backpackId }) => {
  const { user } = useContext(Context);
  const [openModal, setOpenModal] = useState(false);
  const [checked, setChecked] = useState(false);
  const [openId, setOpenId] = useState(null);
  const [isOpened, setIsOpened] = useState(false);
  console.log(user.cases[0])

  const clickHandler = (event, id) => {
    console.log(event.target.className);
    if (id === openId) {
      setOpenId(null);
      setIsOpened(false);
    } else {
      setOpenId(id);
      setIsOpened(true);
    }
  };

  const openModalWindow = () => {
    setOpenModal((prevstate) => (prevstate = !openModal));
  };

  const getQuantityProducts = (id) => {
    if (user.cases) {
      return user.cases[backpackId - 1].products.filter(
        (prod) => prod.categoryId === id
      ).length;
    }
  };
  const getAddedProducts = (id) => {
    if (user.cases) {
      return user.cases[backpackId - 1].products
        .filter((prod) => prod.categoryId === id)
        .filter((p) => p.isAdded).length;
    }
  };
  const filterProducts = user.cases[backpackId - 1].products;

  const checkProduct = (id) => {
    if (user.cases) {
      const currentProduct = filterProducts.find(
        (product) => product.id === Number(id)
      );
      // console.log(currentProduct)
      currentProduct.isAdded
        ? (currentProduct.isAdded = false)
        : (currentProduct.isAdded = true);
    }
  };
  return (
    <>
      {user.categories.map((cat, id) => {
        if (
          user.cases[backpackId - 1].products.find(
            (pro) => cat.id === pro.categoryId
          )
        ) {
          return (
            <div key={cat.id}>
              <Collapsible
                backpackId={backpackId}
                {...cat}
                collapseId={id}
                filterProducts={filterProducts}
                getAddedProducts={getAddedProducts}
                getQuantityProducts={getQuantityProducts}
              />

            </div>
          );
        }
      })}
      <AddButton onModal={openModalWindow} />
      <CreateUnitModal
        open={openModal}
        close={openModalWindow}
        caseId={backpackId}
      />
    </>
  );
});

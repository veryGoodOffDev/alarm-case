import React, { useContext, useState, useRef } from "react";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { ProductItem } from "../../../components/ProductItem/ProductItem";
import { Context } from "../../..";
import { observable } from "mobx";
import { observer } from "mobx-react-lite";

const Collapsible = observer(
  ({
    backpackId,
    collapseId,
    id,
    icon,
    name,
    getAddedProducts,
    getQuantityProducts,
    filterProducts,
  }) => {
    const { user } = useContext(Context);
    const [openModal, setOpenModal] = useState(false);
    const [checked, setChecked] = useState(false);
    const [openId, setOpenId] = useState(null);
    const [isOpened, setIsOpened] = useState(false);
    const parentRef = useRef();
    if (parentRef.current) console.log(parentRef);

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

    // console.log(currentCase, 'currentCase')

    const openModalWindow = () => {
      setOpenModal((prevstate) => (prevstate = !openModal));
    };

    //   const getQuantityProducts = (id) => {
    //     if (user.cases) {
    //       return user.cases[backpackId - 1].products.filter(
    //         (prod) => prod.categoryId === id
    //       ).length;
    //     }
    //   };
    //   const getAddedProducts = (id) => {
    //     if (user.cases) {
    //       return user.cases[backpackId - 1].products
    //         .filter((prod) => prod.categoryId === id)
    //         .filter((p) => p.isAdded).length;
    //     }
    //   };
    //   const filterProducts = user.cases[backpackId - 1].products;

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
      <div key={id} className="collapse__container">
        <div className="collapse__header">
          <div className="header__left">
            <div
              className="collapse__button"
              onClick={() => setIsOpened(!isOpened)}
            ></div>
            <div className="notify">
              <span
                className="notify--warning"
                onClick={() => console.log("hello")}
              >
                1
              </span>
              <span className="notify--error">3</span>
            </div>
            <img src={icon} alt="иконка категории" />
            <h2 className="collapse__title">{name}</h2>
          </div>
          <div className="header__right">
            <span>
              {getAddedProducts(id)}/{getQuantityProducts(id)}
            </span>
          </div>
        </div>

        <ProgressBar
          progressPercent={Math.floor(
            (getAddedProducts(id) / getQuantityProducts(id)) * 100
          )}
          height={"16"}
          radius={"12px"}
          progressBarColor={"rgba(0, 79, 104, 0.08"}
          startBarColor={"rgba(0, 87, 96, 0.60)"}
          endBarColor={"#005760"}
        />

        <ul
          className="product__list"
          ref={parentRef}
          style={
            isOpened
              ? { height: parentRef.current.scrollHeight + "px" }
              : { height: "0px" }
          }
        >
          {filterProducts
            .filter((product) => product.categoryId === id)
            .map((product) => {
              return (
                <ProductItem
                  key={product.name}
                  {...product}
                  onAdd={checkProduct}
                  quanProd={getQuantityProducts}
                  backpackId={backpackId}
                />
              );
            })}
        </ul>
      </div>
    );
  }
);

export default Collapsible;

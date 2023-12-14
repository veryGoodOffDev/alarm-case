import React, { useContext, useEffect, useState } from "react";
import { Context } from "../..";
import "./index.css";
import { ProgressBar } from "../../common/ui/ProgressBar/ProgressBar";
import { ProductItem } from "../ProductItem/ProductItem";
import { observer } from "mobx-react-lite";
import AddButton from "../../common/ui/AddButton/AddButton";
import CreateUnitModal from "../modals/CreateUnitModal";
import axios from "axios";

export const CategoriesList = observer(({ backpackId }) => {
  const { user } = useContext(Context);
  const [openModal, setOpenModal] = useState(false)

  const[currentCase, setCurrentCase] = useState([])


    useEffect(() => {  
                
      try {
          axios.get('https://6570b78109586eff6641d8a7.mockapi.io/api/cases/case')
          .then(({data}) => {
            setCurrentCase(data)
            console.log(data, 'data')    
            // console.log(currentCase, 'currentCaseeeee')
          })
      } catch(error) {
        console.log(error)
      }
    }, [])

    // console.log(currentCase, 'currentCase')
  
  const openModalWindow = () => {
     setOpenModal((prevstate) => prevstate = !openModal)
  }

  const getQuantityProducts = (id) => {
    if(user.cases) {
      return user.cases[0].products.filter(
        (prod) => prod.categoryId === id
      ).length;
    }
    
  };
  const getAddedProducts = (id) => {
    if(user.cases) {
      return user.cases[backpackId -1].products
      .filter((prod) => prod.categoryId === id)
      .filter((p) => p.isAdded).length;
    }
   
  };
  const filterProducts = user.cases[backpackId - 1].products;
  
  const checkProduct = (id) => {
    if(user.cases) {
      const currentProduct = filterProducts.find((product) => product.id === Number(id));
      // console.log(currentProduct)
      currentProduct.isAdded
        ? (currentProduct.isAdded = false)
        : (currentProduct.isAdded = true);
    }
   
  };
  return (
    <>
      {user.categories.map((cat) => {
        if (user.cases[backpackId -1].products.find((pro) => cat.id === pro.categoryId)) {
          return (
            <div key={cat.id} className="collapse__container">
              <div className="collapse__header">
                <div className="header__left">
                <button className="collapse__button"></button>
                <div className="notify">
                  <span className="notify--warning">1</span>
                  <span className="notify--error">3</span>
                </div>
                <img src={cat.icon} alt="иконка категории"/>
                <h2 className="collapse__title">{cat.name}</h2>
                </div>
                <div className="header__right">
                <span>
                  {getAddedProducts(cat.id)}/{getQuantityProducts(cat.id)}
                </span>
                </div>
              </div>
              <ProgressBar
                progressPercent={Math.floor((getAddedProducts(cat.id) / getQuantityProducts(cat.id)) * 100)}
                height={"16"}
                radius={"12px"}
                progressBarColor={"rgba(0, 79, 104, 0.08"}
                startBarColor={"rgba(0, 87, 96, 0.60)"}
                endBarColor={"#005760"}
              />
              <ul className="product__list">
                {filterProducts.filter((product) => product.categoryId === cat.id)
                  .map((product) => {
                    return (
                      <ProductItem
                        key={product.name}
                        {...product}
                        onAdd={checkProduct}
                        quanProd={getQuantityProducts}
                      />
                    );
                  })}
              </ul>
            </div>
          );
        }
      })}
      <AddButton onModal={openModalWindow}/>
      <CreateUnitModal open={openModal} close={openModalWindow}/>
    </>
  );
});

import React, { useContext } from "react";
import { Context } from "../..";
import "./index.css";
import { ProgressBar } from "../../common/ui/ProgressBar/ProgressBar";
import { ProductItem } from "../ProductItem/ProductItem";
import { observer } from "mobx-react-lite";

export const CategoriesList = observer(({ backpackId }) => {
  const { user } = useContext(Context);

  const getQuantityProducts = (id) => {
    return user.cases[backpackId - 1].products.filter(
      (prod) => prod.categoryId === id
    ).length;
  };
  const getAddedProducts = (id) => {
    return user.cases[backpackId - 1].products
      .filter((prod) => prod.categoryId === id)
      .filter((p) => p.isAdded).length;
  };
  const filterProducts = user.cases[backpackId - 1].products;
  
  const checkProduct = (id) => {
    const currentProduct = filterProducts.find((product) => product.id === id);
    console.log(currentProduct)
    currentProduct.isAdded
      ? (currentProduct.isAdded = false)
      : (currentProduct.isAdded = true);
  };
  return (
    <>
      {user.categories.map((cat) => {
        if (filterProducts.find((pro) => cat.id === pro.categoryId)) {
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
                {filterProducts
                  .filter((product) => product.categoryId === cat.id)
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
    </>
  );
});

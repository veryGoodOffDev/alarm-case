import React from "react";
import "./index.css";
import { observer } from "mobx-react-lite";

export const ProductItem = observer(
  ({
    name,
    expiration,
    quantity,
    isAdded,
    id,
    onAdd,
    quanProd,
    categoryId,
  }) => {
    // console.log(expiration)
    return (
      <div className="product__item">
        <div className="input__container">
          <label>
            <input
              name="product-input"
              id={id}
              className="product__input"
              type="checkbox"
              checked={isAdded}
              onChange={() => onAdd(id)}
            />
            <div className="product__checkbox"></div>
            {name}
          </label>
        </div>
        <div className="product__info">
          <span className="product__quantity">{quantity} шт.</span>
          <span className="product__expiration">{expiration}</span>
        </div>
      </div>
    );
  }
);

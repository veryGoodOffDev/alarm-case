import React, { useContext } from "react";
import {  format } from "date-fns";
import "./index.css";
import { observer } from "mobx-react-lite";
import { Context } from "../..";

export const ProductItem = observer(
  ({
    name,
    expiration,
    quantity,
    quantityType,
    isAdded,
    id,
    backpackId,
    onAdd,
    quanProd,
    categoryId,
  }) => {
    const {user} = useContext(Context)
    const handleChange =({target}) => {
      console.log(target.id)
      user.setCheckbox(target.id, backpackId)

    }
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
              onChange={handleChange}
            />
            <div className="product__checkbox"></div>
            {name}
          </label>
        </div>
        <div className="product__info">
          <span className="product__quantity">{quantity} {quantityType}</span>
          <span className="product__expiration">{expiration}</span>
        </div>
      </div>
    );
  }
);

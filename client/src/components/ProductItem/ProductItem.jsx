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
    const newDate = expiration?.split(".").reverse().join('.')
    // console.log(newDate)
    // const dateFirst = new Date(newDate)
    const dateSecond = new Date(newDate)
    const timeDiff = dateSecond.getTime() - Date.now();

    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    console.log(diffDays, dateSecond.getTime(), Date.now())
    console.log(Math.ceil(-1,835582662037037), 'округление')

    const changeClass =() => {
      if(diffDays <= 90 && diffDays >= 7) {
        return "product__expiration danger"
      } else if(diffDays <= 7) {
        return "product__expiration error"
      }
    }
    
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
          <span className={changeClass()}>{expiration}</span>
        </div>
      </div>
    );
  }
);

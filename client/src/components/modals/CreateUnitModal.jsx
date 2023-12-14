import React from "react";
import Calendar from "../Calendar/Calendar";
import './index.css'

const CreateUnitModal = ({ open, close }) => {
  if (!open) return null;
  const isDisabled = true
  return (
    <div className="overlay">
      <div className="modal__container">
        <div className="modal__header">
          <h2 className="modal__title">Добавление в рюкзак</h2>
          <button className="modal__close" onClick={() => close()}></button>
        </div>
        <div className="modal__body">
          <label>
            Название
            <input type="text" placeholder="Тушенка" />
            </label>
            <Calendar disabled={isDisabled}/>
            <div className="input__container">
          <label>
            <input
              name="product-input"
              className="product__input"
              type="checkbox"           />
            <div className="product__checkbox"></div>
            Без срока годности
          </label>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUnitModal;

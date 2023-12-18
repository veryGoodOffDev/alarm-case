import React, { useContext, useEffect } from "react";
import "./index.css";
import grayBackpack from "./../../assets/img/gray-case.png";
import { ProgressBar } from "../../common/ui/ProgressBar/ProgressBar";
import { CASE_ROUTE } from "../../utils/consts";
import { NavLink } from "react-router-dom";
import { Context } from "../..";

export const Case = ({ bag }) => {
  const {user} = useContext(Context)
  const addedProducts = bag.products.filter((prod) => prod.isAdded);
  const progressPercent = Math.floor(
    (addedProducts.length / bag.products.length) * 100
  );

  return (
    <div className="case">
      <div className="case__header">
        <h1>{bag.name}</h1>
        <nav className="case__menu"></nav>
      </div>
      <div className="case__body">
        <NavLink to={CASE_ROUTE + "/" + bag.id} className="card__image">
          <img src={grayBackpack} alt="" width={280} height={280} />
        </NavLink>
      </div>
      <div className="case__footer">
        <div className="progress__info">
          <div className="info">
            <p className="info__percentage">{progressPercent}%</p>{" "}
            <p className="info__quantity">
              {addedProducts.length}/{bag.products.length}
            </p>
          </div>
          <div className="notify">
            <span className="notify--warning">1</span>
            <span className="notify--error">3</span>
          </div>
        </div>
        <div className="progress__bar">
          <ProgressBar
            progressPercent={progressPercent}
            height={"80"}
            radius={'12px'}
            progressBarColor={"rgba(255, 255, 255, 0.10"}
            startBarColor={'rgba(255, 255, 255, 0.8)'}
            endBarColor={'#C2FF15'}
          />
        </div>
      </div>
    </div>
  );
};

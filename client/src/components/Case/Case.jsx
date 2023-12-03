import React from "react";
import "./index.css";
import myCase from "./../../assets/img/azure-case.png";
import { ProgressBar } from "../../common/ui/ProgressBar/ProgressBar";
import { CASE_ROUTE } from "../../utils/consts";
import { NavLink } from "react-router-dom";

export const Case = ({bag}) => {
  console.log(bag.name, 'myCase')
  return (
    <div className="case">
      <div className="case__header">
        <h1>Мой рюкзак</h1>
        <nav className="case__menu"></nav>
      </div>
      <div className="case__body">
        <NavLink to={CASE_ROUTE + "/" + bag.id} className="card__image">
          <img src={myCase} alt="" width={326} height={326} />
        </NavLink>
      </div>
      <div className="case__footer">
        <div className="progress__info">
          <div className="info">
            <p className="info__percentage">79%</p>{" "}
            <p className="info__quantity">21/25</p>
          </div>
          <div className="notify">
            <span className="notify--warning">1</span>
            <span className="notify--error">3</span>
          </div>
        </div>
        <div className="progress__bar">
          <ProgressBar />
        </div>
      </div>
    </div>
  );
};

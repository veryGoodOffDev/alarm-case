import { makeAutoObservable } from "mobx";

export default class ProductsStore {
  constructor() {
    this._types = [
    ];
    this._quantityTypes = [
      {id:1, name:"Шт"},
      {id:2, name:"Мг"},
      {id:3, name:"Гр"},
      {id:4, name:"Л"},
      {id:5, name:"Мл"},
      {id:6, name:"Кл"},
    ]
    this._user = {};
    makeAutoObservable(this);
  }

  setTypes (types) {
    this._types = types
}
  setQuantityTypes (quantityTypes) {
    this._quantityTypes = quantityTypes
  }

  setIsAuth(bool) {
    this._isAuth = bool;
  }
  setUser(user) {
    this._user = user;
  }

  get isAuth() {
    return this._isAuth;
  }
  get user() {
    return this._user;
  }

  get quantityTypes() {
    return this._quantityTypes
  }
}

import { makeAutoObservable } from "mobx";

export default class ProductsStore {
  constructor() {
    this._types = [
      {
        id: 1, name: 'Продукты',
        id: 2, name: 'Лекарства',
        id: 3, name: 'Одежда',
        id: 4, name: 'Электроника',
      },
    ];
    this._user = {};
    makeAutoObservable(this);
  }

  setTypes (types) {
    this._types = types
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
}

import { makeAutoObservable } from "mobx";

export default class UserStore {
  constructor() {
    this._isAuth = true;
    this._user = {
      id: 1,
      name: "Elias VeryGood",
      email: "123@mail.ru",
      currentTheme: "light",
      role: "user",
    };
    this._products = [
      {
        caseId: 1,
      },
    ];
    this._cases = [
      {
        userId: 1,
        id: 1,
        name: "Мой рюкзак",
        products: [
          {
            categoryId: 1,
            quantity: 2,
            name: "Лапша",
            height: "200g",
            expiration: "20.04.2024",
            isAdded: false,
          },
          {
            categoryId: 1,
            quantity: 3,
            name: "Тушенка",
            height: "200g",
            expiration: "20.04.2024",
            isAdded: false,
          },
          {
            categoryId: 1,
            quantity: 2,
            name: "Сухари",
            height: "200g",
            expiration: "20.04.2024",
            isAdded: true,
          },
          {
            categoryId: 1,
            quantity: 3,
            name: "Вода",
            height: "5L",
            expiration: "20.04.2024",
            isAdded: false,
          },
          {
            categoryId: 1,
            quantity: 2,
            name: "Йогурт",
            height: "1L",
            expiration: "20.04.2024",
            isAdded: true,
          },
          {
            categoryId: 2,
            quantity: 1,
            name: "Фонарик",
            height: "200g",
            expiration: "20.04.2024",
            isAdded: false,
          },
          {
            categoryId: 2,
            quantity: 1,
            name: "Радио",
            height: "200g",
            expiration: null,
            isAdded: true,
          },
          {
            categoryId: 2,
            quantity: 1,
            name: "Рация",
            height: "200g",
            expiration: null,
            isAdded: false,
          },
          {
            categoryId: 3,
            quantity: 2,
            name: "Мыло",
            height: "200g",
            expiration: "20.04.2024",
            isAdded: false,
          },
          {
            categoryId: 3,
            quantity: 2,
            name: "Зубная паста",
            height: "200g",
            expiration: "20.04.2024",
            isAdded: false,
          },
          {
            categoryId: 3,
            quantity: 6,
            name: "Туалетная бумага",
            height: "200g",
            expiration: null,
            isAdded: false,
          },
          {
            categoryId: 4,
            quantity: 4,
            name: "Спички",
            height: "200g",
            expiration: "20.04.2024",
            isAdded: false,
          },
          {
            categoryId: 4,
            quantity: 4,
            name: "Сухое горючее",
            height: "200g",
            expiration: "20.04.2024",
            isAdded: false,
          },
        ],
      },
      {
        userId: 1,
        id: 2,
        name: "Еще один рюкзак",
        products: [
          {
            categoryId: 1,
            quantity: 2,
            name: "Лапша",
            height: "200g",
            expiration: "20.04.2024",
            isAdded: false,
          },
          {
            categoryId: 1,
            quantity: 3,
            name: "Тушенка",
            height: "200g",
            expiration: "20.04.2024",
            isAdded: false,
          },
          {
            categoryId: 1,
            quantity: 2,
            name: "Сухари",
            height: "200g",
            expiration: "20.04.2024",
            isAdded: true,
          },
          {
            categoryId: 1,
            quantity: 3,
            name: "Вода",
            height: "5L",
            expiration: "20.04.2024",
            isAdded: false,
          },
          {
            categoryId: 1,
            quantity: 2,
            name: "Йогурт",
            height: "1L",
            expiration: "20.04.2024",
            isAdded: true,
          },
          {
            categoryId: 2,
            quantity: 1,
            name: "Фонарик",
            height: "200g",
            expiration: "20.04.2024",
            isAdded: false,
          },
          {
            categoryId: 2,
            quantity: 1,
            name: "Радио",
            height: "200g",
            expiration: null,
            isAdded: true,
          },
        ],
      },
    ];

    this._categories = [
      { id: 1, name: "Продукты", icon: "src" },
      { id: 2, name: "Связь", icon: "src" },
      { id: 3, name: "Гигиена", icon: "src" },
      { id: 4, name: "Разведение огня", icon: "src" },
    ];
    makeAutoObservable(this);
  }

  setIsAuth(bool) {
    this._isAuth = bool;
  }
  setUser(user) {
    this._user = user;
  }

  setCases(cases) {
    this._cases = cases;
  }

  setCategories(categories) {
    this._categories = categories;
  }

  get isAuth() {
    return this._isAuth;
  }
  get user() {
    return this._user;
  }

  get cases() {
    return this._cases;
  }

  get categories() {
    return this._categories;
  }
}

import { makeAutoObservable } from "mobx";
import productsIcon from '../assets/icons/products-icon.svg'
import connectionIcon from '../assets/icons/connection-icon.svg'
import forKidsIcon from '../assets/icons/for-kids-icon.svg'
import clothesIcon from '../assets/icons/clothes-icon.svg'

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
        id: "1",
        name: "Мой рюкзак",
        products: [
          {
            id:1,
            categoryId: 1,
            quantity: 2,
            name: "Лапша",
            height: "200g",
            expiration: "20.04.2024",
            isAdded: false,
          },
          {
            id:2,
            categoryId: 1,
            quantity: 3,
            name: "Тушенка",
            height: "200g",
            expiration: "20.04.2024",
            isAdded: false,
          },
          {
            id:3,
            categoryId: 1,
            quantity: 2,
            name: "Сухари",
            height: "200g",
            expiration: "20.04.2024",
            isAdded: true,
          },
          {
            id:4,
            categoryId: 1,
            quantity: 3,
            name: "Вода",
            height: "5L",
            expiration: "20.04.2024",
            isAdded: false,
          },
          {
            id:5,
            categoryId: 1,
            quantity: 2,
            name: "Йогурт",
            height: "1L",
            expiration: "20.04.2024",
            isAdded: true,
          },
          {
            id:6,
            categoryId: 2,
            quantity: 1,
            name: "Фонарик",
            height: "200g",
            expiration: "20.04.2024",
            isAdded: false,
          },
          {
            id:7,
            categoryId: 2,
            quantity: 1,
            name: "Радио",
            height: "200g",
            expiration: null,
            isAdded: true,
          },
          {
            id:8,
            categoryId: 2,
            quantity: 1,
            name: "Рация",
            height: "200g",
            expiration: null,
            isAdded: false,
          },
          {
            id:9,
            categoryId: 3,
            quantity: 2,
            name: "Мыло",
            height: "200g",
            expiration: "20.04.2024",
            isAdded: false,
          },
          {
            id:10,
            categoryId: 3,
            quantity: 2,
            name: "Зубная паста",
            height: "200g",
            expiration: "20.04.2024",
            isAdded: false,
          },
          {
            id:11,
            categoryId: 3,
            quantity: 6,
            name: "Туалетная бумага",
            height: "200g",
            expiration: null,
            isAdded: false,
          },
          {
            id:12,
            categoryId: 4,
            quantity: 4,
            name: "Памперс",
            height: "200g",
            expiration: "20.04.2024",
            isAdded: false,
          },
          {
            id:13,
            categoryId: 4,
            quantity: 4,
            name: "Пеленки",
            height: "200g",
            expiration: "20.04.2024",
            isAdded: false,
          },
        ],
      },
      {
        userId: 1,
        id: "2",
        name: "Еще один рюкзак",
        products: [
          {
            id:1,
            categoryId: 1,
            quantity: 2,
            name: "Лапша",
            height: "200g",
            expiration: "20.04.2024",
            isAdded: true,
          },
          {
            id:2,
            categoryId: 1,
            quantity: 3,
            name: "Тушенка",
            height: "200g",
            expiration: "20.04.2024",
            isAdded: true,
          },
          {
            id:3,
            categoryId: 1,
            quantity: 2,
            name: "Сухари",
            height: "200g",
            expiration: "20.04.2024",
            isAdded: true,
          },
          {
            id:4,
            categoryId: 1,
            quantity: 3,
            name: "Вода",
            height: "5L",
            expiration: "20.04.2024",
            isAdded: true,
          },
          {
            id:5,
            categoryId: 1,
            quantity: 2,
            name: "Йогурт",
            height: "1L",
            expiration: "20.04.2024",
            isAdded: true,
          },
          {
            id:6,
            categoryId: 2,
            quantity: 1,
            name: "Фонарик",
            height: "200g",
            expiration: "20.04.2024",
            isAdded: true,
          },
          {
            id:7,
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

    this._selectedCase = {}

    this._categories = [
      { id: 1, name: "Продукты", icon: productsIcon,},
      { id: 2, name: "Связь", icon: connectionIcon,},
      { id: 3, name: "Одежда", icon: clothesIcon,},
      { id: 4, name: "Для детей", icon: forKidsIcon,},
    ];

    makeAutoObservable(this);
  }

  setSelectedCase(selectedCase) {
    this._selectedCase = selectedCase
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

  get selectedCase() {
    return this._selectedCase
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

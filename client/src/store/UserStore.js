import { makeAutoObservable } from "mobx";
import productsIcon from '../assets/icons/products-icon.svg'
import connectionIcon from '../assets/icons/connection-icon.svg'
import forKidsIcon from '../assets/icons/for-kids-icon.svg'
import clothesIcon from '../assets/icons/clothes-icon.svg'
import navigationIcon from '../assets/icons/navigation-icon.svg'
import dishesIcon from '../assets/icons/dishes-icon.svg'

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
            id:"1",
            categoryId: 1,
            quantity: 2,
            quantityType:'Шт.',
            name: "Лапша",
            height: "200g",
            expiration: "20.04.2024",
            isAdded: false,
          },
          {
            id:"2",
            categoryId: 1,
            quantity: 3,
            quantityType:'Шт.',
            name: "Тушенка",
            height: "200g",
            expiration: "20.04.2024",
            isAdded: false,
          },
          {
            id:"3",
            categoryId: 1,
            quantity: 2,
            quantityType:'Шт.',
            name: "Сухари",
            height: "200g",
            expiration: "20.04.2024",
            isAdded: true,
          },
          {
            id:"4",
            categoryId: 1,
            quantity: 3,
            quantityType:'Шт.',
            name: "Вода",
            height: "5L",
            expiration: "20.04.2024",
            isAdded: false,
          },
          // {
          //   id:"6",
          //   categoryId: 2,
          //   quantity: 1,
          //   quantityType:'Шт.',
          //   name: "Фонарик",
          //   height: "200g",
          //   expiration: "20.04.2024",
          //   isAdded: false,
          // },
          {
            id:"7",
            categoryId: 2,
            quantity: 1,
            quantityType:'Шт.',
            name: "Радио",
            height: "200g",
            expiration: null,
            isAdded: true,
          },
          {
            id:"8",
            categoryId: 2,
            quantity: 1,
            quantityType:'Шт.',
            name: "Рация",
            height: "200g",
            expiration: null,
            isAdded: false,
          },
          {
            id:"9",
            categoryId: 3,
            quantity: 2,
            quantityType:'Шт.',
            name: "Мыло",
            height: "200g",
            expiration: "20.04.2024",
            isAdded: false,
          },
          {
            id:"10",
            categoryId: 3,
            quantity: 2,
            quantityType:'Шт.',
            name: "Зубная паста",
            height: "200g",
            expiration: "20.04.2024",
            isAdded: false,
          },
          {
            id:"11",
            categoryId: 3,
            quantity: 6,
            name: "Туалетная бумага",
            height: "200g",
            expiration: null,
            isAdded: false,
          },
          {
            id:"12",
            categoryId: 4,
            quantity: 4,
            quantityType:'Шт.',
            name: "Памперс",
            height: "200g",
            expiration: "20.04.2024",
            isAdded: false,
          },
          {
            id:"13",
            categoryId: 1,
            quantity: 4,
            quantityType:'Шт.',
            name: "Печенье",
            height: "200g",
            expiration: "17.12.2023",
            isAdded: false,
          },
          {
            id:"14",
            categoryId: 4,
            quantity: 4,
            quantityType:'Шт.',
            name: "Пеленки",
            height: "200g",
            expiration: "20.04.2024",
            isAdded: false,
          },
          {
            id:"15",
            categoryId: 1,
            quantity: 2,
            quantityType:'Шт.',
            name: "Сахар",
            height: "200g",
            expiration: "20.01.2024",
            isAdded: false,
          },
          {
            id:"16",
            categoryId: 5,
            quantity: 1,
            quantityType:'Шт.',
            name: "Компас",
            height: "200g",
            expiration: null,
            isAdded: false,
          },
          {
            id:"17",
            categoryId: 6,
            quantity: 100,
            quantityType:'Шт.',
            name: "Одноразовые стаканчики",
            height: "200g",
            expiration: null,
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
            id:"1",
            categoryId: 1,
            quantity: 2,
            quantityType:'Шт.',
            name: "Лапша",
            height: "200g",
            expiration: "20.04.2024",
            isAdded: true,
          },
          {
            id:"2",
            categoryId: 1,
            quantity: 3,
            quantityType:'Шт.',
            name: "Тушенка",
            height: "200g",
            expiration: "20.04.2024",
            isAdded: true,
          },
          {
            id:"3",
            categoryId: 1,
            quantity: 2,
            quantityType:'Шт.',
            name: "Сухари",
            height: "200g",
            expiration: "20.04.2024",
            isAdded: true,
          },
          {
            id:"4",
            categoryId: 1,
            quantity: 3,
            quantityType:'Шт.',
            name: "Вода",
            height: "5L",
            expiration: "20.04.2024",
            isAdded: true,
          },
          {
            id:"5",
            categoryId: 1,
            quantity: 2,
            quantityType:'Шт.',
            name: "Йогурт",
            height: "1L",
            expiration: "20.04.2024",
            isAdded: true,
          },
          {
            id:"6",
            categoryId: 2,
            quantity: 1,
            quantityType:'Шт.',
            name: "Фонарик",
            height: "200g",
            expiration: "20.04.2024",
            isAdded: true,
          },
          {
            id:"7",
            categoryId: 2,
            quantity: 1,
            quantityType:'Шт.',
            name: "Радио",
            height: "200g",
            expiration: null,
            isAdded: true,
          },
        ],
      },
      {
        userId: 1,
        id: "3",
        name: "Для дома",
        products: [
          {
            id:"1",
            categoryId: 1,
            quantity: 2,
            quantityType:'Шт.',
            name: "Лапша",
            height: "200g",
            expiration: "20.04.2024",
            isAdded: true,
          },
          {
            id:"2",
            categoryId: 1,
            quantity: 3,
            quantityType:'Шт.',
            name: "Тушенка",
            height: "200g",
            expiration: "20.04.2024",
            isAdded: true,
          },
          {
            id:"3",
            categoryId: 1,
            quantity: 2,
            quantityType:'Шт.',
            name: "Сухари",
            height: "200g",
            expiration: "20.04.2024",
            isAdded: true,
          },
          {
            id:"4",
            categoryId: 1,
            quantity: 3,
            quantityType:'Шт.',
            name: "Вода",
            height: "5L",
            expiration: "20.04.2024",
            isAdded: true,
          },
          {
            id:"5",
            categoryId: 1,
            quantity: 2,
            quantityType:'Шт.',
            name: "Йогурт",
            height: "1L",
            expiration: "20.04.2024",
            isAdded: true,
          },
          {
            id:"6",
            categoryId: 2,
            quantity: 1,
            quantityType:'Шт.',
            name: "Фонарик",
            height: "200g",
            expiration: "20.04.2024",
            isAdded: true,
          },
          {
            id:"7",
            categoryId: 2,
            quantity: 1,
            quantityType:'Шт.',
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
      { id: 5, name: "Навигация", icon: navigationIcon,},
      { id: 6, name: "Посуда", icon: dishesIcon,},

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

  setNewProducts(products, caseId) {
    this._cases[caseId-1].products.push(products)
  }

  setCheckbox(id, caseId) {
   const findElement = this._cases[caseId-1].products.find(p => p.id === id)
   console.log(findElement.isAdded)
   findElement.isAdded = !findElement.isAdded

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

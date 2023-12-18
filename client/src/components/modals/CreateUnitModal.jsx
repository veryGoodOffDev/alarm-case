import React, { useContext, useState } from "react";
import {  format } from "date-fns";
import Calendar from "../Calendar/Calendar";
import "./index.css";
import { Context } from "../..";
import { observer } from "mobx-react-lite";

const CreateUnitModal = observer(({ open, close, caseId }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [productName, setProductName] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [currentType, setCurrentType] = useState("Шт")
  const {user, products} = useContext(Context)
  const [currentIcon, setCurrentIcon] = useState(user.categories[0].icon)
  const [currentOption, setCurrentOption] = useState("")
  const [data, setData] = useState({
    id: Date.now().toString(),
    categoryId:1,
    quantity: 1,
    quantityType:'Шт',
    name: "",
    height: "200g",
    expiration: null,
    isAdded: false,
  })

  const handleChangeName = (e) => {
    console.log(e.target.value)
    setProductName(e.target.value)
    setData((prevState) => ({
      ...prevState,
      ...data,
       name:e.target.value
    }))

    console.log(data, 'data')
    
  }

  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const handleChangeDate = (target) => {
    setDate(target)
    console.log(target, 'срок годности')
    const formatDate = target.split('-').reverse().join('.')
    console.log(formatDate)
    setData((prevState) => ({
      ...prevState,
      ...data,
       expiration:formatDate
    }))
    console.log(data)
  }
  const changeClass =(e) => {
    // console.log(e.target.outerText)
    if(e.target.outerText === currentType) {
      return 'active'
    }
  }

  const changeOption = (e) => {
    console.log(e.target.name)
    const newIcon = user.categories.findIndex(cat => e.target.value === cat.name)
    setCurrentIcon(user.categories[newIcon].icon)
    
    console.log([newIcon])
    setCurrentOption(e.target.value)
    setData((prevState) => ({
      ...prevState,
      ...data,
       categoryId:user.categories[newIcon].id
    }))
    
  }
  const changeCurrentType = (e) => {
    // console.log(e.target.outerText)
    setCurrentType(e.target.outerText)
    changeClass(e)
    setData((prevState) => ({
      ...prevState,
      ...data,
       quantityType:e.target.outerText
    }))
    console.log(data)
  }



  const changeCalendar = (target) => {
    console.log(target.checked);
    if (target.checked) {
      setIsDisabled(true);
      setData((prevState) => ({
        ...prevState,
        ...data,
         expiration:null,
      }))
    } else {
      setIsDisabled(false);
    }
  };

  const changeQuantity = (e) => {
      // console.log(target.value)
      setQuantity(e.target.value)
      setData((prevState) => ({
        ...prevState,
        ...data,
         quantity:Number(e.target.value)
      }))
  }

  const quantityIncrement = (target) => {
    setQuantity(prevState => prevState + Number(1))
    console.log(target)
    setData((prevState) => ({
      ...prevState,
      ...data,
       quantity:quantity
    }))
    console.log(data)
  }
  const changeIcon = (icon) => {
    setCurrentIcon(icon)
  }

  const quantityDecrement = (target) => {
    setQuantity(prevState => prevState - 1)
    if(quantity <= 0) {
      setQuantity(1)
    }
    console.log(data)
  }
  console.log(data)

  const addProduct = () => {
    setData((prevState) => ({
      ...prevState,
      ...data,
       id:Date.now().toString()
    }))
    user.setNewProducts(data, caseId)
    close()
    // cases[0].products.push(data)
    // console.log(cases)
  }

  if (!open) return null;
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
            <input type="text" placeholder="Тушенка" onChange={(e) => handleChangeName(e)} value={productName}/>
          </label>
          <Calendar disabled={isDisabled}  date={date} onChange={handleChangeDate}/>
          <div className="input__container">
            <label>
              <input
                name="product-input"
                className="product__input"
                type="checkbox"
                checked={isDisabled}
                onChange={(e) => changeCalendar(e.target)}
              />
              <div className="product__checkbox"></div>
              Без срока годности
            </label>
            <div className="quantity">
              <label>
                Количество
              </label>
              <div className="quantity__buttons">
                  <button className="quantity__decrement" name="quantity__input" onClick={() => quantityDecrement()}>-</button>
                  <input type="number" name="quantity__input" min={1} onChange={(e) => changeQuantity(e)} value={quantity} />
                  <button className="quantity__increment" name="quantity__input" onClick={() => quantityIncrement()}>+</button>
                </div>
            </div>
            <div className="quantity__types">
              <ul>
                {products.quantityTypes.map(type => 
                  <li className={type.name===currentType?"active":''} key={type.id} onChange={(e) => changeCurrentType(e)} onClick={(e) => changeCurrentType(e)}>{type.name}</li>
                  )}
              </ul>
            </div>
            <div className="options">
              <label>
                Выберите категорию
                <div className="options__select">
                <img src={currentIcon}/>
                <select name="selectedCategory" id="selectedCategory" onChange={(e) => changeOption(e)} value={currentOption}>
                  {user.categories.map(cat =>
                      <option key={cat.id} icon={cat.icon} id="selectedCategory">{cat.name}</option>
                    )}
                  
                </select>
                </div>
              </label>
            </div>
            <div className="create__button" onClick={() => addProduct()}>Добавить</div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default CreateUnitModal;

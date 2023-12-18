import React, { useContext, useEffect, useState } from 'react'
import './mycase.css';
import { CategoriesList } from '../components/CategoriesList/CategoriesList'
import { useNavigate, useParams } from 'react-router-dom';
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import axios from 'axios';

export const MyCase = observer(() => {

  const {id} = useParams()
  const {user} = useContext(Context)
  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  console.log(user.selectedCase, 'выбранный кейс')

  // const currentBag = user.cases.filter((bag) => bag.id === id)[0].name
  // console.log(currentBag)

  return (
    <div className='container'>
      <nav className='menu__container'>
        <div className='back' onClick={()=>goBack()}></div>
        {/* <h2>{currentBag}</h2> */}
        <div className='share'></div>
      </nav>
      <CategoriesList backpackId={id}/>
      </div>
  )
})

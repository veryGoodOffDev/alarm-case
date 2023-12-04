import React from 'react'
import './mycase.css';
import { CategoriesList } from '../components/CategoriesList/CategoriesList'
import { useNavigate, useParams } from 'react-router-dom';

export const MyCase = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const goBack = () => navigate(-1)
  console.log(id, 'id backpack')
  return (
    <div className='container'>
      <nav className='menu__container'>
        <div className='back' onClick={()=>goBack()}></div>
        <h2>Мой рюкзак</h2>
        <div className='share'></div>
      </nav>
      <CategoriesList backpackId={id}/>
      </div>
  )
}

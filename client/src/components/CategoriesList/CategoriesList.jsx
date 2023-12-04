import React, { useContext } from 'react'
import { Context } from '../..'
import './index.css';

export const CategoriesList = ({backpackId}) => {
    const {user} = useContext(Context)
    const filterProducts = user.cases[backpackId-1].products
  return (
    <>
    <ul>
        {user.categories.map((cat) => {
            if (filterProducts.find((pro) => cat.id === pro.categoryId)){
              return(<li key={cat.id}>
                {cat.name}
                <ul>
                {filterProducts.filter((pro) => pro.categoryId === cat.id).map((pro) => {
                    return <li key={pro.name}>{pro.name}</li>
                })}
                </ul>
                </li> )
            }     
        })}
    </ul>
    </>
  )
}

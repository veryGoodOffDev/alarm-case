import React from 'react'

export const CategoryItem = ({products, id}) => {
    // console.log(products.products)

    const productList = products.filter((prod) => prod.id === id)
    console.log(productList, 'список')
  return (
    <ul>
        <li></li>
    </ul>
  )
}

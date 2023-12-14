import React from 'react'
import './index.css'
const AddButton = ({onModal}) => {
  return (
    <div className='add__button' onClick={() => onModal()}>

    </div>
  )
}

export default AddButton
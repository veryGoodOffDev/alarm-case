import React from 'react'
import './index.css';

export const ProgressBar = ({progressPercent}) => {
  return (
    <div className='progressbar-container'>
        <div className='progressbar'>
            <div className='bar' style={{width:`${progressPercent}%`}}/>
        </div>
    </div>
  )
}

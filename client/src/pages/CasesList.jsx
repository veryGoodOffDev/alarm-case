import React, { useContext, useState } from 'react'
import { Context } from '..'
import { Case } from '../components/Case/Case'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { observer } from 'mobx-react-lite';

export const CasesList = observer( ({isLoading}) => {
    const {user} = useContext(Context)
    console.log(user.cases, 'данные в кейсах')
  return (
    <div>
      {isLoading ? <h2>Загрузка</h2>  :  <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        
      >
        
        {user.cases.map((bag) => {
            return <SwiperSlide key={bag.id}><Case bag={bag} /></SwiperSlide>
        })}
    </Swiper> }

    </div>
  )
})

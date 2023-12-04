import React, { useContext } from 'react'
import { Context } from '..'
import { Case } from '../components/Case/Case'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export const CasesList = () => {
    const {user} = useContext(Context)
  return (
    <div>
    <Swiper
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
    </Swiper>
    </div>
  )
}

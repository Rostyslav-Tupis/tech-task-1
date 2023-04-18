import React from 'react'
import style from './slider.module.scss'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";


import legPic from '../../images for slider/leg.png'
import tshirtPic from '../../images for slider/tshirt.png'
import mountainsPic from '../../images for slider/mountains.png'
import girlSmallPic from '../../images for slider/girlSmall.png'
import shoesPic from '../../images for slider/shoes.png'

let photosForSlider=[legPic,tshirtPic,mountainsPic,girlSmallPic,shoesPic,legPic,tshirtPic,mountainsPic,girlSmallPic,shoesPic]

function SliderComponent() {
    return (
        <div className={style.slider_container}>
            <Swiper 
            navigation={true}
            slidesPerView={5}
            spaceBetween={250}
            loop={true}
            modules={[Navigation]} className="mySwiper">
                {photosForSlider.map((photo,index)=>{
                    return(
                        <SwiperSlide key={index}>
                            <img src={photo} className={style.changeIcon_size} alt="photos"/>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default SliderComponent
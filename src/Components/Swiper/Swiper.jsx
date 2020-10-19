import React from 'react';
import 'swiper/swiper-bundle.css'
import Swiper from 'react-id-swiper';
import Slide from './Slide'
import sw1 from '../../Image/Swiper/1.jpg'
import sw2 from '../../Image/Swiper/2.jpg'
import sw3 from '../../Image/Swiper/3.jpg'
import sw4 from '../../Image/Swiper/4.jpg'
import sw5 from '../../Image/Swiper/5.jpg'
import sw6 from '../../Image/Swiper/6.jpg'
import sw7 from '../../Image/Swiper/7.jpg'


const SwiperSlide = () => {
    const params = {
        grabCursor: true,
        //loop: true, -- петля
        loopFillGroupWithBlank: true,
       
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          
        },
        
        breakpoints: {
            1024: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            }
          }
      }

      const items = [
        {
            id: 0,
            "image": sw1,
            "title": "Slide 1",
            "price": 11200,
            "color": "#aac3bf"
        },
        {
            id: 1,
            "image": sw2,
            "title": "Slide 2",
            "price": 7400,
            "color": "#c9b1bd"
        },
        {
            id: 2,
            "image": sw3,
            "title": "Slide 3",
            "price": 3200,
            "color": "#d5a29c"
        },
        {
            id: 3,
            "image": sw4,
            "title": "Slide 4",
            "price": 8920,
            "color": "#82a7a6"
        },
        {
            id: 4,
            "image": sw5,
            "title": "Slide 5",
            "price": 11420,
            "color": "#e6af7a"
        },
        {
            id: 5,
            "image": sw6,
            "title": "Slide 6",
            "price": 4200,
            "color": "#95be9e"
        },
        {
            id: 6,
            "image": sw7,
            "title": "Slide 7",
            "price": 5500,
            "color": "#97b5c5"
        }
    ]

    return (
        <Swiper {...params}>
            {items.map((items) => {
                return (
                    <div key={items.id}>
                       <Slide {...items} />
                    </div>
                )
            })}
        </Swiper>
    )
};

export default SwiperSlide;
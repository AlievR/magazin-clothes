import React from 'react';
import logo from './logo.svg';
import './App.css';
import './css/SwipeSlide.css'
import Header from './Components/Header'
import Slider from './Components/Slider/Slider'
import View_cart from './Components/View_cart'
import Brend from './Components/Brend'
import Panel_clothes from './Components/Panel_clothes'
import SwiperSlide from './Components/Swiper/Swiper';


function App() {
  return (
    <div >
      <Header />
      <Slider />
      <View_cart />
      <Brend />
      <Panel_clothes />
      <div className="container__swipers">
        <h1 className="title__swipers">Сейчас в тренде</h1>
        <div className="slider__swipers">
          <SwiperSlide />
        </div>
      </div>
    </div>
  );
}

export default App;




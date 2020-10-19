import React,{useState} from 'react'
import slide1 from '../Image/slide1.jpg'
import slide2 from '../Image/slide2.jpg'
import slide3 from '../Image/slide3.jpg'
import slide4 from '../Image/slide4.jpg'
import '../css/Slider.css'



function Slider() {

    const sliderImg = [{ id: 0, name: slide1 },
    { id: 1, name: slide2 }, { id: 2, name: slide3 },
    { id: 3, name: slide4 }];
     
    const [x,xSet]=useState(-1370);
    
    const sliderLeft = () => {
        x==0 
        ? xSet((1-sliderImg.length)*(1370) )
        : xSet(x+1370)
    }
    
    const sliderRight = () => {
        x==(1-sliderImg.length)*(1370) 
        ?  xSet(0)
        : xSet(x-1370)
    }

    
    return (
        <div className="slider">
            <div className="slider_container">
                <div className="slider_content">
                    <div className="slider_items " style={{transform: `translate3d(${x}px,0px,0px)`}}>
                        {
                            sliderImg.map((obj) => {
                                return (
                                    <div key={obj.id} className="slider_inner">
                                        <img className="slider__img" src={obj.name} />
                                    </div>
                                )
                            })
                        }
                    </div>

                    <button className="slider__btn left" onClick={sliderLeft}> </button>
                    <button className="slider__btn right" onClick={sliderRight}> </button>
                </div>
            </div >
        </div>
    )
}

export default Slider

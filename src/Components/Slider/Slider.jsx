import React, { useState } from 'react'
import slide1 from '../../Image/slide1.jpg'
import slide2 from '../../Image/slide2.jpg'
import slide3 from '../../Image/slide3.jpg'
import slide4 from '../../Image/slide4.jpg'
import '../../css/Slider.css'



function Slider() {

    const sliderImg = [{ id: 0, name: slide1 },
    { id: 1, name: slide2 }, { id: 2, name: slide3 },
    { id: 3, name: slide4 }];

    const [x, Setx] = useState(0);
    const [pozition, Setpozition] = useState(0);

    const sliderLeft = (id) => {
        let index = 1;
        if (Number.isInteger(id)) {
            index = id;
        }
        if (x == 0) {
            return (
                Setx((1 - sliderImg.length) * (100 * index)),
                Setpozition(sliderImg.length - 1)
            )
        }
        else {
            return (
                (Setx(x + (100 * index)),
                    Setpozition(pozition - index))
            )
        }
    }

    console.log(pozition)

    const sliderRight = (id) => {
        let index = 1;
        if (id >= 0) {
            index = id;
        }
        if (x == (1 - sliderImg.length) * 100) {
            return (
                Setx(0),
                Setpozition(0)
            )
        }
        else {
            return (
                Setx(x - (100 * index)),
                Setpozition(pozition + index)
            )
        }
    }

    const ClickNav = (id) => {
        if (id > pozition) {
            sliderRight(id - pozition);
        }
        else {
            sliderLeft(pozition - id);
        }
    }


    return (
        <div className="slider">
            <div className="slider_container">
                <div className="slider_content">
                    <div className="slider_items ">
                        {
                            sliderImg.map((obj) => {
                                return (
                                    <div key={obj.id} className="slider_inner" style={{ transform: `translateX(${x}%)` }}>
                                        <a href="#">
                                            <img className="slider__img" src={obj.name} />
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <button className="slider__btn left" onClick={sliderLeft}> </button>
                    <button className="slider__btn right" onClick={sliderRight}> </button>

                    <div className="slider__nav">
                        {
                            sliderImg.map((data) => {
                                return (
                                    <button className={data.id === pozition ? "slider__number active"
                                        : "slider__number"}
                                        key={data.id}
                                        onClick={() => ClickNav(data.id)}
                                    >
                                    </button>
                                )
                            })
                        }
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Slider

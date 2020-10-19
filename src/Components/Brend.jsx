import React from 'react'
import '../css/Brend.css'
import brend1 from '../Image/brend/tommy.png'
import brend2 from '../Image/brend/nike.png'
import brend3 from '../Image/brend/tnf.png'
import brend4 from '../Image/brend/dr.png'
import brend5 from '../Image/brend/el.png'



export default function Brend() {
    return (
        <div>
            <div className="brend">
                <div className="container">
                    <div className="brend__page">МОДНЫЕ БРЕНДЫ</div>
                    <div className="brend__items">
                        <a href="#">
                            <img className="brend__img" src={brend1} />
                        </a>
                        <a href="#">
                            <img className="brend__img" src={brend2} />
                        </a>
                        <a href="#">
                            <img className="brend__img" src={brend3} />
                        </a>
                        <a href="#">
                            <img className="brend__img" src={brend4} />
                        </a>
                        <a href="#">
                            <img className="brend__img" src={brend5} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

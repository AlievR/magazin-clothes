import React from 'react'
import '../css/View_cart.css'
import cart1 from '../Image/cool/1.png'
import cart2 from '../Image/cool/2.png'
import cart3 from '../Image/cool/3.png'
import cart4 from '../Image/cool/4.png'

function View_cart() {
    return (
        <div className="view__cart">
            <div className="view__container">
                <div className="cart__items">
                    <div className="cart__block">
                        <a className="cart__image" href="#">
                            <img className="cull__img" src={cart1} />
                        </a>
                        <p className="cull_text"> Вязанные вещи </p>
                    </div>
                    <div className="cart__block">
                        <a className="cart__image" href="#">
                            <img className="cull__img" src={cart2} />
                        </a>
                        <p className="cull_text"> Худи </p>
                    </div>
                    <div className="cart__block">
                        <a className="cart__image" href="#">
                            <img className="cull__img" src={cart3} />
                        </a>
                        <p className="cull_text"> Яркие образы </p>
                    </div>
                    <div className="cart__block">
                        <a className="cart__image" href="#">
                            <img className="cull__img" src={cart4} />
                        </a>
                        <p className="cull_text"> Классика </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View_cart

import React from 'react'
import '../css/Panel_clothes.css'
import img1 from '../Image/swatch.jpg'
import img2 from '../Image/rub.jpg'
import img3 from '../Image/baza.jpg'


function Panel_clothes() {
    return (
        <div className="panel__clothes">
            <div className="container">
                <div className="panel__block">
                    <div className="block__external">
                        <div className="block__inner obj1">
                            <a href="#">
                                <img className="block__inimg" src={img1} />
                            <div className="block_text">Ремни и часы</div>
                            </a>
                        </div>
                        <div className="block__inner obj2">
                            <a href="#">
                                <img className="block__inimg"  src={img2} />
                                <div className="block_text">Рубашки</div>
                            </a>
                        </div>
                    </div>
                    <div className="block__side obj3">
                        <a href="#">
                            <img className="block__siimg" src={img3} />
                            <div className="block_text new">Базовый гардероб</div>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Panel_clothes

import React from 'react'
import '../css/Header.css'



function Header() {
    return (
        <div>
            <header className="header">
                <div className="container__header">
                    <div className="header__inner">
                        <div className="header__menu">
                            <div className="header__logo">Rasul</div>
                            <nav className="header__category">
                                <div className="category__link">Новинки</div>
                                <div className="category__link">Одежда</div>
                                <div className="category__link">Обувь</div>
                                <div className="category__link">Аксессуары</div>
                                <div className="category__link">Аутлет</div>
                            </nav>
                        </div>
                        <div className="header__user">
                            <form>
                                <input className="input__search" type="text" name="search" placeholder="Search.." />
                            </form>
                            <a href="#">
                                <span className="user_icon"> </span>
                            </a>
                            <a href="#">
                                <span className="basket_icon"> </span>
                            </a>

                            
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header

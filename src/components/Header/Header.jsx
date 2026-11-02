import React from "react";
import { Link } from "react-router-dom";


function Header() {
    return (
        <header className="header-container">
            <Link to='/' className="header-logo">
                <img src="/images/logo.png" alt="Логотип" width={160} height={160}/>
            </Link>
            <ul className="header-right">
                <li>
                    <search>
                        <form action="/search" role="search" method="get" className="search-form">
                            <label htmlFor="board-search" className="visually-hidden"></label>
                            <input className="search-form-input" type="search" id="board-search" name="q" placeholder="Поиск..." autoComplete="off" required/>
                            <button type="submit" aria-label="Найти" className="header-button">
                                <img src="/images/search.png" alt="Поиск" width={40} height={40}/>
                            </button>
                        </form>
                    </search>
                </li>
                <li>
                    <Link to='/favorites' className="header-button" title="Избранное">
                        <img src="/images/izbranoe.png" alt="" aria-hidden="true" width={40} height={40}/>
                    </Link>
                </li>
                <li>
                    <Link to='/login' className="header-button" title="Вход/Зарегистрироваться">
                        <img src="/images/inter.png" alt="" aria-hidden="true" width={40} height={40}/>
                    </Link>
                </li>
                <li>
                    <Link to='/cart' className="header-button" title="Корзина">
                        <img src="/images/card.png" alt="" aria-hidden="true" width={50} height={50}/>
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;
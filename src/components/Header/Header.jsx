import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function Header() {
    const { totalCount } = useCart();
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        const trimmed = searchQuery.trim();

        if (trimmed) {
            navigate(`/catalog?search=${encodeURIComponent(trimmed)}`);
        } else {
            navigate("/catalog");
        }
    };

    return (
        <header className="header-container">
            <Link to='/' className="header-logo">
                <img src="/images/logo.png" alt="Логотип" width={160} height={160}/>
            </Link>
            <ul className="header-right">
                <li>
                    <search>
                        <form role="search" className="search-form" onSubmit={handleSearch}>
                            <label htmlFor="board-search" className="visually-hidden"></label>
                            <input
                                className="search-form-input"
                                type="search"
                                id="board-search"
                                name="q"
                                placeholder="Поиск..."
                                autoComplete="off"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
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
                    <Link to='/cart' className="header-button header-cart-link" title="Корзина">
                        <img src="/images/card.png" alt="" aria-hidden="true" width={50} height={50}/>
                        { totalCount > 0 && (
                            <span className="cart-badge">{totalCount}</span>
                        )}
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;

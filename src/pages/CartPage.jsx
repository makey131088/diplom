import React from "react";

function CartPage() {
    return (
        <div className="cart-page">
            <h1 className="popular-products-title">Ваша корзина</h1>
            <div className="cart-container">
                <p className="cart-empty-text">В корзине пока нет товаров</p>
                <p className="cart-empty-subtext">Перейдите в каталог, чтобы выбрать сноуборд или крепления.</p>
            </div>
        </div>
    );
}

export default CartPage;
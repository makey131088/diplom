import React from "react";

function FavoritesPage() {
    return (
        <div className="favorites-page">
            <h1 className="popular-products-title">Избранные товары</h1>
            <div className="cart-container">
                <p className="cart-empty-text">Список избранного пуст</p>
                <p className="cart-empty-subtext">Добавляйте товары в избранное, чтобы не потерять их.</p>
            </div>
        </div>
    );
}

export default FavoritesPage;
import React from "react";

function LoginPage() {
    return (
        <div className="auth-page">
            <h1 className="popular-products-title">Вход в личный кабинет</h1>
            <div className="cart-container">
                <p className="cart-empty-text">Форма входа</p>
                <p className="cart-empty-subtext">Здесь скоро будут поля для ввода почты и пароля.</p>
            </div>
        </div>
    );
}

export default LoginPage;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AuthPage.css";


function LoginPage() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
        setError("")
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessMessage("");
        if (!formData.email.trim() || !formData.password.trim()) {
            setError("Пожалуйста, заполните все поля");
            return;
        }
        
        if(formData.password.length < 6) {
            setError("Пароль должен содержать не менее 6 символов")
            return;
        }

        const payload = {
            email: formData.email.trim().toLowerCase(),
            password: formData.password
        };

        console.log("Данные для входа (готово к отправке на сервер):", payload);
        setSuccessMessage("Успешно");
    };


return (
        <div className="auth-page">
            <h1 className="popular-products-title">Вход в личный кабинет</h1>
            <div className="auth-card">
                <form className="auth-form" onSubmit={handleSubmit} noValidate>
                    {error && <p className="auth-error">{error}</p>}
                    {successMessage && <p className="auth-success">{successMessage}</p>}

                    <div className="auth-field">
                        <label htmlFor="login-email" className="auth-label">Email</label>
                        <input
                            id="login-email"
                            type="email"
                            name="email"
                            className="auth-input"
                            placeholder="example@mail.ru"
                            value={formData.email}
                            onChange={handleChange}
                            autoComplete="email"
                        />
                    </div>

                    <div className="auth-field">
                        <label htmlFor="login-password" className="auth-label">Пароль</label>
                        <input
                            id="login-password"
                            type="password"
                            name="password"
                            className="auth-input"
                            placeholder="Введите пароль"
                            value={formData.password}
                            onChange={handleChange}
                            autoComplete="current-password"
                        />
                    </div>

                    <button type="submit" className="auth-submit-btn">
                        Войти
                    </button>
                </form>

                <p className="auth-switch-text">
                    Ещё нет аккаунта?{" "}
                    <Link to="/register" className="auth-switch-link">
                        Зарегистрироваться
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;

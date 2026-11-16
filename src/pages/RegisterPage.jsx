import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AuthPage.css";

function RegisterPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
        setError("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessMessage("");

        if (!formData.name.trim() || !formData.email.trim() || !formData.password || !formData.confirmPassword) {
            setError("Пожалуйста, заполните все поля.");
            return;
        }

        if (!formData.email.includes("@") || !formData.email.includes(".")) {
            setError("Введите корректный адрес электронной почты.");
            return;
        }

        if (formData.password.length < 6) {
            setError("Пароль должен содержать минимум 6 символов.");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError("Пароли не совпадают.");
            return;
        }

        const payload = {
            name: formData.name.trim(),
            email: formData.email.trim().toLowerCase(),
            password: formData.password
        };

        console.log("Данные для регистрации (готово к отправке в PostgreSQL):", payload);
        setSuccessMessage("Вы зарегистрированы!");
    };

    return (
        <div className="auth-page">
            <h1 className="popular-products-title">Регистрация</h1>
            <div className="auth-card">
                <form className="auth-form" onSubmit={handleSubmit} noValidate>
                    {error && <p className="auth-error">{error}</p>}
                    {successMessage && <p className="auth-success">{successMessage}</p>}

                    <div className="auth-field">
                        <label htmlFor="reg-name" className="auth-label">Имя</label>
                        <input
                            id="reg-name"
                            type="text"
                            name="name"
                            className="auth-input"
                            placeholder="Ваше имя"
                            value={formData.name}
                            onChange={handleChange}
                            autoComplete="name"
                        />
                    </div>

                    <div className="auth-field">
                        <label htmlFor="reg-email" className="auth-label">Email</label>
                        <input
                            id="reg-email"
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
                        <label htmlFor="reg-password" className="auth-label">Пароль</label>
                        <input
                            id="reg-password"
                            type="password"
                            name="password"
                            className="auth-input"
                            placeholder="Введите пароль"
                            value={formData.password}
                            onChange={handleChange}
                            autoComplete="new-password"
                        />
                    </div>

                    <div className="auth-field">
                        <label htmlFor="reg-confirm" className="auth-label">Повторите пароль</label>
                        <input
                            id="reg-confirm"
                            type="password"
                            name="confirmPassword"
                            className="auth-input"
                            placeholder="Повторите пароль"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            autoComplete="new-password"
                        />
                    </div>

                    <button type="submit" className="auth-submit-btn">
                        Зарегистрироваться
                    </button>
                </form>

                <p className="auth-switch-text">
                    Уже есть аккаунт?{" "}
                    <Link to="/login" className="auth-switch-link">
                        Войти
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default RegisterPage;

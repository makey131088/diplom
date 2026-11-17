import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function CartPage() {
    const { cartItems, updateQuantity, removeFromCart, totalPrice } = useCart();

    return (
        <div className="cart-page">
            <h1 className="popular-products-title">Ваша корзина</h1>

            {cartItems.length === 0 ? (
                <div className="cart-container">
                    <p className="cart-empty-text">В корзине пока нет товаров</p>
                    <p className="cart-empty-subtext">
                        Перейдите в <Link to="/catalog" className="cart-empty-link">каталог</Link>, чтобы выбрать сноуборд или крепления.
                    </p>
                </div>
            ) : (
                <div className="cart-container cart-container-filled">
                    <div className="cart-items-list">
                        {cartItems.map((item) => {
                            const itemKey = item.cartItemId || item.id;
                            const isSnowboardSize = item.size && /^\d/.test(String(item.size));

                            return (
                                <div key={itemKey} className="cart-item">
                                    <img src={item.image} alt={item.title} className="cart-item-img" />
                                    
                                    <div className="cart-item-info">
                                        {item.brand && <p className="cart-item-brand">{item.brand}</p>}
                                        <h3 className="cart-item-title">{item.title}</h3>
                                        {item.size && (
                                            <p className="cart-item-size" style={{ fontSize: "14px", color: "#718096", margin: "4px 0" }}>
                                                {isSnowboardSize ? "Ростовка" : "Размер"}: <strong>{item.size}</strong>
                                            </p>
                                        )}
                                        <p className="cart-item-price">{item.price.toLocaleString("ru-RU")} ₽</p>
                                    </div>

                                    <div className="cart-quantity-controls">
                                        <button 
                                            className="cart-qty-btn" 
                                            onClick={() => updateQuantity(itemKey, -1)}
                                        >
                                            -
                                        </button>
                                        <span className="cart-qty-value">{item.quantity}</span>
                                        <button 
                                            className="cart-qty-btn" 
                                            onClick={() => updateQuantity(itemKey, 1)}
                                        >
                                            +
                                        </button>
                                    </div>

                                    <div className="cart-item-total">
                                        {(item.price * item.quantity).toLocaleString("ru-RU")} ₽
                                    </div>

                                    <button 
                                        className="cart-remove-btn" 
                                        onClick={() => removeFromCart(itemKey)}
                                    >
                                        Удалить
                                    </button>
                                </div>
                            );
                        })}
                    </div>

                    <div className="cart-summary">
                        <h2 className="cart-total-price">
                            Итого: <span>{totalPrice.toLocaleString("ru-RU")} ₽</span>
                        </h2>
                        <button 
                            className="add-to-cart-btn cart-checkout-btn" 
                            onClick={() => alert("Заказ успешно оформлен!")}
                        >
                            Оформить заказ
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartPage;

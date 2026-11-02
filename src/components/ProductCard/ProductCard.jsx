import React from "react";
import './ProductCard.css';

function ProductCard({ id, title, price, image, brand }) {
  // Временная функция-заглушка для клика
    const handleAddToCart = () => {
        alert(`Товар "${title}" добавлен в корзину!`);
    };

    return (
        <div className="product-card">
            <div className="product-image-container">
                <img src={image} alt={title} className="product-image" />
            </div>
            <div className="product-info">
                {brand && <p className="product-brand">{brand}</p>}
                <h3 className="product-title">{title}</h3>
                <p className="product-price">{price.toLocaleString('ru-RU')} ₽</p>
                <button className="add-to-cart-btn" onClick={handleAddToCart}>
                    В корзину
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
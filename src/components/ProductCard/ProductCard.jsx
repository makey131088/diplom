import React, { useState } from "react";
import './ProductCard.css';
import { useCart } from "../../context/CartContext";
import { useFavorites } from "../../context/FavoritesContext";
import { Link } from "react-router-dom";


function ProductCard({ id, title, price, image, brand }) {
    const { addToCart } = useCart();
    const { toggleFavorite, isFavorite } = useFavorites();
    const[isAdded, setIsAdded] = useState(false);
    const favorite = isFavorite(id);
    const handleAddToCart = () => {
        addToCart({id, title, brand, price, image})
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 1000)
    };

    const handleToggleFavorite = () => {
        toggleFavorite({ id, title, price, image, brand });
    };

    return (
        <div className="product-card">
            <div className="product-image-container">
                <button 
                    type="button" 
                    className={`favorite-btn ${favorite ? "active" : ""}`}
                    onClick={handleToggleFavorite}
                    title={favorite ? "Убрать из избранного" : "Добавить в избранное"}
                    aria-label="Избранное">
                    <img src="/images/heart.png" alt="Избранное" className="favorite-icon" />
                </button>
                <Link to={`/product/${id}`}>
                    <img src={image} alt={title} className="product-image" />
                </Link>
            </div>
            <div className="product-info">
                {brand && <p className="product-brand">{brand}</p>}
                <Link to={`/product/${id}`} className="product-title-link">
                    <h3 className="product-title">{title}</h3>
                </Link>
                <p className="product-price">{price.toLocaleString('ru-RU')} ₽</p>
                <button className="add-to-cart-btn" onClick={handleAddToCart}>
                    { isAdded ? "Добавлено" : "В корзину"}
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
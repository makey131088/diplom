import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../../data/products";
import { useCart } from "../../context/CartContext";
import { useFavorites } from "../../context/FavoritesContext";
import "./ProductPage.css";

function ProductPage() {
    const { id } = useParams();

    const product = products.find((item) => String(item.id) === id);

    const { addToCart } = useCart();
    const { toggleFavorite, isFavorite } = useFavorites();
    const [isAdded, setIsAdded] = useState(false);

    if (!product) {
        return (
            <div className="product-page">
                <h2>Товар не найден</h2>
                <Link to="/catalog">Вернуться в каталог</Link>
            </div>
        );
    }

    const favorite = isFavorite(product.id);

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            title: product.title,
            brand: product.brand,
            price: product.price,
            image: product.image
        });
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 1000);
    };

    const handleToggleFavorite = () => {
        toggleFavorite({
            id: product.id,
            title: product.title,
            brand: product.brand,
            price: product.price,
            image: product.image
        });
    };

    const categoryName = product.category === "snowboards" ? "Сноуборды" : "Крепления";
    const categoryLink = product.category === "snowboards" ? "/snowboards" : "/bindings";

    return (
        <div className="product-page">
            <div className="product-breadcrumbs">
                <Link to="/catalog">Каталог</Link> /{" "}
                <Link to={categoryLink}>{categoryName}</Link>
            </div>

            <div className="product-details">
                <div className="product-details-image">
                    <img src={product.image} alt={product.title} />
                </div>

                <div className="product-details-info">
                    <p className="product-brand">{product.brand}</p>
                    <h1 className="product-title">{product.title}</h1>
                    <p className="product-price">
                        {product.price.toLocaleString("ru-RU")} ₽
                    </p>

                    <div className="product-meta">
                        <p><strong>Категория:</strong> {categoryName}</p>
                        <p><strong>Бренд:</strong> {product.brand}</p>
                        <p><strong>Артикул:</strong> #{product.id}</p>
                    </div>

                    <div className="product-actions">
                        <button
                            type="button"
                            className="add-to-cart-btn"
                            onClick={handleAddToCart}
                        >
                            {isAdded ? "Добавлено" : "В корзину"}
                        </button>

                        <button
                            type="button"
                            className={`product-favorite-text-btn ${favorite ? "active" : ""}`}
                            onClick={handleToggleFavorite}
                        >
                            {favorite ? "В избранном" : "В избранное"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;

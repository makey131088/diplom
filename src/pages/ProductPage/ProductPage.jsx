import React, { useState, useEffect } from "react";
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
    const [selectedSize, setSelectedSize] = useState("");

    useEffect(() => {
        if (product?.sizes && product.sizes.length > 0) {
            setSelectedSize(product.sizes[0]);
        } else {
            setSelectedSize("");
        }
    }, [product]);


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
            image: product.image,
            size: selectedSize
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
                    {product.sizes && product.sizes.length > 0 && (
                        <div className="product-sizes">
                            <p className="product-sizes-label">
                                {product.category === "snowboards" ? "Ростовка (см)" : "Размер"}: <span>{selectedSize}</span>
                            </p>
                            <div className="product-sizes-grid">
                                {product.sizes.map((size) => (
                                    <button
                                        key={size}
                                        type="button"
                                        className={`product-size-btn ${selectedSize === size ? "active" : ""}`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

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
            
            {(product.description || product.specs) && (
                <div className="product-extra">
                    {product.description && (
                        <div className="product-section">
                            <h2 className="product-section-title">О товаре</h2>
                            <p className="product-description-text">{product.description}</p>
                        </div>
                    )}

                    {product.specs && product.specs.length > 0 && (
                        <div className="product-section">
                            <h2 className="product-section-title">Характеристики</h2>
                            <div className="product-specs-list">
                                {product.specs.map((spec, index) => (
                                    <div key={index} className="product-spec-row">
                                        <span className="product-spec-label">{spec.label}</span>
                                        <span className="product-spec-value">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}        
        </div>
    );
}

export default ProductPage;

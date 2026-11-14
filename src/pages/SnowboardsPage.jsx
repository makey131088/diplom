import React from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard/ProductCard";

function SnowboardsPage() {
    const snowboards = products.filter ((item) => item.category === "snowboards");
    return (
        <div className="catalog-page">
            <h1 className="popular-products-title">Сноуборды</h1>
            <div className="products-grid">
                {snowboards.map ((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        brand={product.brand}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </div>
        </div>
    );
}

export default SnowboardsPage;
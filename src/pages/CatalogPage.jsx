import React from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import { products } from "../data/products";

function CatalogPage() {
    return (
        <div className="catalog-page">
            <h1 className="popular-products-title">Каталог товаров</h1>
            <div className="products-grid">
                {products.map ((product) => (
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

export default CatalogPage;
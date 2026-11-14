import React from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard/ProductCard";


function BindingsPage() {
    const bindings = products.filter ((item) => item.category === "bindings");
    return (
        <div className="catalog-page">
            <h1 className="popular-products-title">Крепления</h1>
            <div className="products-grid">
                {bindings.map ((product) => (
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

export default BindingsPage;
import React from "react";
import ProductCard from "../components/ProductCard/ProductCard";
function CatalogPage() {
    return (
        <div className="catalog-page">
            <h1 className="popular-products-title">Каталог товаров</h1>
            <div className="products-grid">
                <ProductCard 
                    id={1}
                    brand="Capita"
                    title="Сноуборд Mountain Twin 2024" 
                    price={54900} 
                    image="https://unsplash.com" 
                />
                <ProductCard 
                    id={2}
                    brand="Union"
                    title="Крепления Force Black" 
                    price={28500} 
                    image="https://unsplash.com" 
                />
                <ProductCard 
                    id={3}
                    brand="Capita"
                    title="Сноуборд Defenders of Awesome 2024" 
                    price={49900} 
                    image="https://unsplash.com" 
                />
                <ProductCard 
                    id={4}
                    brand="Capita"
                    title="Сноуборд Custom Camber" 
                    price={62000} 
                    image="https://unsplash.com" 
                />
            </div>
        </div>
    );
}

export default CatalogPage;
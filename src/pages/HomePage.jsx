import React from "react";
import Banner from "../components/Banner/Banner";
import CategoryCard from "../components/CategoryCard/CategoryCard";
import ProductCard from "../components/ProductCard/ProductCard";
import { products } from "../data/products";


function HomePage() {
    const popularIds = [1, 3, 11, 19];
    const popularProducts = products.filter ((item) => popularIds.includes(item.id));
    return (
        <>
            <Banner />
            <section className="catalog-preview">
                <div className="preview-grid">
            
                    <CategoryCard
                        title="Сноуборды"
                        text={<>Лучшие модели<br />для каждого стиля катания</>}
                        className="card-snowboards"
                        to="/snowboards"
                    />
            
                    <CategoryCard
                        title="Крепления"
                        text={<>Надежность и контроль<br />в каждом спуске</>}
                        className="card-bindings"
                        to="/bindings"
                    />
                </div>
            </section>
        
            <section className="popular-products">
                <h2>Популярные товары</h2>
                <div className="products-grid">
                    {popularProducts.map((product) => (
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
            </section>
        </>
    );
}

export default HomePage;
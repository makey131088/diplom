import React from "react";
import Banner from "../components/Banner/Banner";
import CategoryCard from "../components/CategoryCard/CategoryCard";
import ProductCard from "../components/ProductCard/ProductCard";

function HomePage() {
    return (
        <>
            <Banner />
            <section className="catalog-preview">
                <div className="preview-grid">
            
                    <CategoryCard
                        title="Сноуборды"
                        text={<>Лучшие модели<br />для каждого стиля катания</>}
                        className="card-snowboards"
                    />
            
                    <CategoryCard
                        title="Крепления"
                        text={<>Надежность и контроль<br />в каждом спуске</>}
                        className="card-bindings"
                    />
                </div>
            </section>
        
            <section className="popular-products">
                <h2>Популярные товары</h2>
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
                </div>
            </section>
        </>
    )
}

export default HomePage;
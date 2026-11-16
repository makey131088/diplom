import React from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard/ProductCard";
import { products } from "../data/products";

function CatalogPage() {
    const [searchParams] = useSearchParams();
    const rawQuery = searchParams.get("search") || "";
    const searchQuery = rawQuery.toLowerCase().trim();

    const filteredProducts = products.filter((product) => {
        const titleMatch = product.title.toLowerCase().includes(searchQuery);
        const brandMatch = product.brand.toLowerCase().includes(searchQuery);
        return titleMatch || brandMatch;
    });

    return (
        <div className="catalog-page">
            <h1 className="popular-products-title">
                {searchQuery ? `Результаты поиска: «${rawQuery}»` : "Каталог товаров"}
            </h1>

            {filteredProducts.length > 0 ? (
                <div className="products-grid">
                    {filteredProducts.map((product) => (
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
            ) : (
                <p>По вашему запросу ничего не найдено.</p>
            )}
        </div>
    );
}

export default CatalogPage;

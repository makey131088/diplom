import React, { createContext, useState, useEffect, useContext } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  // Загружаем избранное из памяти браузера
    const [favoriteItems, setFavoriteItems] = useState(() => {
        const saved = localStorage.getItem("snowshop_favorites");
        return saved ? JSON.parse(saved) : [];
    });

  // Сохраняем при каждом изменении
    useEffect(() => {
        localStorage.setItem("snowshop_favorites", JSON.stringify(favoriteItems));
    }, 
    [favoriteItems]);

    const toggleFavorite = (product) => {
        setFavoriteItems((prev) => {
            const exists = prev.some((item) => item.id === product.id);
            if (exists) {
                return prev.filter((item) => item.id !== product.id);
            }
            return [...prev, product];
        });
    };

  // Проверка, находится ли товар уже в избранном (чтобы закрасить сердечко)
    const isFavorite = (id) => {
        return favoriteItems.some((item) => item.id === id);
    };

    return (
        <FavoritesContext.Provider
            value={{
                favoriteItems,
                toggleFavorite,
                isFavorite,
                favoritesCount: favoriteItems.length,
            }}
        >
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavorites() {
    return useContext(FavoritesContext);
}
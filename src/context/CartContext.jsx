import React, { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("snowshop_cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("snowshop_cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        const sizeKey = product.size || "default";
        const cartItemId = `${product.id}_${sizeKey}`;

        setCartItems((prevItems) => {
            const existingItem = prevItems.find(
                (item) => (item.cartItemId || `${item.id}_${item.size || "default"}`) === cartItemId
            );

            if (existingItem) {
                return prevItems.map((item) =>
                    (item.cartItemId || `${item.id}_${item.size || "default"}`) === cartItemId
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...prevItems, { ...product, cartItemId, quantity: 1 }];
        });
    };

    const removeFromCart = (targetId) => {
        setCartItems((prevItems) =>
            prevItems.filter(
                (item) => item.cartItemId !== targetId && item.id !== targetId
            )
        );
    };

    const updateQuantity = (targetId, amount) => {
        setCartItems((prevItems) =>
            prevItems
                .map((item) =>
                    item.cartItemId === targetId || (!item.cartItemId && item.id === targetId)
                        ? { ...item, quantity: item.quantity + amount }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                updateQuantity,
                totalPrice,
                totalCount,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}

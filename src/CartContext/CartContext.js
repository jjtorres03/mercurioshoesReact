import React, { useState, useContext, useEffect } from "react";
import { createContext } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext);


export const CartProvider = ({ children }) => {
    const cartStorage = JSON.parse(localStorage.getItem("cart") || "[]");
    const [cart, setCart] = useState(cartStorage);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);


    const addProduct = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
            }));
        }
        else {
            setCart([...cart, { ...item, quantity }]);
        }
    }

    const priceTotal = () => { return cart.reduce((prev, act) => prev + act.quantity * act.price, 0) }


    const productTotal = () => cart.reduce((acc, productN) => acc + productN.quantity, 0)

    const clearCart = () => setCart([]);

    const isInCart = (id) => { return cart.find(product => product.id === id) ? true : false; }

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));


    return (
        <CartContext.Provider value={{ clearCart, isInCart, removeProduct, addProduct, priceTotal, productTotal, cart }}>{children}</CartContext.Provider>

    )
}  
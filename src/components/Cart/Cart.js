import React from "react";
import './Cart.css';
import { useCartContext } from "../../CartContext/CartContext";
import { Link } from "react-router-dom";
import { ItemCart } from "../ItemCart/ItemCart";



export const Cart = () => {

    const { cart, priceTotal } = useCartContext();

    if (cart.length === 0) {
        return (

            <>
                <p className="cart-text">No hay Productos en el Carrito</p>
                <i class="bi bi-arrow-down"></i>
                <div className="button-contenedor">
                    <Link to='/'><button className="btn-buy">Ir a Comprar</button></Link>
                </div>

            </>
        )
    }

    return (
        <>
            <div className="cart">
                {
                    cart.map(product => <ItemCart key={product.id} product={product} />)
                }
                <p className="totalPrecio">Total Compra: $ {priceTotal()}</p>
                <div className="cart-button-checkout">
                    <Link to='/Checkout'><button className="cart-checkout" type="button">Checkout<i className="bi bi-arrow-right-short"></i></button></Link>
                </div>
            </div>
        </>
    )

}
import React from "react";
import { useCartContext } from "../../CartContext/CartContext";
import './ItemCart.css';


export const ItemCart = ({ product }) => {
  
  const { removeProduct } = useCartContext();

  return (

    <div className="cart-contenedor">
      <div className="item-cart">
        <div className="cart-encabezado">
          <h2 className="cart-nombre">{product.title}</h2>
          <img className="cart-img" src={product.img} alt="img" />
        </div>
        <div className="cart-detalle">
          <p className="cart-price"> Precio: $ {product.price}</p>
          <p className="cart-cantidad">Cantidad: {product.quantity} </p>
          <p className="cart-subtotal">SubTotal: $ {product.quantity * product.price}</p>
        </div>
        <div className="cart-button">
          <button className="card-button" type="button" onClick={() => removeProduct(product.id)}>Eliminar</button>
        </div>
      </div>
    </div>


  )
}
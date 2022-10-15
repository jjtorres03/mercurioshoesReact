import React from "react";
import { useCartContext } from "../../CartContext/CartContext";
import './CartWidget.css'

const CartWidget = () => {
   const { productTotal } = useCartContext()

   return (
      <div className="cart-widget">
         <i className="bi bi-cart-check"></i>
         <span className="cart-counter">{productTotal() || ''}</span>
         </div>
      
   );
}

export default CartWidget;
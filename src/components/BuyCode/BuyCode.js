import React from "react";
import './BuyCode.css';



export const BuyCode = ({ buycode }) => {

  return (

    <div className="container-Alert alert alert-success d-flex align-items-center" role="alert">
      <span className="alert-text">Gracias por tu compra tu codigo de Compra es: <p className="buy-alert">{buycode}</p></span>      
    </div>

  )
}
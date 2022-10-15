import React from "react";
import { Link } from "react-router-dom";
import './Item.css';




export const Item = ( {item} ) => {
  
 
  return (
    <div className="card-container">
      <h2 className="card-nombre">{item.title}</h2>
      <img className="card-img" src={item.img} alt="jjj" />
      <p className="card-precio">$ {item.price}</p>
      <Link to={`/detail/${item.id}`}>
        <button className="card-button" type="button">Ver Detalles</button>
      </Link>
    </div>

  )
}




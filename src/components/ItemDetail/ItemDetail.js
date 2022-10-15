import React, { useState } from "react";
import { useCartContext } from "../../CartContext/CartContext";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'



export const ItemDetail = ({ data }) => {
    const [toCart, setToCar] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        setToCar(true);
        addProduct(data, quantity);
      
    }

    return (

        <div className="container">
            <div className="contenedor-detalle">
                <div className="contenedor-img">
                    <h1 className="detalle-nombre">{data.title}</h1>
                    <img className="detalle-img" src={data.img} alt={data.title} />
                </div>
                <p className="detalle-descripcion">Destaca entre la multitud. La Jordan 23 trae de vuelta un lanzamiento de 2006 hecho en un diseño de reflectividad Negras con un detalles con tonalidad Blanca,El cuero sintético los materiales textiles duraderos y los lazos de encaje de plástico proporcionan estructura a este aspecto clásico fuera de la cancha</p>
            </div>

            <div className="item-count-detalle">
                {
                    toCart ? <Link to='/cart'><button className="buttonAgregar" type="button">Finalizar Compra</button></Link> 
                    : <ItemCount initial={1} stock={8} onAdd={onAdd} />
                }
            </div>
        </div>
    )

}
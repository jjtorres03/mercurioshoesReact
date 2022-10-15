import React, { useState } from "react";
import './ItemCount.css';


const ItemCount = ({ initial, stock, onAdd}) => {

    const [qty, setQty] = useState(initial);

    const sumaQty = () => {
        if (qty < stock) {
            setQty(qty + 1);
        }
    }

    const restaQty = () => {
        if (qty > 0) {
            setQty(qty - 1)
        }
    }




    return (
        <>
            <div className="contenedor-count">
                <div className="button-qty">
                    <span id="span">{qty}</span>
                    <button className="btnAumentar" type="button" onClick={sumaQty}>+</button>
                    <button className="btnDisminuir" type="button" onClick={restaQty}>-</button>
                </div>
                <button className="buttonAgregar" type="button" onClick={()=> onAdd(qty)} >Añadir al Carrio</button>
            </div>



        </>



    );
}



export default ItemCount;
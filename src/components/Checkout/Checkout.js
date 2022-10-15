import { collection, addDoc } from 'firebase/firestore';
import React, { useState } from "react";
import { db } from '../../firebase/config'
import { BuyCode } from '../BuyCode/BuyCode';
import { useCartContext } from '../../CartContext/CartContext';
import './Checkout.css'




export const Checkout = () => {
    const {cart, priceTotal} = useCartContext();

    const order = {
        buyer: {
            name: "",
            lastName: "",
            mail: "",
            phone: "",
        },
        item : cart.map(product => ({ title : product.title, price: product.price, quantity: product.quantity })),
        total : priceTotal()
    }

    const [orders, setOrders] = useState(order);
    const [buycode, setBuyCode] = useState('');

    const handleChange = (e) => {
        const { value, name } = e.target;
        setOrders({ ...orders, [name]: value })

    }

    const handleClick = async (e) => {
        e.preventDefault();
        const docRef = await addDoc(collection(db, 'ordersbuy'), {
            orders,
        })

        setOrders(orders);
        setBuyCode(docRef.id)
    };



    return (

        
        <form className="row g-3 justify-content-center mt-5" onSubmit={handleClick}>
            <h1 className='text-form'>Formulario para validar tu Compra</h1>
            <div className="col-md-3 mt-5">
                <label id="text-label" form="validationDefault01" className="form-label">Nombre</label>
                <input type="text" className="form-control" name="name" id="validationDefault01" value={orders.name} onChange={handleChange} required></input>
            </div>
            <div className="col-md-3 mt-5">
                <label id="text-label" form="validationDefault02" className="form-label">Apellido</label>
                <input type="text" className="form-control" name="lastName" id="validationDefault02" value={orders.lastName} onChange={handleChange} required></input>
            </div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-3">
                    <label id="text-label" form="validationDefaultUsername" className="form-label">Gmail</label>
                    <div className="input-group">
                        <span className="input-group-text" id="inputGroupPrepend2">@</span>
                        <input type="text" className="form-control" name="mail" id="validationDefaultUsername" value={orders.mail} onChange={handleChange}  required></input>
                    </div>
                </div>
                <div className="col-md-3">
                    <label id="text-label" form="validationDefault03" className="form-label">Telefono</label>
                    <input type="text" className="form-control" name="phone" id="validationDefault03" value={orders.phone} onChange={handleChange} required></input>
                </div>
            </div>
            <div className="col-12 text-center">
                <button className="btn btn-primary" type="submit">Enviar</button>
            </div>
            {buycode && <BuyCode buycode={buycode} />}
        </form>


    )
} 
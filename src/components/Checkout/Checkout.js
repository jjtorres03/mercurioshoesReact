import { collection, addDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../firebase/config";
import { BuyCode } from "../BuyCode/BuyCode";
import CircularProgress from "@mui/material/CircularProgress";
import { useCartContext } from "../../CartContext/CartContext";
import "./Checkout.css";

export const Checkout = () => {
  const { cart, priceTotal, clearCart } = useCartContext();
  const [inputs, setInputs] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
  });
  const [buycode, setBuyCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    const order = {
      buyer: inputs,
      item: cart.map((product) => ({ title: product.title, price: product.price, quantity: product.quantity })),
      total: priceTotal(),
    };

    const collectionRef = collection(db, "ordersbuy");
    addDoc(collectionRef, order).then(({ id }) => {
      setBuyCode(id);
    });
    clearCart();
  };

  return (
    <div>
      {buycode ? (
        <BuyCode buycode={buycode} />
      ) : (
        <form className="row g-3 justify-content-center mt-5" onSubmit={handleClick}>
          <h1 className="text-form">Formulario para validar tu Compra</h1>
          <div className="col-md-3 mt-5">
            <label id="text-label" form="validationDefault01" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="validationDefault01"
              onChange={handleOnChange}
              required
            ></input>
          </div>
          <div className="col-md-3 mt-5">
            <label id="text-label" form="validationDefault02" className="form-label">
              Apellido
            </label>
            <input
              type="text"
              className="form-control"
              name="lastname"
              id="validationDefault02"
              onChange={handleOnChange}
              required
            ></input>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-md-3">
              <label id="text-label" form="validationDefaultUsername" className="form-label">
                Gmail
              </label>
              <div className="input-group">
                <span className="input-group-text" id="inputGroupPrepend2">
                  @
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id="validationDefaultUsername"
                  onChange={handleOnChange}
                  required
                ></input>
              </div>
            </div>
            <div className="col-md-3">
              <label id="text-label" form="validationDefault03" className="form-label">
                Telefono
              </label>
              <input
                type="text"
                className="form-control"
                name="phone"
                id="validationDefault03"
                onChange={handleOnChange}
                required
              ></input>
            </div>
          </div>
          {loading === true ? (
            <CircularProgress />
          ) : (
            <div className="col-12 text-center">
              <button className="btn btn-primary" type="submit">
                Enviar
              </button>
            </div>
          )}
        </form>
      )}
    </div>
  );
};

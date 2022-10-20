import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./BuyCode.css";

export const BuyCode = ({ buycode }) => {
  return (
    <div className="container">
      <div className="alert alert-success d-flex flex-column align-items-center justify-content-center" role="alert">
        <CheckCircleIcon color="success" sx={{ fontSize: 60 }} />
        <span className="alert-text">
          Gracias por tu compra tu codigo de Compra es: <p className="buy-alert">{buycode}</p>
        </span>
      </div>
    </div>
  );
};
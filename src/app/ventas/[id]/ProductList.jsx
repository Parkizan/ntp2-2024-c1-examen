import "../Venta.css";
import Product from "./Product";
import { useState, useEffect } from "react";

const ProductList = (props) => {
  return (
    <ul className="users-list">
      {props.products.map((product) => (
        <Product
          name={product.name}
          price={product.price.$numberDecimal}
          quantity={product.quantity}
        />
      ))}
    </ul>
  );
};

export default ProductList;

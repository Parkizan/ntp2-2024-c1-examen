"use client";
import "../Venta.css";

function Product(product) {
  return (
    <li className="user-item">
      <div className="card user-item__content">
        <div className="user-item__image avatar">
          <img src="/caja.jpg" alt="Producto" />
        </div>
        <div className="user-item__info">
          <h2>{product.name}</h2>
          <h2>{product.price}</h2>
          <h3>{product.quantity}</h3>
        </div>
      </div>
    </li>
  );
}

export default Product;

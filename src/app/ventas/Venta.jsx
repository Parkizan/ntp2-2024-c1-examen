"use client";
import "./Venta.css";
import Link from "next/link";

function Venta(venta) {
  return (
    <li className="user-item">
      <div className="card user-item__content">
        <Link href={`/ventas/${venta.Id}`}>
          <div className="user-item__image avatar">
            <img src="/carrito.jpg" alt="Venta" />
          </div>
          <div className="user-item__info">
            <h2>{venta.saleDate}</h2>
            <h2>{venta.storeLocation}</h2>
            <h3>{venta.purchaseMethod}</h3>
          </div>
        </Link>
      </div>
    </li>
  );
}

export default Venta;

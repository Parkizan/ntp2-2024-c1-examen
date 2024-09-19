"use client";
import { useState, useEffect } from "react";
import ProductList from "./ProductList";

export default function PageDetails({ params }) {
  const { id } = params;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://salesbackend.azurewebsites.net/api/sales")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.find((venta) => venta._id === id).items);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}

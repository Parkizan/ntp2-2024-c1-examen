"use client";
import VentaList from "./VentaList";
import { useState, useEffect } from "react";

const VentaPage = (props) => {
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    fetch("https://salesbackend.azurewebsites.net/api/sales")
      .then((response) => response.json())
      .then((data) => {
        setVentas(data.slice(0, 100));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <VentaList ventas={ventas} />
    </div>
  );
};

export default VentaPage;

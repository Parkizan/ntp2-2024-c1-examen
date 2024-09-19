import "./Venta.css";
import Venta from "./Venta";

const VentaList = (props) => {
  return (
    <ul className="users-list">
      {props.ventas.map((venta) => (
        <Venta
          Id={venta._id}
          saleDate={venta.saleDate}
          storeLocation={venta.storeLocation}
          purchaseMethod={venta.purchaseMethod}
        />
      ))}
    </ul>
  );
};

export default VentaList;

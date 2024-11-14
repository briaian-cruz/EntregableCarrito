import { useState } from "react";
import ListaProductos from "./components/ListaProductos";
import groceries from "./data/groceries";
import Carrito from "./components/Carrito";
import "./App.css";

function App() {
  const [productosCarrito, setProductosCarrito] = useState([]);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <ListaProductos
              productos={groceries}
              productosCarrito={productosCarrito}
              setProductosCarrito={setProductosCarrito}
            />
          </div>
          <div className="col-6">
            <Carrito
              productosCarrito={productosCarrito}
              setProductosCarrito={setProductosCarrito}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

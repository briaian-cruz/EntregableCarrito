import { useState } from "react";
import ListaProductos from "./components/ListaProductos";
import groceries from "./data/groceries";
import Carrito from "./components/Carrito";
import "./App.css";

function App() {
  const [productoscarrito, setProductosCarrito] = useState([]);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <ListaProductos
              productos={groceries}
              productoscarrito={productoscarrito}
              setProductosCarrito={setProductosCarrito}
            />
          </div>
          <div className="col-6">
            <Carrito
              productoscarrito={productoscarrito}
              setProductosCarrito={setProductosCarrito}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

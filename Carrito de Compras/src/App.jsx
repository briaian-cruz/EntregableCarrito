import { useState } from "react";
import ListaProductos from "./components/ListaProductos";
import groceries from "./data/groceries";
import Carrito from "./components/Carrito";
import "./App.css";

function App() {
  const [productoscarrito, setProductosCarrito] = useState([]);
  return (
    <>
      <ListaProductos
        productos={groceries}
        productoscarrito={productoscarrito}
        setProductosCarrito={setProductosCarrito}
      />
      <Carrito
        productoscarrito={productoscarrito}
        setProductosCarrito={setProductosCarrito}
      />
    </>
  );
}

export default App;

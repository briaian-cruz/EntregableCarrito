import ProductosLista from "./ProductosLista";
function ListaProductos({ productos, productosCarrito, setProductosCarrito }) {
  // const AñadirCarrito = (productos) => {
  //   setProductosCarrito(productos);
  // };
  return (
    <>
      <h1>hola</h1>
      {productos.map((producto) => (
        <ProductosLista
          key={producto.id}
          productosCarrito={productosCarrito}
          setProductosCarrito={setProductosCarrito}
          producto={producto}
        />
      ))}
    </>
  );
}

export default ListaProductos;

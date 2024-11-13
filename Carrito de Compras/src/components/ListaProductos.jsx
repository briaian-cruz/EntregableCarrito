import ProductosLista from "./ProductosLista";
function ListaProductos({ productos, productoscarrito, setProductosCarrito }) {
  // const AñadirCarrito = (productos) => {
  //   setProductosCarrito(productos);
  // };
  return (
    <>
      <h1>hola</h1>
      {productos.map((producto) => (
        <ProductosLista
          key={producto.id}
          productoscarrito={productoscarrito}
          setProductos={setProductosCarrito}
          producto={producto}
        />
      ))}
    </>
  );
}

export default ListaProductos;

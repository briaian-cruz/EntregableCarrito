function Carrito({ productosCarrito }) {
  return (
    <>
      <h1>Carrito</h1>
      {productosCarrito.map((producto) => (
        <p key={producto.id}>
          {producto.name} ${producto.unitPrice}
        </p>
      ))}
    </>
  );
}
export default Carrito;

function Carrito({ productoscarrito }) {
  return (
    <>
      <h1>Carrito</h1>
      {productoscarrito.map((producto) => (
        <p key={producto.id}>
          {producto.name} ${producto.unitPrice}
        </p>
      ))}
    </>
  );
}
export default Carrito;

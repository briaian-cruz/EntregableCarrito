function Carrito({ productoscarrito }) {
  console.log(productoscarrito);
  return (
    <>
      {productoscarrito.map((producto) => (
        <p key={producto.id}>{producto.name}</p>
      ))}
    </>
  );
}
export default Carrito;

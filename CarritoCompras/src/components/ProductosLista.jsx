function ProductosLista({ producto, setProductosCarrito, productosCarrito }) {
  function handleClick() {
    setProductosCarrito([...productosCarrito, { producto, cantidad: 1 }]);
  }
  // ([...productosCarrito.push({ producto, cantidad: 1 })]);

  return (
    <>
      <p
        onClick={() => {
          handleClick();
        }}
      >
        {producto.name} ${producto.unitPrice}
      </p>
    </>
  );
}

export default ProductosLista;

function ProductosLista({ producto, setProductosCarrito, productosCarrito }) {
  function handleClick() {
    const prodExiste = productosCarrito.find(
      (prev) => prev.producto.id === producto.id
    );
    if (prodExiste) {
      const actual = productosCarrito.map((prev) =>
        prev.producto.id === producto.id
          ? { ...prev, cantidad: prev.cantidad + 1 }
          : prev
      );
      setProductosCarrito(actual);
    } else {
      setProductosCarrito([...productosCarrito, { producto, cantidad: 1 }]);
    }
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

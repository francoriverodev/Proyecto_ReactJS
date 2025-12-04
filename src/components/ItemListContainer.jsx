import products from "../data/products";

export default function ItemListContainer({ greeting }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>{greeting}</h2>

      <div className="products-container">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <div className="product-title">{item.nombre}</div>
            <div className="product-price">${item.precio}</div>
            <button className="product-button">Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Item({ producto, agregar }) {
  return (
    <div className="item-card">
      <img
        src={producto.img}
        alt={producto.nombre}
        className="w-32 h-32 object-cover mb-4 rounded-xl bg-gray-100"
      />
      <h3 className="text-lg font-bold mb-1">{producto.nombre}</h3>
      <p className="mb-4 font-semibold">${producto.precio}</p>

      <button
        onClick={() => agregar(producto)}
        className="px-4 py-2 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600"
      >
        Agregar al carrito
      </button>
    </div>
  );
}
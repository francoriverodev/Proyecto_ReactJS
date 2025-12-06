export function Navbar({ carrito }) {
  return (
    <header className="flex justify-between items-center bg-gray-200 p-4 rounded-xl mb-6">
     <h2 className="text-xl font-bold">Bienvenido!</h2>
      <div className="font-semibold">Carrito🛒: {carrito.length} productos</div>
    </header>
  );
}
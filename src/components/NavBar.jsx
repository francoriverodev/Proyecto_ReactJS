import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <nav
      style={{
        background: "#1b1b1b",
        color: "white",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <h1>ElectroShop</h1>

      <ul style={{ display: "flex", listStyle: "none", gap: "20px" }}>
        <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Inicio</a></li>
        <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Productos</a></li>
        <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Contacto</a></li>
      </ul>

      <CartWidget />
    </nav>
  );
}

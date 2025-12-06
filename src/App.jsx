import { useState } from "react";
import { Navbar } from "./components/NavBar";
import { Item } from "./components/Item";


const productos = [
  { id: 1, nombre: "Termica Bipolar 32A", precio: 3200, img: "https://http2.mlstatic.com/D_NQ_NP_2X_884987-MLA31012275925_062019-F.webp"},
  { id: 2, nombre: "Disyunton Bipolar 25A", precio: 3500, img: "https://http2.mlstatic.com/D_NQ_NP_2X_678860-MLA31179348568_062019-F.webp" },
  { id: 3, nombre: "Bastidor standard 3 modulos", precio: 480, img: "https://www.electromisiones.com.ar/32053-large_default/bastidor_jeluz_standard_para_3_modulos.webp" },
  { id: 4, nombre: "Cable Proto 4x6mm", precio: 1500, img: "https://www.electromedina.com.ar/presta17/11947-large_default/cable-subterraneo-2x15-kalop-.jpg" },
  { id: 5, nombre: "Toma Capsulado", precio: 900, img: "https://solucionesstg.com.ar/wp-content/uploads/2023/02/KLP-CPSU-1003_1.jpg" },
  { id: 6, nombre: "Kit Jabalina 1/2 con tapa de registro", precio: 1100, img: "https://http2.mlstatic.com/D_NQ_NP_2X_639094-MLA94348161201_102025-F.webp" },
];


export default function App() {
  const [carrito, setCarrito] = useState([]);


  const agregarAlCarrito = (producto) => {
  setCarrito((prev) => [...prev, producto]);
  };


  return (
    <div className="p-6 text-center">

      <Navbar carrito={carrito} />


      <section className="mb-6 text-center">
        <h1 className="text-3xl font-bold mb-2">Electricidad El Faraón</h1>
        <p className="text-lg">Seleccioná los productos que necesites 🔌⚡</p>
      </section>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {productos.map((prod) => (
          <Item key={prod.id} producto={prod} agregar={agregarAlCarrito} />
        ))}
      </div>
    </div>
  );
}
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/InterfazProductos.css";

export default function InterfazProductos() {

  const [showSnackbar, setShowSnackbar] = useState(false);

  const productos = [
    { 
      nombre: "Manzana Roja", 
      marca: "Del Campo",
      descripcion: "Manzana fresca seleccionada, ideal para postres.",
      contenido: "1 kg",
      categoria: "Frutas",
      precio: 1.50, 
      icono: "🍎" 
    },
    { 
      nombre: "Leche Entera", 
      marca: "Gloria",
      descripcion: "Leche entera natural, rica en calcio.",
      contenido: "1 L",
      categoria: "Lácteos",
      precio: 3.20, 
      icono: "🥛" 
    },
    { 
      nombre: "Huevos Grade A", 
      marca: "Avinka",
      descripcion: "Huevos frescos de gallina, excelente calidad.",
      contenido: "12 unidades",
      categoria: "Granja",
      precio: 6.80, 
      icono: "🥚" 
    },
    { 
      nombre: "Pan Francés", 
      marca: "Bimbo",
      descripcion: "Pan recién horneado, suave y crocante.",
      contenido: "6 unidades",
      categoria: "Panadería",
      precio: 0.50, 
      icono: "🍞" 
    },
    { 
      nombre: "Arroz Costeño", 
      marca: "Costeño",
      descripcion: "Arroz extra superior, grano largo.",
      contenido: "1 kg",
      categoria: "Granos",
      precio: 4.20, 
      icono: "🍚" 
    },
    { 
      nombre: "Fideos Spaghetti", 
      marca: "Don Vittorio",
      descripcion: "Pasta de alta calidad, cocción perfecta.",
      contenido: "500 g",
      categoria: "Pasta",
      precio: 7.50, 
      icono: "🍝" 
    },
  ];

  // Mostrar snackbar por 2 segundos
  const mostrarSnackbar = () => {
    setShowSnackbar(true);
    setTimeout(() => setShowSnackbar(false), 2000);
  };

  return (
    <div className="productos-wrapper">
      
      {/* ---- Barra Superior ---- */}
      <div className="productos-topbar">
        🛒 Interfaz de Productos
      </div>

      {/* ---- Buscador ---- */}
      <div className="productos-buscador">
        <input type="text" placeholder="Buscar producto..." className="buscador-input" />

        <select className="buscador-categorias">
          <option>Todo</option>
          <option>Frutas</option>
          <option>Lácteos</option>
          <option>Panadería</option>
          <option>Bebidas</option>
          <option>Granos</option>
          <option>Pasta</option>
        </select>
      </div>

      {/* ---- Grid ---- */}
      <div className="productos-grid">
        {productos.map((p, index) => (
          <div className="producto-card" key={index}>
            
            {/* Icono emoji */}
            <div className="producto-icon">{p.icono}</div>

            <div className="producto-info">
              <h3>{p.nombre}</h3>
              <p className="producto-marca">{p.marca}</p>
              <p className="producto-descripcion">{p.descripcion}</p>

              <div className="producto-extra">
                <span>{p.contenido}</span>
                <span className="categoria">{p.categoria}</span>
              </div>

              <p className="producto-precio">S/ {p.precio.toFixed(2)}</p>
            </div>

            <button className="producto-btn" onClick={mostrarSnackbar}>
              + Añadir
            </button>
          </div>
        ))}
      </div>

      {/* ---- Botón Ir a Caja ---- */}
      <Link to="/caja">
        <button className="btn-ir-caja">Ir a Caja Registradora ➜</button>
      </Link>

      {/* ---- Botón Almacén ---- */}
      <Link to="/almacen">
        <button className="btn-volver">Almacén</button>
      </Link>

      {/* ---- SNACKBAR ---- */}
      <div className={`snackbar ${showSnackbar ? "show" : ""}`}>
        ✔ Producto agregado correctamente
      </div>
    </div>
  );
}

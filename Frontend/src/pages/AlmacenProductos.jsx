import { Link } from "react-router-dom";
import "../styles/AlmacenProductos.css";

export default function AlmacenProductos() {
  const productos = [
    {
      nombre: "Manzana Roja",
      marca: "Del Campo",
      categoria: "Frutas",
      descripcion: "Manzana fresca de alta calidad.",
      contenido: "1 kg",
      stock: 50,
      precio: 2.99,
      vencimiento: "20 días",
      icono: "🍎"
    },
    {
      nombre: "Leche Entera",
      marca: "Gloria",
      categoria: "Lácteos",
      descripcion: "Leche entera enriquecida con calcio.",
      contenido: "1 L",
      stock: 25,
      precio: 1.99,
      vencimiento: "6 días",
      icono: "🥛"
    },
    {
      nombre: "Pan Francés",
      marca: "Bimbo",
      categoria: "Panadería",
      descripcion: "Pan suave y crocante recién horneado.",
      contenido: "6 unidades",
      stock: 15,
      precio: 1.49,
      vencimiento: "1 día",
      icono: "🍞"
    }
  ];

  return (
    <div className="almacen-wrapper">
      
      {/* ----- TOP BAR ----- */}
      <div className="almacen-topbar">
        📦 Almacén de Productos
      </div>

      {/* ----- BUSCADOR ----- */}
      <div className="almacen-buscador">
        <input
          type="text"
          placeholder="Buscar por nombre o código..."
          className="buscador-input"
        />

        <select className="buscador-categorias">
          <option>Todos</option>
          <option>Frutas</option>
          <option>Lácteos</option>
          <option>Panadería</option>
        </select>
      </div>

      {/* ----- CARDS DE ESTADÍSTICA ----- */}
      <div className="almacen-stats">
        <div className="almacen-stat-card">
          📦 <span>Total Productos</span> <strong>3</strong>
        </div>

        <div className="almacen-stat-card">
          ⚠️ <span>Stock Bajo</span> <strong>1</strong>
        </div>

        <div className="almacen-stat-card">
          💲 <span>Valor Total</span> <strong>$215.70</strong>
        </div>
      </div>

      {/* ----- LISTA DE PRODUCTOS ----- */}
      <div className="almacen-lista">
        {productos.map((p, index) => (
          <div className="almacen-card" key={index}>
            
            {/* Icono */}
            <div className="almacen-icon">{p.icono}</div>

            {/* Info producto */}
            <div className="almacen-info">
              <h3>{p.nombre}</h3>
              <p className="almacen-marca">{p.marca}</p>
              <p className="almacen-descripcion">{p.descripcion}</p>

              <div className="almacen-extra">
                <span>{p.contenido}</span>
                <span className="categoria">{p.categoria}</span>
              </div>

              <p className="almacen-precio">S/ {p.precio.toFixed(2)}</p>

              <p className="almacen-stock">Stock: {p.stock}</p>

              <p className="almacen-vencimiento">Vence en: {p.vencimiento}</p>
            </div>

            {/* Botón de opciones */}
            <button className="card-opciones">⋮</button>
          </div>
        ))}
      </div>

      {/* ----- BOTÓN AGREGAR ----- */}
      <Link to="/ingreso-codigo">
        <button className="btn-agregar">+</button>
      </Link>

      {/* Botón Volver */}
      <Link to="/">
        <button className="btn-volver">Volver</button>
      </Link>

    </div>
  );
}

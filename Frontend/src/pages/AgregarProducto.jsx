import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/AgregarProducto.css";

export default function AgregarProducto() {

  const [exito, setExito] = useState(false);
  const navigate = useNavigate();

  const mostrarMensaje = () => {
    setExito(true);
  };

  return (
    <div className="agregar-wrapper">

      {/* TOP BAR */}
      <div className="agregar-topbar">
        <Link to="/almacen" className="back-btn">⬅</Link>
        Registrar Producto
        <div></div>
      </div>

      {/* CARD */}
      <div className="agregar-card">

        {/* Emoji */}
        <div className="agregar-emoji">📦</div>

        <h2 className="agregar-title">Nuevo Producto</h2>
        <p className="agregar-sub">
          Complete todos los datos para registrar un producto en el almacén.
        </p>

        {/* FORMULARIO COMPLETO */}
        <div className="formulario">

          <div className="campo">
            <label>Emoji del Producto</label>
            <input type="text" placeholder="Ej: 🍎" maxLength={2} />
          </div>

          <div className="campo">
            <label>Nombre del Producto</label>
            <input type="text" placeholder="Ej: Manzana Roja" />
          </div>

          <div className="campo">
            <label>Marca</label>
            <input type="text" placeholder="Ej: Del Campo" />
          </div>

          <div className="campo">
            <label>Descripción</label>
            <textarea placeholder="Ej: Manzana fresca de alta calidad"></textarea>
          </div>

          <div className="campo">
            <label>Contenido / Presentación</label>
            <input type="text" placeholder="Ej: 1kg, 1L, 500g" />
          </div>

          <div className="campo">
            <label>Categoría</label>
            <select>
              <option>Frutas</option>
              <option>Lácteos</option>
              <option>Panadería</option>
              <option>Bebidas</option>
              <option>Granos</option>
              <option>Carnes</option>
              <option>Aseo</option>
              <option>Snacks</option>
              <option>Otros</option>
            </select>
          </div>

          <div className="campo">
            <label>Código del Producto</label>
            <input type="text" placeholder="Ej: 78451236" />
          </div>

          <div className="campo">
            <label>Precio (S/)</label>
            <input type="number" step="0.01" placeholder="Ej: 2.50" />
          </div>

          <div className="campo">
            <label>Stock Inicial</label>
            <input type="number" placeholder="Ej: 50" />
          </div>

          <div className="campo">
            <label>Fecha de Vencimiento</label>
            <input type="date" />
          </div>

        </div>

        {/* BOTONES */}
        <div className="agregar-buttons">
          <Link to="/almacen">
            <button className="btn-cancelar">Cancelar</button>
          </Link>

          <button className="btn-guardar" onClick={mostrarMensaje}>
            Guardar Producto ✔
          </button>
        </div>

      </div>

      {/* MENSAJE DE ÉXITO */}
      {exito && (
        <div className="mensaje-exito">
          <div className="mensaje-card">
            <div className="mensaje-emoji">✔️</div>
            <h3>¡Producto guardado exitosamente!</h3>

            <button
              className="mensaje-btn"
              onClick={() => navigate("/almacen")}
            >
              OK
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

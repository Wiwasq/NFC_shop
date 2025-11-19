import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/IngresoCodigo.css";

export default function IngresoCodigo() {

  const [codigo, setCodigo] = useState("");
  const navigate = useNavigate();

  const continuar = () => {
    if (codigo.trim() !== "") {
      navigate("/agregar-producto");
    }
  };

  return (
    <div className="codigo-wrapper">

      {/* TOP BAR */}
      <div className="codigo-topbar">
        <Link to="/almacen" className="back-btn">⬅</Link>
        Verificación de Usuario
        <div></div>
      </div>

      {/* CARD */}
      <div className="codigo-card">

        <div className="codigo-emoji">🔑</div>

        <h2 className="codigo-title">Ingresar Código de Usuario</h2>

        <p className="codigo-sub">
          Para acceder al registro de nuevos productos, por favor ingresa tu código.
        </p>

        <input 
          type="password"
          className="codigo-input"
          placeholder="Ingrese su código..."
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
        />

        {/* BOTONES */}
        <div className="codigo-buttons">
          <Link to="/almacen">
            <button className="btn-cancelar">Cancelar</button>
          </Link>

          <Link to="/agregar-producto">
            <button className="btn-continuar">Continuar</button>
          </Link>
        </div>

      </div>
    </div>
  );
}

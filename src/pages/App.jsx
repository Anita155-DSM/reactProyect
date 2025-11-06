import { useState } from "react";
import { Login } from "../components/Login";
import { Register } from "../components/register";
import { MultipleCustomHooks } from "./MultipleCustomHooks";
import { FirstApp } from "../components/FirstApp";
//DISCULPE EL DESARROLLO DESORDENADO, ESTOY PRACTICANDO MUCHO CON LOS HOOKS Y ME PIERDO UN POCO.
//OLVIDÉ CREAR MI REPOSITORIO NUEVO PARA LOS EJERCICIOS. NO VOLVERÁ A PASAR.
export const App = () => {
  const [user, setUser] = useState("");

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => setUser("");

  const [showTarea1, setShowTarea1] = useState(false); //estado de FirstApp

  const [showTarea2, setShowTarea2] = useState(false); //estado de Register y Login

  const [showSimpsons, setShowSimpsons] = useState(false); //estado de la api


  return (
    <>
  <h1>TRABAJOS PRÁCTICOS DE REACT</h1>
  <h3>Alumna: Pérez Anahi Jacqueline</h3>
  <div className="task-bar">
    <button className="task-toggle" onClick={() => setShowTarea1((v) => !v)}>
      {showTarea1 ? "Ocultar Tarea 1" : "Tarea 01 - Mostrar FirstApp"}
    </button>

    <button className="task-toggle" onClick={() => setShowTarea2((v) => !v)}>
      {showTarea2 ? "Ocultar Tarea 02 - Login/Register" : "Tarea 02 - Mostrar Login/Register"}
    </button>

    <button className="task-toggle" onClick={() => setShowSimpsons((v) => !v)}>
      {showSimpsons ? "Ocultar API Los Simpsons" : "Tarea 03 - API Los Simpsons"}
    </button>
  </div>

  {showTarea1 && <FirstApp />}

  {showTarea2 && (
    <div className="auth-section">
      <h1>¡Hola de nuevo {user}!</h1>
      <button className="btn-logout" onClick={handleLogout}>Logout</button>
      <div className="auth-forms">
        <Login onLogin={handleLogin} />
        <div style={{ height: 12 }} />
        <h2>Register. si no tenés una cuenta, registrate</h2>
        <Register />
      </div>
    </div>
  )}

  {showSimpsons && <MultipleCustomHooks />}
    </>
  );
};


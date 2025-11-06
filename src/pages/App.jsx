import { useState } from "react";
import { Login } from "../components/Login";
import { Register } from "../components/register";
import { MultipleCustomHooks } from "./MultipleCustomHooks";
//DISCULPE EL DESARROLLO DESORDENADO, ESTOY PRACTICANDO MUCHO CON LOS HOOKS Y ME PIERDO UN POCO.
//OLVIDÉ CREAR MI REPOSITORIO NUEVO PARA LOS EJERCICIOS. NO VOLVERÁ A PASAR.
export const App = () => {
  const [user, setUser] = useState("");

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => setUser("");

  const [showSimpsons, setShowSimpsons] = useState(false); //estado de la api

  return (
    <> 
  <h1>¡Hola de nuevo {user}!</h1>
  <button onClick={handleLogout}>Logout</button>

  <Login onLogin={handleLogin} />
  <h2>
    Register. si no tenés una cuenta, registrate
  </h2>
  <Register />
  <div>
    <button onClick={() => setShowSimpsons((v) => !v)}>
      {showSimpsons ? "Ocultar API Los Simpsons" : "Tarea 03 - API Los Simpsons"}
    </button>
  </div>

  {showSimpsons && <MultipleCustomHooks />}
    </>
  );
};


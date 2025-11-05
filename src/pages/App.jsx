import { useState } from "react";
import { Login } from "../components/Login";
import { Register } from "../components/register";
//DISCULPE EL DESARROLLO DESORDENADO, ESTOY PRACTICANDO MUCHO CON LOS HOOKS Y ME PIERDO UN POCO.
//OLVIDÉ CREAR MI REPOSITORIO NUEVO PARA LOS EJERCICIOS. NO VOLVERÁ A PASAR.
export const App = () => {
  const [user, setUser] = useState("");

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => setUser("");

  return (
    <>
  <h1>¡Hola de nuevo {user}!</h1>
  <button onClick={handleLogout}>Logout</button>

  <Login onLogin={handleLogin} />
  <h2>
    Register. si no tenés una cuenta, registrate
  </h2>
  <Register />
    </>
  );
};


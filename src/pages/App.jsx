import { useState } from "react";
import { Login } from "../components/Login";
import { Register } from "../components/register";
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


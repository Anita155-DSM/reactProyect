//tarea 2 (la mayoria sacado del repo del profe)
import { useForm } from "../hooks/useForm";

export const Login = ({ onLogin }) => {
  const { formState, handleChange, handleReset } = useForm({
    username: "",
    password: "",
  });
  
  const { username, password } = formState;
  const handleSubmit = (event) => {
    event.preventDefault();

    if (typeof onLogin === "function") {
      onLogin(formState.username);
    }

    console.log(formState);

    handleReset();
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={password}
        onChange={handleChange}
      />
      <button className="auth-btn">Iniciar Sesion</button>
    </form>
  );
};


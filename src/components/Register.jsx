import { useForm } from "../hooks/useForm";

export const Register = () => {
  const { formState, handleChange, handleReset } = useForm({
    username: "",
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });

  const { username, email, password, firstname, lastname } = formState;

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formState);

    handleReset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={username}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="email"
        value={email}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="password"
        value={password}
        onChange={handleChange}
      />

      <input
        type="text"
        name="firstname"
        placeholder="firstname"
        value={firstname}
        onChange={handleChange}
      />

      <input
        type="text"
        name="lastname"
        placeholder="lastname"
        value={lastname}
        onChange={handleChange}
      />

      <button>Register</button>
    </form>
  );
};

//CUSTOM HOOK (generalmente retorna un objeto) useForm.js
import { useState } from "react";

export const useForm = (initialState) => { 
  //INITIAL STATE REPRESENTA EL ESTADO INICIAL DEL FORMULARIO
  const [formState, setFormState] = useState(initialState);
  //use state para tener ESTADO LOCAL DENTRO DEL HOOK
  const { username, password } = formState;  

  const handleChange = ({ target }) => {  
    const { name, value } = target;

    setFormState({
      //voy a dejar tal cual el formulario exceptuando lo que modifique luego.
      ...formState,
      //puede venir usuario o password, independientemente de que input se ejecute
      [name]: value,
    });
  };

  const handleReset = () => {
    setFormState(initialState);
  };

  const handleSubmit = (event, onLogin) => {
    // prevenir que se reincie el formulario
    event.preventDefault();

      if (typeof onLogin === 'function') {
       onLogin(formState.username);
      }
    
    console.log(formState);
    // logica o ejecutar la funcion que resetea el formulario
    handleReset();
  };

  return {
    formState,
    ...formState,
    username,
    password,
    handleChange,
    handleSubmit,
    handleReset //si no retorno handleReset cuando lo llame en el componente LOGIN no va a existir. queda undefined y al invocarla JavaScript lanza TypeError
  };
};

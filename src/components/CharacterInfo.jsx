//personalización de los personajes de la API DE LOS SIMPSONS
//- Crear **un componente para mostrar la información del personaje** (por ejemplo: `CharacterInfo.jsx`).
//- El componente del personaje debe mostrar **más de una propiedad** (no solo el nombre) e **incluir la imagen del personaje**.
import React from "react";

export const CharacterInfo = ({ character }) => {
  if (!character) {
    return <p>PROBLEMAS AL GENERAR EL PERSONAJE.</p>;
  }
//   if (!character.age){ // algunos personajes no tienen edad en la API
//     return (
//       <div>
//         <h3>{character.name}</h3>
//         <p>Edad: No disponible</p>
//         <img src={character.image} alt={character.name} />
//       </div>
//     );
//   }
//me di cuenta que poniendo una condicional OR me ahorraba código ya que algunas edades no estan disponible en la API, aunque igualmente dejo ese bloque de código comentado por si acaso.
  return (
    <div>
      <h3>{character.name}</h3>
      <p>Edad: {character.age || "No disponible"}</p>
      <p>Género: {character.gender || "No disponible"}</p>
      <p>Descripción: {character.description || "No disponible"}</p>
      <img src={character.portrait_path} alt={character.name} />
    </div>
  );
};

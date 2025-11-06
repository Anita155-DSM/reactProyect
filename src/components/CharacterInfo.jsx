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
    // console.log removed from JSX
    <div className="character-card">
      <div className="character-card__info">
        <h3>{character.name}</h3>
        <p className="muted">Edad: {character.age || "No disponible"}</p>
        <p className="muted">Género: {character.gender || "No disponible"}</p>
        <p>{character.description || "No disponible"}</p>
      </div>
      {/* <img className="bnha-avatar" src={`https://thesimpsonsapi.com/500/${character.portrait_path}`} alt={character.name} />  (PRUEA NOMAS) */}
      {/* placeholder genérico porque la API está caída */}
      <img
        className="bnha-avatar"
        src={`https://placehold.co/150x200?text=${character.name.split(' ')[0]}`}
        alt={character.name}
      />
    </div>
  );
};
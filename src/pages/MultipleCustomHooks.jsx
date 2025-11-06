import { useEffect } from "react";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { Loading } from "../components/Loading";
import { CharacterInfo } from "../components/CharacterInfo";

export const MultipleCustomHooks = () => {

    const { count, handleIncrement } = useCounter(1);

  const url = `https://thesimpsonsapi.com/api/characters/${count}`;

  const { data: apiData, isLoading: apiLoading, error: apiError } = useFetch(url);

  const displayData = apiData;
  const displayLoading = apiLoading;
  const displayError = apiError;

  // Debug: muestra en consola la data completa para inspeccionar las claves
  // (quitar en producción)
  useEffect(() => {
    if (displayData) console.log("API character data:", displayData);
  }, [displayData]);
//   if (count === 1 ) {
//     // Si estamos en el primer personaje y se intenta ir a uno anterior, necesito que el boton "anterior" deje de poder apretarse
//     handleIncrement(0); // mantener en 1
//   }

  return (
    <>
      <h1>Los simpsons API</h1>
      <h2>Personajes</h2>

      {/* <h3>
        #{data?.id}-{data?.name}
      </h3> */}

      {displayLoading ? (
        <Loading/>
      ) : displayError ? (
        <p>Error: {displayError}</p>
      ) : (
        <CharacterInfo character={displayData} />
      )}

      <button
        onClick={() => handleIncrement(-1)}
        disabled={
          count === 1 ||
          (displayData && displayData.name === "Homer Simpson")
        }
        id="boton-anterior"
        className="nav-btn nav-btn--prev"
      >
        Anterior
      </button>
      <button className="nav-btn nav-btn--next" onClick={() => handleIncrement(1)} disabled={displayLoading}>
        Siguiente
      </button>
    </>
  );
};

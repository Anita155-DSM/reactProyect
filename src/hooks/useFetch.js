import { useEffect, useState } from "react";

/**
 * useFetch extrae la lógica de fetch existente en MultipleCustomHooks
 * Recibe una URL y retorna { data, isLoading, error }
 */
export const useFetch = (url) => {
  const [state, setState] = useState({ data: null, isLoading: false, error: null });

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController();
    const signal = controller.signal;

    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    fetch(url, { signal })
      .then((resp) => {
        if (!resp.ok) throw new Error(resp.statusText || `HTTP error ${resp.status}`);
        return resp.json();
      })
      .then((data) => {
        setState({ data, isLoading: false, error: null });
      })
      .catch((err) => {
        if (err.name === "AbortError") return; // petición cancelada
        setState({ data: null, isLoading: false, error: err.message || String(err) });
      });

    return () => controller.abort();
  }, [url]);

  return state; // { data, isLoading, error }
};

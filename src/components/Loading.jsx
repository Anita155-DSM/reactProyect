import React from "react";

// colorcito azulcito, bastante simplw
export const Loading = ({ message = "Cargando..." }) => {
  return (
    <div className="loading" role="status" aria-live="polite">
      <div className="loading__spinner" aria-hidden="true" />
      <div className="loading__message">{message}</div>
    </div>
  );
};

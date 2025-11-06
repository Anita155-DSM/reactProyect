import React from "react";

export const Loading = ({ message = "Cargando..." }) => {
  const spinnerStyle = {
    width: 48,
    height: 48,
    border: "4px solid #ddd",
    borderTop: "4px solid #3b82f6",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    marginRight: 12,
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={spinnerStyle} aria-hidden="true" />
      <div>{message}</div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

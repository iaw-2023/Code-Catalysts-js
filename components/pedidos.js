import React from "react";

export default function Pedidos({ pedidos }) {
  if (pedidos == "") {
    return (
      <div style={styles.noPedidosContainer}>
        <p style={styles.noPedidosMessage}>No se encontraron pedidos</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {pedidos.map((pedido) => (
        <div key={pedido.id_pedido} style={styles.pedidoContainer}>
          <p style={styles.descripcion}>{pedido.descripcion}</p>
          <p style={styles.precio}>${pedido.precio}</p>
          <p style={styles.talle}>{pedido.talle}</p>
          <p style={styles.fecha}>{pedido.fecha}</p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px auto",
    maxWidth: "1600px",
  },
  pedidoContainer: {
    width: "90%",
    margin: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "20px",
    textAlign: "left",
  },
  descripcion: {
    fontWeight: "bold",
    marginBottom: "10px",
    fontSize: "1.2em",
  },
  precio: {
    color: "#007bff",
    marginBottom: "5px",
    fontSize: "1.1em",
  },
  talle: {
    fontStyle: "italic",
    marginBottom: "5px",
    fontSize: "1em",
  },
  fecha: {
    fontSize: "0.9em",
    color: "#999",
  },
  noPedidosContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "200px",
  },
  noPedidosMessage: {
    fontSize: "1.5em",
    fontWeight: "bold",
    color: "#999",
  },
};
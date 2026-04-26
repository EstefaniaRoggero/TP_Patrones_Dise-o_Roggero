function procesarVenta(metodoPago) {
  metodoPago.pagar(500);
}

// Sistema nuevo (IMPORTANTE: esto te faltaba)
const sistemaNuevo = {
  ejecutarPago(monto) {
    console.log("Pagando:", monto);
  }
};

// Adapter
class AdapterPago {
  constructor(sistema) {
    this.sistema = sistema;
  }

  pagar(monto) {
    this.sistema.ejecutarPago(monto);
  }
}

// Uso
const adaptador = new AdapterPago(sistemaNuevo);
procesarVenta(adaptador);
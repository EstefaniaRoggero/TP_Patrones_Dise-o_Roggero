class AdapterPago {
  constructor(sistemaNuevo) {
    this.sistemaNuevo = sistemaNuevo;
  }

  pagar(monto) {
    this.sistemaNuevo.ejecutarPago(monto);
  }
}

const adaptador = new AdapterPago(sistemaNuevo);

procesarVenta(adaptador);
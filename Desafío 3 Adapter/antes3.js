const sistemaNuevo  = {
    ejecutarpago: function(monto) { console.log("Pagando:  " + monto); }

};

function ProcesarVenta(plataforma) {
    plataforma.pagar(500);
}  

ProcesarVenta(sistemaNuevo);

// Modelo
function obtenerDatos() {
  return [1, 2, 3, 4];
}

// Lógica
function filtrarDatos(datos) {
  return datos.filter(n => n > 2);
}

// Vista
function mostrarDatos(datos) {
  console.log("Resultado:", datos);
}

// App
const datos = obtenerDatos();
const filtrados = filtrarDatos(datos);
mostrarDatos(filtrados);
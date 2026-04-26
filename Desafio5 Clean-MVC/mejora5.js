// Modelo (datos)
function obtenerUsuarios() {
  return ["Admin", "Editor", "Cliente"];
}

// Lógica (controlador)
function filtrarUsuarios(usuarios) {
  return usuarios.filter(u => u !== "Admin");
}

// Vista
function mostrarUsuarios(lista) {
  console.log("Lista de usuarios:");
  lista.forEach(u => console.log("- " + u));
}

// Ejecución
const usuarios = obtenerUsuarios();
const filtrados = filtrarUsuarios(usuarios);
mostrarUsuarios(filtrados);
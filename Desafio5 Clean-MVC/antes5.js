function gestionarusuarios() {
    const lista = ["Admin", "Editor", "Cliente"];

    const filtrados = lista.filter(usuario => usuario !== "Admin");
    
    console.log("<h1>Lista de usuarios</h1>");
        filtrados.forEach(usuario => console.log(`<p>${usuario}</p>`));
}   
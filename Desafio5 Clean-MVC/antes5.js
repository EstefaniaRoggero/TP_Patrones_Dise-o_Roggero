function gestionarusuarios() {
    const lista = ["Admin", "Editor", "Cliente"];

    const filtrados = lista.filter(u => u !== "Admin");
    
    console.log("<h1>Lista de usuarios</h1>");
        filtrados.forEach(u => console.log("<li>" + u + "</li>"));
}   

gestionarusuarios();
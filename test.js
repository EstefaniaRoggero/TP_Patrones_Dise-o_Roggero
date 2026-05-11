function test_enviar_mensaje_mediator() {

    const chat = new ChatRoom();

    const u1 = new Usuario("Ana", chat);
    const u2 = new Usuario("Luis", chat);

    chat.agregar(u1);
    chat.agregar(u2);

    let mensajeRecibido = "";

    // Simulación del método recibir
    u2.recibir = (mensaje) => {
        mensajeRecibido = mensaje;
    };

    u1.enviar("Hola!");

    console.assert(mensajeRecibido === "Ana: Hola!");
}

function test_filtrarUsuarios() {

    const lista = ["Admin", "Editor", "Cliente"];

    const resultado = filtrarUsuarios(lista);

    console.assert(
        JSON.stringify(resultado) ===
        JSON.stringify(["Editor", "Cliente"])
    );
}
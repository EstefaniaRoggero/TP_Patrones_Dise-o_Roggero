class ChatRoom {
  constructor() {
    this.usuarios = [];
  }

  agregar(usuario) {
    this.usuarios.push(usuario);
  }

  enviar(mensaje, emisor) {
    this.usuarios.forEach(user => {
      if (user !== emisor) {
        user.recibir(mensaje);
      }
    });
  }
}

class Usuario {
  constructor(nombre, chat) {
    this.nombre = nombre;
    this.chat = chat;
  }

  enviar(mensaje) {
    this.chat.enviar(this.nombre + ": " + mensaje, this);
  }

  recibir(mensaje) {
    console.log(mensaje);
  }
}

function filtrarUsuarios(lista) {
  return lista.filter(u => u !== "Admin");
}

function test_enviar_mensaje_mediator() {

    const chat = new ChatRoom();

    const u1 = new Usuario("Ana", chat);
    const u2 = new Usuario("Luis", chat);

    chat.agregar(u1);
    chat.agregar(u2);

    let mensajeRecibido = "";

    u2.recibir = (mensaje) => {
        mensajeRecibido = mensaje;
    };

    u1.enviar("Hola!");

    console.assert(
        mensajeRecibido === "Ana: Hola!",
        "❌ Error en Mediator"
    );

    console.log("✅ Test Mediator correcto");
}

function test_filtrarUsuarios() {

    const lista = ["Admin", "Editor", "Cliente"];

    const resultado = filtrarUsuarios(lista);

    console.assert(
        JSON.stringify(resultado) ===
        JSON.stringify(["Editor", "Cliente"]),
        "❌ Error en filtrado"
    );

    console.log("✅ Test filtrarUsuarios correcto");
}

test_enviar_mensaje_mediator();
test_filtrarUsuarios();
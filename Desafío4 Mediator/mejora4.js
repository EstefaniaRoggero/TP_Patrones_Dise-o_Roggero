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

const chat = new ChatRoom();

const u1 = new Usuario("Ana", chat);
const u2 = new Usuario("Luis", chat);

chat.agregar(u1);
chat.agregar(u2);

u1.enviar("Hola!");

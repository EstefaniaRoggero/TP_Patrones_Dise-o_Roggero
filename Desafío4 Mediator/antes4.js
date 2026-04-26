//const usuario1= {
   // nombre: "Juan",
    //amigos: []
//};  
//const usuario2= {
   // nombre: "Maria",
    //amigos: []
//};  

//usuario1.amigos.push(usuario2);
//usuario2.amigos.push(usuario1);    

// PROBLEMA:
// Los usuarios se comunican directamente (alto acoplamiento)

class Usuario {
  constructor(nombre) {
    this.nombre = nombre;
    this.contactos = [];
  }

  agregarContacto(usuario) {
    this.contactos.push(usuario);
  }

  enviar(mensaje) {
    this.contactos.forEach(c =>
      console.log(this.nombre + " a " + c.nombre + ": " + mensaje)
    );
  }
}

// Uso
const u1 = new Usuario("Ana");
const u2 = new Usuario("Luis");

u1.agregarContacto(u2);

u1.enviar("Hola!");
class Pizza {
  costo() {
    return 1000;
  }
}

// Decorador base
class Ingrediente {
  constructor(pizza) {
    this.pizza = pizza;
  }

  costo() {
    return this.pizza.costo();
  }
}

class Queso extends Ingrediente {
  costo() {
    return super.costo() + 200;
  }
}

class Pepperoni extends Ingrediente {
  costo() {
    return super.costo() + 300;
  }
}

// Uso
let pizza = new Pizza();
pizza = new Queso(pizza);
pizza = new Pepperoni(pizza);

console.log("Costo final:", pizza.costo());
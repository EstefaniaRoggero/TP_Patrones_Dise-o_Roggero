class Pizza {
  costo() {
    return 1000;
  }
}

class Queso {
  constructor(pizza) {
    this.pizza = pizza;
  }

  costo() {
    return this.pizza.costo() + 200;
  }
}

class Pepperoni {
  constructor(pizza) {
    this.pizza = pizza;
  }

  costo() {
    return this.pizza.costo() + 300;
  }
}

let pizza = new Pizza();
pizza = new Queso(pizza);
pizza = new Pepperoni(pizza);

console.log(pizza.costo()); // 1500
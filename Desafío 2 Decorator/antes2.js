class PizzaSimple {
  getPrecio() {return 500;}
}

class PizzaConQueso 
    extends PizzaSimple {
    getPrecio() {return 600;}
    }

    class PizzaConQuesoyPepperoni 
    extends PizzaSimple {
    getPrecio() {return 750;}
    }   

    const pizza1 = new PizzaSimple();
const pizza2 = new PizzaConQueso();
const pizza3 = new PizzaConQuesoyPepperoni();

console.log("Simple:", pizza1.getPrecio());
console.log("Con queso:", pizza2.getPrecio());
console.log("Queso + pepperoni:", pizza3.getPrecio());
// SOLUCIÓN:
// Se aplica Singleton para tener una única instancia compartida
class Config {
  constructor() {
    if (Config.instance) {
      return Config.instance;
    }
    this.idioma = "es";
    Config.instance = this;
  }
}

const config1 = new Config();
const config2 = new Config();

config1.idioma = "en";

console.log(config2.idioma); // "en"
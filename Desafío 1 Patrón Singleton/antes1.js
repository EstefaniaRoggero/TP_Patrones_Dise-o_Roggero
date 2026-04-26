function obtenerConfig() { 
    return {
        idioma: "es",
        tema: "oscuro"
    };
}   

const config1 = obtenerConfig();
const config2 = obtenerConfig();
console.log(config1 === config2); // false, son objetos diferentes en memoria
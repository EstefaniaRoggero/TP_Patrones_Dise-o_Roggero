TP Patrones de Diseño

Roggero Estefania

Descripción

En este trabajo se refactorizaron distintos códigos aplicando patrones de diseño para mejorar la organización, reutilización y escalabilidad.

Desafío 1 - Singleton

Se aplicó Singleton para evitar múltiples instancias de configuración.
Ahora todos los objetos comparten el mismo estado.
Resultado esperado:
Si cambio un valor en una instancia, se refleja en todas.


Desafío 2 - Decorator

Se utilizó Decorator para agregar ingredientes a una pizza sin crear muchas clases.
Resultado esperado:
El costo final se calcula sumando cada ingrediente agregado.


Desafío 3 - Adapter

Se aplicó Adapter para adaptar un sistema nuevo a uno existente sin modificarlo.
Resultado esperado:
El sistema nuevo funciona correctamente dentro de la función original.


Desafío 4 - Mediator

Se implementó Mediator para centralizar la comunicación entre usuarios.
Resultado esperado:
Los mensajes se envían a través del chat sin que los usuarios se conozcan entre sí.


Desafío 5 - MVC / Clean

Se separó el código en responsabilidades: datos, lógica y vista.
Resultado esperado:
Los datos se obtienen, filtran y muestran de forma ordenada.

# Pig Game

Este es un juego interactivo implementado con JavaScript donde dos jugadores compiten por alcanzar 100 puntos.

## Demo en vivo
[Jugar Pig Game](https://ecremades.github.io/JS_Pig_Game/)

## Reglas del juego
- Los jugadores toman turnos para tirar un dado
- En cada turno, un jugador puede tirar el dado tantas veces como quiera
- Cada resultado se suma a la puntuación ACTUAL del jugador
- Si el jugador saca un 1, pierde toda su puntuación ACTUAL y pasa el turno
- El jugador puede elegir 'Hold' para guardar su puntuación ACTUAL
- El primer jugador en alcanzar 100 puntos gana

## Instalación local

```bash
# Clonar el repositorio
git clone https://github.com/ecremades/JS_Pig_Game.git

# Entrar al directorio
cd JS_Pig_Game

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build
```

## Tecnologías utilizadas
- Vite
- JavaScript
- HTML5
- CSS3
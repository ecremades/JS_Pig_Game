// Importamos las imágenes de los dados
import dice1 from '../public/dice-1.png';
import dice2 from '../public/dice-2.png';
import dice3 from '../public/dice-3.png';
import dice4 from '../public/dice-4.png';
import dice5 from '../public/dice-5.png';
import dice6 from '../public/dice-6.png';

import "./style.css";

// ========================
// PASO 1: CONFIGURACIÓN DEL JUEGO
// ========================

// Seleccionamos elementos del DOM
const sectionPlayer0 = document.querySelector(".player--0");
const sectionPlayer1 = document.querySelector(".player--1");
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const currentScore0 = document.querySelector("#current--0");
const currentScore1 = document.querySelector("#current--1");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const btnRoll = document.querySelector(".btn--roll");
const imgDice = document.querySelector(".dice");

// Mapa de imágenes de dados
const diceImages = {
  1: dice1,
  2: dice2,
  3: dice3,
  4: dice4,
  5: dice5,
  6: dice6
};

// Variables de estado
let score, currentScore, activePlayer, playing;

// Función para inicializar el juego
const initData = () => {
  score = [0, 0];         
  currentScore = 0;       
  activePlayer = 0;       
  playing = true;

  // Resetear los valores en el DOM
  imgDice.classList.add("hidden");  
  score0.textContent = 0;
  score1.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  
  sectionPlayer0.classList.remove('player--winner');
  sectionPlayer1.classList.remove('player--winner');
  sectionPlayer0.classList.add('player--active');
  sectionPlayer1.classList.remove('player--active');
};

initData();  

// ========================
// PASO 2: LÓGICA DEL JUEGO
// ========================

// Función para lanzar el dado
function throwDice() {
  if (playing) {
    const diceNumber = Math.trunc(Math.random() * 6 + 1);
    imgDice.classList.remove("hidden");  
    imgDice.src = diceImages[diceNumber];

    if (diceNumber !== 1) updateCurrentScore(diceNumber);
    else switchPlayer();
  }
}

// Función para actualizar la puntuación actual
function updateCurrentScore(diceNumber) {
  currentScore += diceNumber;
  document.getElementById(`current--${activePlayer}`).textContent = currentScore;
}

// Función para cambiar de jugador
function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  sectionPlayer0.classList.toggle("player--active");
  sectionPlayer1.classList.toggle("player--active");
}

// Función cuando el usuario presiona "Hold"
function userHoldsScore() {
  if (playing) {
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];

    if (score[activePlayer] >= 100) {
      playing = false;
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      imgDice.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
}

// Eventos de los botones
btnRoll.addEventListener("click", throwDice);
btnHold.addEventListener("click", userHoldsScore);
btnNew.addEventListener("click", initData);

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

// Variables de estado
let score, currentScore, activePlayer;

// Función para inicializar el juego
const initData = () => {
  score = [0, 0];         
  currentScore = 0;       
  activePlayer = 0;       

  // Resetear los valores en el DOM
  imgDice.classList.add("hidden");  
  score0.textContent = 0;
  score1.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
};

initData();  

// ========================
// PASO 2: LÓGICA DEL JUEGO
// ========================

// Función para lanzar el dado
function throwDice() {
  const diceNumber = Math.trunc(Math.random() * 6 + 1);
  imgDice.classList.remove("hidden");  
  imgDice.src = `./public/dice-${diceNumber}.png`; 

  if (diceNumber !== 1) updateCurrentScore(diceNumber);
  else switchPlayer();
}

// Función para actualizar la puntuación actual
function updateCurrentScore(diceNumber) {
  currentScore += diceNumber;
  if (activePlayer === 0) currentScore0.textContent = currentScore;
  else currentScore1.textContent = currentScore;
}

// Función para cambiar de jugador
function switchPlayer() {
  resetCurrentScore();
  sectionPlayer0.classList.toggle("player--active");
  sectionPlayer1.classList.toggle("player--active");
  activePlayer = activePlayer === 0 ? 1 : 0;
}

// Función para resetear la puntuación actual
function resetCurrentScore() {
  currentScore = 0;
  if (activePlayer === 0) currentScore0.textContent = currentScore;
  else currentScore1.textContent = currentScore;
}

// Función cuando el usuario presiona "Hold"
function userHoldsScore() {
  score[activePlayer] += currentScore; 

  if (activePlayer === 0) score0.textContent = score[activePlayer];
  else score1.textContent = score[activePlayer];

  if (score[activePlayer] >= 100) declareWinner();
  else switchPlayer(); 
}

// Función para declarar al ganador
function declareWinner() {
  if (activePlayer === 0) {
    sectionPlayer0.classList.add('player--winner');
    sectionPlayer0.classList.remove('player--active');
  } else {
    sectionPlayer1.classList.add('player--winner');
    sectionPlayer1.classList.remove('player--active');
  }

  imgDice.classList.add('hidden'); 
  btnRoll.disabled = true;        
  btnHold.disabled = true;
}

// Función para reiniciar el juego
function userResetsGame() {
  sectionPlayer0.classList.remove('player--winner');
  sectionPlayer1.classList.remove('player--winner');

  sectionPlayer0.classList.add('player--active');
  sectionPlayer1.classList.remove('player--active');

  btnRoll.disabled = false;
  btnHold.disabled = false;

  initData();
}

// Eventos de los botones
btnRoll.addEventListener("click", throwDice);
btnHold.addEventListener("click", userHoldsScore);
btnNew.addEventListener("click", userResetsGame);

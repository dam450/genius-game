/**
 * Genius Game
 */

let order = [];
let clickedOrder = [];
let score = 0;

const GREEN = 0; //0 - verde
const RED = 1; //1 - vermelho
const YELLOW = 2; //2 - amarelo
const BLUE = 3; //3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

/**
 * Cria ordem aleatória de cores
 */
let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
}

/**
 * Acende a próxima cor
 * @param {*} element 
 * @param {*} number 
 */
let lightColor = (element, number) => {
  time = time * 500;
  setTimeout(() => {
    element.classList.add('selected');
  }, tempo - 250);

  setTimeout(() => {
    element.classList.remove('selected');
  });
}

/**
 * Checa se os botões clicados são os mesmos da
 * ordem gerada no jogo.
 */
let checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      lose();
      break;
    }
  }
  if (clickedOrder.length == order.length) {
    alert(`pontuação: ${score}\nVocê acertou! iniciando próximo nível`);
    nextLevel();
  }
}

/**
 * Função para click do usuário
 * @param {*} color 
 */
let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
  });

  checkOrder();
}

/**
 * Função que retorna elemento da cor do argumento informado
 * @param {*} color 
 * @returns HTMLDivElement
 */
let createColorElement = (color) => {
  if (color == GREEN) {
    return green;
  } else if (color == RED) {
    return red;
  } else if (color == YELLOW) {
    return yellow;
  } else if (color == BLUE) {
    return blue;
  }
}

/**
 * função para chamar próximo nível do jogo. 
 */
let nextLevel = () => {
  score++;
  shuffleOrder();
}

// Genius Game

let order = [];
let clickedOrder = [];
let score = 0;

// indice de identificação das cores por valor numérico
const GREEN = 0;  //0 - verde
const RED = 1;    //1 - vermelho
const YELLOW = 2; //2 - amarelo
const BLUE = 3;   //3 - azul

// Identificação dos elementos Div de cada cor do jogo
const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

/**
 * Função que gera a ordem aleatória de cores
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
 * Acende a cor do elemento informado após atraso definido.
 * @param {HTMLDivElement} element Cor do elemento a acender
 * @param {Float} time Tempo de atraso para acender
 */
let lightColor = (element, time) => {
  time = time * 500;

  setTimeout(() => {
    element.classList.add('selected');
  }, time - 250);

  setTimeout(() => {
    element.classList.remove('selected');
  }, time);
}

/**
 * Checa se os botões foram clicados na mesma
 * ordem gerada na função shuffleOrder().
 */
let checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      gameOver();
      break;
    }
  }
  if (clickedOrder.length == order.length) {
    score++;
    alert(`Pontuação: [ ${score} ]\n\nVocê acertou! \nClique em OK para próxima rodada.`);
    nextLevel();
  }
}

/**
 * Função de click do usuário
 * @param {Integer} color valor inteiro do indice da cor clicada
 */
let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
    checkOrder();
  }, 250);


}

/**
 * Função que retorna o elemento da cor do argumento informado
 * @param {Integer} color Valor inteiro com indice da cor
 * @returns HTMLDivElement (Div da cor informada)
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
  shuffleOrder();
}

/**
 * Função game over. 
 * Encerra o jogo e mostra a pontuação.
 */
let gameOver = () => {
  alert(`< FIM DE JOGO >\n\nPontuação: [ ${score} ].\n\nVocê perdeu!\nClique em OK para recomeçar.`);
  order = [];
  clickedOrder = [];

  playGame();
}

/**
 * Função que inicia o jogo.
 */
let playGame = () => {

  alert('Bem vindo ao Genius! \niniciando o jogo!')
  score = 0;

  nextLevel();
}

/**
 * eventos de clique dos botões de cada cor
 */
green.onclick = () => click(GREEN);
red.onclick = () => click(RED);
yellow.onclick = () => click(YELLOW);
blue.onclick = () => click(BLUE);

// Inicia o jogo
playGame();
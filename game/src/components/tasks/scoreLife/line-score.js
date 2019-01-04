import template from './game-over-template';
import templateWinner from './game-winner-template';
import { scoring } from '../utils';

function addGameOverTemplate() {
  const modalContentTemplate = document.getElementById('dynamic-content');
  modalContentTemplate.innerHTML = template;
}

function addGameWinnerTemplate() {
  const madalContentTemplate = document.getElementById('dynamic-content');
  madalContentTemplate.innerHTML = templateWinner;
}
// export function scoring() {
//   const scoreTask = 5;
//   scorePlayers.push(scoreTask);
//   console.log(scorePlayers);
//   // return scorePlayers;
// }

export function lifeDuration(type = 'progress-bar-monster') {
  const scaleLife = document.getElementsByClassName(type)[0];
  const widthLife = parseInt(scaleLife.style.width, 10);
  const reduceLife = 20;
  const currentValueLife = widthLife - reduceLife;
  scaleLife.style.width = `${currentValueLife}%`;
  return currentValueLife;
}


export default function compaireClientResult(result) {
  const inputValue = document.getElementsByClassName('form-control')[0].value;
  if (+inputValue === +result) {
    lifeDuration('progress-bar-monster');
    scoring();
  } else {
    lifeDuration('progress-bar-hero');
  }
}

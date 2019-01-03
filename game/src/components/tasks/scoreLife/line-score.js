import template from './game-over-template';
import templateWinner from './game-winner-template';

function addGameOverTemplate() {
  const madalContentTemplate = document.getElementById('dynamic-content');
  madalContentTemplate.innerHTML = template;
}

function addGameWinnerTemplate() {
  const madalContentTemplate = document.getElementById('dynamic-content');
  madalContentTemplate.innerHTML = templateWinner;
}

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
  } else {
    lifeDuration('progress-bar-hero');
  }
}

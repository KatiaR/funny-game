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

function lifeDuration(type = 'progress-bar-monster') {
  const scaleLife = document.getElementsByClassName(type)[0];
  const widthLife = parseInt(getComputedStyle(scaleLife).width, 10);
  const reduceLife = 60;
  const currentValueLife = widthLife - reduceLife;
  scaleLife.style.width = `${currentValueLife}px`;
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

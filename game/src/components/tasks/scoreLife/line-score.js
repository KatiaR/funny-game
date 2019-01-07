import template from './game-over-template';
import templateWinner from './game-winner-template';
import { scoring } from '../utils';
import addScoreTableTemplate from '../../../screens/score/score';

// export function addGameOverTemplate() {
//   const modalContentTemplate = document.getElementById('dynamic-content');
//   modalContentTemplate.innerHTML = template;
// }

// export function addGameWinnerTemplate() {
//   const modalContentTemplate = document.getElementById('dynamic-content');
//   modalContentTemplate.innerHTML = templateWinner;
// }


export function lifeDuration(type = 'progress-bar-monster') {
  const scaleLife = document.getElementsByClassName(type)[0];
  const widthLife = parseInt(scaleLife.style.width, 10);
  const reduceLife = 20;
  const currentValueLife = widthLife - reduceLife;
  scaleLife.style.width = `${currentValueLife}%`;
  const liveHero = document.getElementsByClassName('progress-bar-hero')[0];
  if (parseInt(liveHero.style.width, 10) <= 0) {
    addScoreTableTemplate();
  }
  return currentValueLife;
}

export default function compareClientResult(result) {
  const inputValue = document.getElementsByClassName('form-control')[0].value;
  if (+inputValue === +result) {
    lifeDuration('progress-bar-monster');
    scoring();
  } else {
    lifeDuration('progress-bar-hero');
  }
}
export function newLifeDuration(type = 'progress-bar-monster') {
  const scaleLife = document.getElementsByClassName(type)[0];
  const currentValueLife = 100;
  scaleLife.style.width = `${currentValueLife}%`;
  return currentValueLife;
}

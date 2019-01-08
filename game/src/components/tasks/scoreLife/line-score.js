
import { spellType, scoring } from '../utils';
import addScoreTableTemplate from '../../../screens/score/score';


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

export function addSpellAndSoundHero() {
  lifeDuration('progress-bar-monster');
  scoring();
  spellType('fire-hero');
  const audio = new Audio('../screens/hero/audio/Sound.storm.mp3');
  audio.play();
}

export function addSpellAndSoundMonster() {
  lifeDuration('progress-bar-hero');
  spellType('storm');
  const audio = new Audio('../screens/monster/audio/Sound.light.mp3');
  audio.play();
}
export default function compareClientResult(result) {
  const inputValue = document.getElementsByClassName('form-control')[0].value;
  if (+inputValue === +result) {
    addSpellAndSoundHero();
  } else {
    addSpellAndSoundMonster();
  }
}

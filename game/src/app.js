import './screens/home/index.scss';
import 'bootstrap';

import addModalTemplate from './components/modal-dialog/modal';
import addHeroTemplate from './screens/hero/hero';
import addMonsterTemplate from './screens/monster/monster';
import generateGameField from './screens/battle/battle';


window.onload = () => {
  const startButton = document.getElementsByClassName('outer')[0];
  startButton.addEventListener('click', () => addModalTemplate());
  startButton.addEventListener('click', () => generateGameField());
  startButton.addEventListener('click', () => addHeroTemplate());
  // spellButton.addEventListener('click', () => addCalculatorTaskTemplate());
  startButton.addEventListener('click', () => addMonsterTemplate());
  // startButton.addEventListener('click', () => addCalculatorTaskTemplate());
};

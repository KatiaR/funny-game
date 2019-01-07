import './screens/home/index.scss';
import 'bootstrap';

import addModalTemplate from './components/modal-dialog/modal';
import addHeroTemplate from './screens/hero/hero';
import addMonsterTemplate from './screens/monster/monster';
import generateGameField from './screens/battle/battle';

export function init() {
  const startButton = document.getElementsByClassName('outer')[0];
  startButton.addEventListener('click', () => addModalTemplate());
  startButton.addEventListener('click', () => generateGameField());
  startButton.addEventListener('click', () => addHeroTemplate());
  startButton.addEventListener('click', () => addMonsterTemplate());
}

window.onload = () => {
  init();
};


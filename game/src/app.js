import './screens/home/index.scss';
import 'bootstrap';

import addModalTemplate from './components/modal-dialog/modal';
// import addHeroTemplate from './screens/hero/hero';
import generateGameField from './screens/battle/battle';

window.onload = () => {
  const startButton = document.getElementsByClassName('outer')[0];
  // const saveCangesModalButton = document.getElementsByClassName('btn-primary')[0];
  startButton.addEventListener('click', () => addModalTemplate());
  startButton.addEventListener('click', () => generateGameField());
};

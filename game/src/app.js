import './screens/home/index.scss';
import 'bootstrap';

import addModalTemplate from './components/modal-dialog/modal';
 import addHeroTemplate from './screens/hero/hero';

window.onload = () => {
  const startButton = document.getElementsByClassName('outer')[0];
  // const navbarSection = document.getElementsByTagName('nav')[0];
  // const landingSection = document.getElementsByClassName('container-fluid')[0];


  startButton.addEventListener('click', () => addModalTemplate());
};

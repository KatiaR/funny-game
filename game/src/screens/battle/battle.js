import template from './battle-template';
import './battle.scss';

export default function generateGameField() {
  const bodyContent = document.getElementsByTagName('body')[0];
  document.getElementById('sideNav').hidden = true;
  document.querySelector('.container-fluid').hidden = true;
  bodyContent.classList.add('playing-field');
  bodyContent.innerHTML += template;
}

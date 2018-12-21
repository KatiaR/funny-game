import template from './battle-template';
import './battle.scss';

export default function generateGameField() {
  const bodyContent = document.getElementsByTagName('body')[0];
  while (bodyContent.hasChildNodes()) {
    bodyContent.classList.add('hidden');
    bodyContent.innerHTML += template;
  }
}

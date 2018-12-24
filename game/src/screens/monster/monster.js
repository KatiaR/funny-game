import template from './monster-template';
import './monster.scss';

export default function addMonsterTemplate() {
  const monsterField = document.getElementsByClassName('monster-field')[0];
  monsterField.innerHTML += template;
}

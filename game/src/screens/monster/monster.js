import template from './monster-template';
import './monster.scss';
import { combinationsMonsterBody } from '../../components/loading/data';


export default function addMonsterTemplate() {
  const monsterField = document.getElementsByClassName('monster-field')[0];
  monsterField.innerHTML += template;

  const rand = Math.floor(Math.random() * combinationsMonsterBody.length);
  document.getElementById('head').src = combinationsMonsterBody[0][rand];
  document.getElementById('body').src = combinationsMonsterBody[1][rand];
  document.getElementById('feet').src = combinationsMonsterBody[2][rand];
}

import template from './battle-template';
import './battle.scss';
import addCalculatorTaskTemplate from '../../components/tasks/calculator/calculator';
import getMonsterName from '../monster/getMonsterName';

export default function generateGameField() {
  const bodyContent = document.getElementsByTagName('body')[0];
  

  document.getElementById('sideNav').hidden = true;
  document.querySelector('.container-fluid').hidden = true;
  bodyContent.classList.add('playing-field');
  bodyContent.innerHTML += template;
  addCalculatorTaskTemplate();
  const nameMonster = getMonsterName();
  Promise.resolve().then(() => { document.getElementById('monster-name').innerHTML = nameMonster; });
  
}

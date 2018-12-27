import template from './battle-template';
import './battle.scss';

import getMonsterName from '../monster/getMonsterName';
import addCalculatorTaskTemplate from '../../components/tasks/calculator/calculator';


export default function generateGameField() {
  const bodyContent = document.getElementsByTagName('body')[0];


  document.getElementById('sideNav').hidden = true;
  document.querySelector('.container-fluid').hidden = true;
  bodyContent.classList.add('playing-field');
  bodyContent.innerHTML += template;
  const nameMonster = getMonsterName();

  
  
  Promise.resolve().then(() => { document.getElementById('monster-name').innerHTML = nameMonster; });
  const spellButton = document.getElementById('btn-spell');
    console.log(spellButton);
    spellButton.addEventListener('click', () => addCalculatorTaskTemplate());
}

import template from './battle-template';
import './battle.scss';
import getMonsterName from '../monster/getMonsterName';
import addListSpellTemplate from '../../components/modal-spell/list-spell';
import addScoreTableTemplate from '../score/score';


export default function generateGameField() {
  const bodyContent = document.getElementsByTagName('body')[0];


  document.getElementById('sideNav').hidden = true;
  document.querySelector('.container-fluid').hidden = true;
  bodyContent.classList.add('playing-field');
  bodyContent.innerHTML += template;
  const nameMonster = getMonsterName();


  Promise.resolve().then(() => { document.getElementById('monster-name').innerHTML = nameMonster; });
  const spellButton = document.getElementById('btn-spell');

  spellButton.addEventListener('click', () => addListSpellTemplate());

  const resultBtn = document.getElementById('btn-score');
  resultBtn.addEventListener('click', () => addScoreTableTemplate());
}

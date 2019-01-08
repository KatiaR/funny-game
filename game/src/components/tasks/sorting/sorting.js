import template from './sorting-template';
import './sorting.scss';
import addDataToSortingTask from './sorting-utils';
import { addSpellAndSoundMonster, addSpellAndSoundHero } from '../scoreLife/line-score';
import {
  allowDrop, drop, drag,
} from '../utils';


function lettersDrop() {
  const listItems = document.querySelector('.sorting-task');
  const placeSortItems = document.querySelector('.empty');

  listItems.addEventListener('dragstart', e => drag(e));
  listItems.addEventListener('drop', e => drop(e));
  listItems.addEventListener('dragover', e => allowDrop(e));

  placeSortItems.addEventListener('dragstart', e => drag(e));
  placeSortItems.addEventListener('drop', e => drop(e));
  placeSortItems.addEventListener('dragover', e => allowDrop(e));
}


export default function addSortingTaskTemplate() {
  const modalContentTemplate = document.getElementById('dynamic-content');
  let answerClientArr = [];
  modalContentTemplate.innerHTML = template;
  lettersDrop();
  const givenStrOrderLetters = addDataToSortingTask();
  const btnSave = document.getElementById('save-changes');
  btnSave.addEventListener('click', () => {
    const answerClient = document.querySelectorAll('.answer-place');
    answerClientArr = [...answerClient].map(({ textContent }) => textContent);
    const strOrderAnswerClient = answerClientArr.join('');
    if (strOrderAnswerClient.localeCompare(givenStrOrderLetters) === 0) {
      addSpellAndSoundHero();
    } else {
      addSpellAndSoundMonster();
    }
  });
}

import template from './sequence-template';
import { addSpellAndSoundMonster, addSpellAndSoundHero } from '../scoreLife/line-score';
import './sequence.scss';
import randomInteger from '../utils';

const max = 50;
const min = 0;


export default function addSequence() {
  const modalContentTemplate = document.getElementById('dynamic-content');
  modalContentTemplate.innerHTML = template;


  const listItems = document.querySelector('.sequence');
  const itemsText = document.querySelectorAll('.sortable');
  [...itemsText].forEach((elem) => {
    elem.textContent = randomInteger(max, min);
  });

  let dragging = null;

  listItems.addEventListener('dragstart', (event) => {
    dragging = event.target;
    event.dataTransfer.setData('text/html', dragging);
  });

  listItems.addEventListener('dragover', (event) => {
    event.preventDefault();

    const bounding = event.target.getBoundingClientRect();
    const offset = bounding.y + (bounding.height / 2);
    if (event.clientY - offset > 0) {
      event.target.classList.toggle('add-border');
    }
  });

  listItems.addEventListener('dragleave', (event) => {
    event.target.classList.add('clear-border');
  });

  listItems.addEventListener('drop', (event) => {
    event.preventDefault();
    if (event.target.classList.contains('empty-border')) {
      event.target.classList.add('empty-border');
      event.target.parentNode.insertBefore(dragging, event.target.nextSibling);
    } else {
      event.target.classList.add('empty-border-top');
      event.target.parentNode.insertBefore(dragging, event.target);
    }
  });

  const btnSave = document.getElementById('save-changes');
  btnSave.addEventListener('click', () => {
    const clientAnswer = document.querySelectorAll('.sortable');
    const valuesClientAnswer = [...clientAnswer].map(e => +e.textContent);
    const sortedArray = [...valuesClientAnswer].sort((a, b) => a - b);
    const arraysIsEqual = valuesClientAnswer.every((elem, index) => elem === sortedArray[index]);
    if (arraysIsEqual) {
      addSpellAndSoundHero();
    } else {
      addSpellAndSoundMonster();
    }
  });
}

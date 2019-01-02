import template from './sorting-template';
import './sorting.scss';

function allowDrop(e) {
  e.preventDefault();
}

function drag(e) {
  e.dataTransfer.setData('text', e.target.id);
}

function drop(e) {
  e.preventDefault();
  const data = e.dataTransfer.getData('text');
  e.target.appendChild(document.getElementById(data));
}

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
  const madalContentTemplate = document.getElementById('dynamic-content');
  madalContentTemplate.innerHTML = template;
  lettersDrop();
  //const btnSave = document.getElementById('save-changes');
  //btnSave.addEventListener('click', () => {} );
}

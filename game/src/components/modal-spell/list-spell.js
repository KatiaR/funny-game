import template from './list-spell-template';
import './list-spell.scss';
import addCalculatorTaskTemplate from '../tasks/calculator/calculator';
import translateEnWord from '../tasks/vocabularyEnToRu/vocabularyEnToRu';
import addSortingTaskTemplate from '../tasks/sorting/sorting';

export default function addListSpellTemplate() {
  const madalContentTemplate = document.getElementById('dynamic-content');
  madalContentTemplate.innerHTML = template;

  const arithmeticSpell = document.getElementById('arithmetic-task');
  arithmeticSpell.addEventListener('click', () => addCalculatorTaskTemplate());

  const vocabularyEnToRuSpell = document.getElementById('vocabularyEnToRus-task');
  vocabularyEnToRuSpell.addEventListener('click', () => translateEnWord());

  const sortingSpell = document.getElementById('sorting-task');
  sortingSpell.addEventListener('click', () => addSortingTaskTemplate());
}

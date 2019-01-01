import template from './list-spell-template';
import './list-spell.scss';
import addCalculatorTaskTemplate from '../tasks/calculator/calculator';

export default function addListSpellTemplate() {
  const madalContentTemplate = document.getElementById('dynamic-content');
  madalContentTemplate.innerHTML = template;

  const arithmeticSpell = document.getElementById('arithmetic-task');
  arithmeticSpell.addEventListener('click', () => addCalculatorTaskTemplate());
}

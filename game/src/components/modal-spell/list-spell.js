import template from './list-spell-template';
import './list-spell.scss';
import addCalculatorTaskTemplate from '../tasks/calculator/calculator';
import translateEnWord from '../tasks/vocabularyEnToRu/vocabularyEnToRu';
import addSortingTaskTemplate from '../tasks/sorting/sorting';
import addCompareTaskTemplate from '../tasks/comparison/comparison';
import translateRuWord from '../tasks/vocabularyRuToEn/vocabularyRuToEn';
import chooseExtraWord from '../tasks/extraWords/extraWord';
import writeCapital from '../tasks/capital/capital';
import addSequence from '../tasks/sequence/sequence';
import writeMonths from '../tasks/easy/easy';
import writeDifferences from '../tasks/concepts/concepts';
import writeAnimal from '../tasks/animals/animal';
import chooseArticle from '../tasks/articles/articles';
import guessRiddle from '../tasks/riddles/riddles';

export default function addListSpellTemplate() {
  const modalContentTemplate = document.getElementById('dynamic-content');
  modalContentTemplate.innerHTML = template;

  const arithmeticSpell = document.getElementById('arithmetic-task');
  arithmeticSpell.addEventListener('click', () => addCalculatorTaskTemplate());

  const vocabularyEnToRuSpell = document.getElementById('vocabularyEnToRus-task');
  vocabularyEnToRuSpell.addEventListener('click', () => translateEnWord());

  const sortingSpell = document.getElementById('sorting-task');
  sortingSpell.addEventListener('click', () => addSortingTaskTemplate());

  const compareSpell = document.getElementById('compare-task');
  compareSpell.addEventListener('click', () => addCompareTaskTemplate());

  const vocabularyRuToEnSpell = document.getElementById('vocabularyRuToEn-task');
  vocabularyRuToEnSpell.addEventListener('click', () => translateRuWord());

  const extraWordSpell = document.getElementById('extraWord-task');
  extraWordSpell.addEventListener('click', () => chooseExtraWord());

  const capitalSpell = document.getElementById('capital');
  capitalSpell.addEventListener('click', () => writeCapital());

  const sequenceSpell = document.getElementById('sequence');
  sequenceSpell.addEventListener('click', () => addSequence());

  const monthSpell = document.getElementById('education');
  monthSpell.addEventListener('click', () => writeMonths());

  const conceptsSpell = document.getElementById('figures');
  conceptsSpell.addEventListener('click', () => writeDifferences());

  const animalSpell = document.getElementById('animals');
  animalSpell.addEventListener('click', () => writeAnimal());

  const articleSpell = document.getElementById('article');
  articleSpell.addEventListener('click', () => chooseArticle());

  const riddlesSpell = document.getElementById('riddles');
  riddlesSpell.addEventListener('click', () => guessRiddle());
}

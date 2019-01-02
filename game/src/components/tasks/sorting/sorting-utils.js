import { sortLetters } from '../../loading/data';
import randomInteger from '../utils';

const max = 4;
const min = 0;

export default function addDataToSortingTask() {
  const rand = randomInteger(max, min);
  const currentArrLetters = sortLetters[rand].split('');
  const placeLetters = document.querySelectorAll('.items');

  [...placeLetters].forEach((elem, i) => {
    elem.textContent = currentArrLetters[i]; // eslint-disable-line no-param-reassign
  });
  const givenOrderArr = [...placeLetters].map(({ textContent }) => textContent);
  const strOrderLetters = givenOrderArr.sort().join('');
  return strOrderLetters;
}

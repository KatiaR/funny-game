import { combinationsMonsterName } from '../../components/loading/data';

export default function getMonsterName() {
  const lengthNestedArray = 11;
  const rand = Math.floor(Math.random() * lengthNestedArray);
  const name = [];
  combinationsMonsterName.forEach(elem => name.push(elem[rand]));
  return name.join(' ');
}

import { combinationsMonsterName } from '../../components/loading/data';

export default function getMonsterName() {
  const rand = Math.floor(Math.random() * combinationsMonsterName.length);
  const name = [];
  combinationsMonsterName.forEach(elem => name.push(elem[rand]));
  return name.join(' ');
}

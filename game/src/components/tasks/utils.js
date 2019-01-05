import { scorePlayers } from '../loading/data';
import addMonsterTemplate from '../../screens/monster/monster';
import { newlifeDuration } from './scoreLife/line-score';

export default function randomInteger(max, min) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

export function scoring() {
  const scoreTask = 5;
  const maxScore = 25;
  scorePlayers.push(scoreTask);
  const totalScore = scorePlayers.reduce((acc, el) => acc + el);
  if (totalScore % maxScore === 0) {
    const child = document.querySelector('.monster');
    const parent = document.querySelector('.monster-field');
    parent.removeChild(child);
    addMonsterTemplate();
    newlifeDuration();
  }
}

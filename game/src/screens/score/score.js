import './score.scss';
import template from './score-template';
import { scorePlayers } from '../../components/loading/data';

export default function addScoreTableTemplate() {
  const modalContentTemplate = document.getElementById('dynamic-content');
  modalContentTemplate.innerHTML = template;
  const nameHero = document.getElementById('hero-name').textContent;
  let storageData = [];
  if (localStorage.getItem('data-player')) {
    const dataPlayerStorage = localStorage.getItem('data-player');
    storageData = [...JSON.parse(dataPlayerStorage)];
  }
  const totalScore = scorePlayers.reduce((acc, el) => acc + el, 0);
  const pointTorKillMonster = 25;
  const player = { name: nameHero || 'Hero', score: Math.floor(totalScore / pointTorKillMonster) || 'the monster is alive' };
  storageData.push(player);
  localStorage.setItem('data-player', JSON.stringify(storageData));
  if (storageData.length) {
    const table = document.querySelector('.score table');
    storageData.forEach((elem) => {
      const tr = document.createElement('tr');
      const td1 = document.createElement('td');
      const td2 = document.createElement('td');
      td1.innerText = elem.name;
      td2.innerText = elem.score;
      tr.appendChild(td1);
      tr.appendChild(td2);
      table.appendChild(tr);
    });
  }
}

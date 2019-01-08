import $ from 'jquery';
import './score.scss';
import template from './score-template';
import { scorePlayers } from '../../components/loading/data';
import database from '../../db';


const delay = (ms = 10) => new Promise(res => setTimeout(() => res(), ms));

export default function addScoreTableTemplate() {
  delay(500).then(() => { $('#exampleModalCenter').modal('show'); });
  database.ref('/results')
    .once('value')
    .then((snapshot) => {
      const modalContentTemplate = document.getElementById('dynamic-content');
      modalContentTemplate.innerHTML = template;
      const nameHero = document.getElementById('hero-name').textContent;
      let storageData = snapshot.val();
      if (!storageData) { return null; }
      const totalScore = scorePlayers.reduce((acc, el) => acc + el, 0);
      const pointTorKillMonster = 25;
      const player = { name: nameHero || 'Hero', score: Math.floor(totalScore / pointTorKillMonster) || 0 };
      storageData.push(player);
      storageData.sort((a, b) => b.score - a.score);
      storageData = storageData.slice(0, 10);
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


      const btnPlayAgain = document.getElementById('btn-new-game');
      btnPlayAgain.addEventListener('click', () => {
        window.location.reload();
      });

      return storageData;
    }).then((res) => {
      if (res) {
        database.ref('/results').set(res)
          .catch(e => console.log(e));
      }
    })
    .catch(e => console.log(e));
}

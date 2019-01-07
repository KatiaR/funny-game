import './screens/home/index.scss';
import 'bootstrap';

import firebase from 'firebase';
import addModalTemplate from './components/modal-dialog/modal';
import addHeroTemplate from './screens/hero/hero';
import addMonsterTemplate from './screens/monster/monster';
import generateGameField from './screens/battle/battle';


const config = {
  apiKey: process.env.db || '',
  authDomain: 'game-27b6a.firebaseapp.com',
  databaseURL: 'https://game-27b6a.firebaseio.com',
  projectId: 'game-27b6a',
  storageBucket: 'game-27b6a.appspot.com',
  messagingSenderId: '484257344953',
};
firebase.initializeApp(config);
export const database = firebase.database();
export default {
  database,
};

window.onload = () => {
  const startButton = document.getElementsByClassName('outer')[0];
  startButton.addEventListener('click', () => addModalTemplate());
  startButton.addEventListener('click', () => generateGameField());
  startButton.addEventListener('click', () => addHeroTemplate());
  startButton.addEventListener('click', () => addMonsterTemplate());
};

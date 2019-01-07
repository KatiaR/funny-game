import firebase from 'firebase';

const config = {
  apiKey: process.env.db || '',
  authDomain: 'game-27b6a.firebaseapp.com',
  databaseURL: 'https://game-27b6a.firebaseio.com',
  projectId: 'game-27b6a',
  storageBucket: 'game-27b6a.appspot.com',
  messagingSenderId: '484257344953',
};
firebase.initializeApp(config);
const database = firebase.database();

export default database;

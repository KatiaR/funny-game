import './screens/home/index.scss';
import 'bootstrap';

import addModalTemplate from './components/modal-dialog/modal';
window.onload = () => {const startButton = document.getElementsByClassName('outer')[0];
console.log(startButton);
startButton.addEventListener('click', () => addModalTemplate());
}

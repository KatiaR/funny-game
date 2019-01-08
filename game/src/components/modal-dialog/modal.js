import template from './modal-template';
import './modal.scss';


const delay = (ms = 10) => new Promise(res => setTimeout(() => res(), ms));

export default function addModalTemplate() {
  const bodyContent = document.getElementsByTagName('body')[0];
  bodyContent.innerHTML += template;
  delay().then(() => {
    const inputName = document.getElementById('formGroupExampleInput');
    const saveChangesModalButton = document.getElementById('save');
    saveChangesModalButton.addEventListener('click', () => {
      const heroNamePlace = document.getElementById('hero-name');
      if (inputName.value) {
        heroNamePlace.textContent = inputName.value;
      }
    });
  });
}

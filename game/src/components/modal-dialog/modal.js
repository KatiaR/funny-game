import template from './modal-template';
import './modal.scss';

export default function addModalTemplate() {
  const bodyContent = document.getElementsByTagName('body')[0];
  bodyContent.innerHTML += template;
  const inputName = document.getElementById('formGroupExampleInput');
  const saveChangesModalButton = document.getElementById('save-name');
  Promise.resolve()
    .then(() => {
      localStorage.setItem('key', inputName.value);
      saveChangesModalButton.addEventListener('DOMContentLoaded', () => console.log('qwe'));
    });
}

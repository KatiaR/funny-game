import template from './modal-template';
import './modal.scss';

export default function addModalTemplate() {
  const bodyContent = document.getElementsByTagName('body')[0];
  bodyContent.innerHTML += template;
  const inputName = document.getElementById('formGroupExampleInput');
  localStorage.setItem('key', inputName.value);

  const saveChangesModalButton = document.getElementById('save-name');
  saveChangesModalButton.addEventListener('DOMContentLoaded', () => console.log('qwe'));
}

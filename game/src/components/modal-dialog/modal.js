import template from './modal-template';
import './modal.scss';

export default function addModalTemplate() {
  const bodyContent = document.getElementsByTagName('body')[0];
  console.log('body');
  bodyContent.innerHTML += template;
}

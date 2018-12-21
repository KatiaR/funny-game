import template from './hero-template';
// import './hero.scss';

export default function addHeroTemplate() {
  const heroField = document.getElementsByClassName('hero-field')[0];
  heroField.innerHTML += template;
}

function addTemplate() {
  const template = document.querySelector('#template');
  const body = document.getElementsByTagName('body');
  const clone = document.importNode(template.content, true);
  body.appendChild(clone);
}

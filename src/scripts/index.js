import 'regenerator-runtime';
import '../styles/main.css';
// eslint-disable-next-line import/extensions
import './views/component/resto-list.js';

import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('nav'),
  content: document.querySelector('main'),
  hero: document.querySelector('.hero'),
});

const skipToContent = document.querySelector('.skip-link');
skipToContent.addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelector('#maincontent').focus();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

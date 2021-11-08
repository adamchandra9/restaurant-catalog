import 'regenerator-runtime';
import '../styles/main.css';
// eslint-disable-next-line import/extensions
import './views/component/resto-list.js';

import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('nav'),
  content: document.querySelector('main'),
  hero: document.querySelector('.hero'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

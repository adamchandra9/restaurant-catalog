import 'regenerator-runtime';
import '../styles/main.css';
// eslint-disable-next-line import/extensions
import './views/component/resto-list.js';

import App from './views/app';

const data = require('../DATA.json');

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('nav'),
  content: document.querySelector('main'),
  hero: document.querySelector('.hero'),
});

const maincontentElement = document.querySelector('#maincontent');
const restoList = document.createElement('resto-list');
restoList.restos = data.restaurants;
maincontentElement.appendChild(restoList);

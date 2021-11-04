import 'regenerator-runtime';
import '../styles/main.css';
// eslint-disable-next-line import/extensions
import './views/component/resto-list.js';

const data = require('../DATA.json');

const hamburgerElement = document.querySelector('#hamburger');
const navElement = document.querySelector('nav');
const heroElement = document.querySelector('.hero');
const mainElement = document.querySelector('main');

hamburgerElement.addEventListener('click', (event) => {
  navElement.classList.add('open');
  event.stopPropagation();
});

heroElement.addEventListener('click', () => {
  navElement.classList.remove('open');
});
mainElement.addEventListener('click', () => {
  navElement.classList.remove('open');
});

const maincontentElement = document.querySelector('#maincontent');
const restoList = document.createElement('resto-list');
restoList.restos = data.restaurants;
maincontentElement.appendChild(restoList);

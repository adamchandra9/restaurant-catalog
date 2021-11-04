/* eslint-disable import/extensions */
/* eslint linebreak-style: ['error', 'windows'] */
/* eslint no-underscore-dangle: ['error', { 'allow': ['_restos'] }] */

import './resto-item.js';

class RestoList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set restos(restos) {
    this._restos = restos;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    .content {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
    }
    @media screen and (min-width: 700px) {
      .content {
        grid-template-columns: 1fr 1fr;
      }
    }
    @media screen and (min-width: 1000px) {
      .content {
        grid-template-columns: 1fr 1fr 1fr;
      }
    }
    </style>
    <div class="content"></div>
    `;
    this._restos.forEach((resto) => {
      const restoItem = document.createElement('resto-item');
      restoItem.resto = resto;
      const contentElment = this.shadowDOM.querySelector('.content');
      contentElment.appendChild(restoItem);
    });
  }
}

customElements.define('resto-list', RestoList);

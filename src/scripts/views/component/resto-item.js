/* eslint linebreak-style: ["error", "windows"] */
/* eslint no-underscore-dangle: ["error", { "allow": ["_resto"] }] */

import CONFIG from '../../globals/config';

class RestoItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set resto(resto) {
    this._resto = resto;
    this.render();
  }

  render() {
    const {
      pictureId, name, city, rating, description, id,
    } = this._resto;
    this.shadowDOM.innerHTML = `
    <style>
    .restaurant_item {
      width: 100%;
      min-height : 850px;
      max-height : 850px;
      margin: 8px 0;
      overflow: hidden;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      border-radius: 5px;
    }
    .restaurant_item_thumbnail {
      width: 100%;
      min-height: 200px;
      object-fit: cover;
      object-position: center;
    }
    .restaurant_item_city {
      background-color: #2c2e43;
      width: 30%;
      text-align: center;
      padding: 10px;
      color: #ffffff;
      position: absolute;
      border-top-left-radius: 5px;
    }
    .restaurant_item_content {
      padding: 24px;
    }
    .restaurant_item_rating {
      font-size: 16px;
      margin-bottom: 8px;
    }
    .restaurant_item_title {
      margin-bottom: 8px;
    }
    .restaurant_item_title a {
      padding: 8px 0;
      text-decoration: none;
      color: #424242;
    }
    .restaurant_item_desc {
      font-size: 14px;
      font-weight: 500;
    }
    @media screen and (min-width: 400px){
      .restaurant_item {
        min-height : 750px;
        max-height : 750px;
      }
    }
    @media screen and (min-width: 700px) {
      .restaurant_item_city {
        width: 20%;
      }
    }
    @media screen and (min-width: 900px) {
      .restaurant_item_city {
        width: 10%;
      }
    }
    @media screen and (min-width: 1000px) {
      .restaurant_item_content {
        padding: 16px;
        margin-bottom: 16px;
      }
      .restaurant_item_thumbnail {
        max-height: 200px;
      }
    }
    @media screen and (min-width: 1400px){
      .restaurant_item {
        min-height : 600px;
        max-height : 600px;
      }
    }
    </style>
    <article class="restaurant_item">
    <div class="restaurant_item_city">${city}</div>
    <img class="restaurant_item_thumbnail" src="${CONFIG.BASE_IMAGE_URL}${pictureId}" alt="${name}" />
    <div class="restaurant_item_content">
      <p class="restaurant_item_rating">Rating: ${rating}</p>
      <h2 class="restaurant_item_title"><a href="/#/detail/${id}">${name}</a></h2>
      <p class="restaurant_item_desc">${description}</p>
    </div>
    </article>
    `;
  }
}

customElements.define('resto-item', RestoItem);

/* eslint-disable import/extensions */
/* eslint linebreak-style: ["error", "windows"] */

import '../component/resto-list.js';

import FavoriteRestaurantdb from '../../data/favoriterestaurant-idb';

const Favorite = {
  async render() {
    return `
    <h1>Favorite Restaurant</h1>
        `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#maincontent');
    const restoList = document.createElement('resto-list');
    restoList.restos = restaurants;
    restaurantsContainer.appendChild(restoList);
  },
};

export default Favorite;

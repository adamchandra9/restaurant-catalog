/* eslint-disable import/extensions */
/* eslint linebreak-style: ["error", "windows"] */

import '../component/resto-list.js';

import DataSource from '../../data/data-source';

const Home = {
  async render() {
    return `
    <h1>Explore Restaurant</h1>
        `;
  },

  async afterRender() {
    const restaurants = await DataSource.getList();
    const restaurantsContainer = document.querySelector('#maincontent');
    const restoList = document.createElement('resto-list');
    restoList.restos = restaurants.restaurants;
    restaurantsContainer.appendChild(restoList);
    // after render
  },
};

export default Home;

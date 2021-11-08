/* eslint linebreak-style: ["error", "windows"] */

import DataSource from '../../data/data-source';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <div id="restaurant"></div>
    <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await DataSource.detailRestourant(url.id);
    const restaurantsContainer = document.querySelector('#restaurant');
    restaurantsContainer.innerHTML += createRestaurantDetailTemplate(restaurant.restaurant);
    this.renderCategories(restaurant.restaurant);
    this.renderMenus(restaurant.restaurant);
    this.renderReviews(restaurant.restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        city: restaurant.restaurant.city,
        rating: restaurant.restaurant.rating,
        description: restaurant.restaurant.description,
        pictureId: restaurant.restaurant.pictureId,
      },
    });
  },

  renderCategories(restaurant) {
    const categoriesContainer = document.querySelector('#categories');
    restaurant.categories.forEach((category) => {
      categoriesContainer.innerHTML += `${category.name}, `;
    });
  },

  renderMenus(restaurant) {
    const menusContainer = document.querySelector('#menus');
    menusContainer.innerHTML = '<h4>Foods</h4>';
    this.renderFoods(restaurant.menus);
    menusContainer.innerHTML += '<h4>Drinks</h4>';
    this.renderDrinks(restaurant.menus);
  },

  renderFoods(menus) {
    const menusContainer = document.querySelector('#menus');
    menus.foods.forEach((food) => {
      menusContainer.innerHTML += `${food.name}, `;
    });
  },

  renderDrinks(menus) {
    const menusContainer = document.querySelector('#menus');
    menus.drinks.forEach((drink) => {
      menusContainer.innerHTML += `${drink.name}, `;
    });
  },

  renderReviews(restaurant) {
    const reviewsContainer = document.querySelector('#reviews');
    restaurant.customerReviews.forEach((review) => {
      reviewsContainer.innerHTML += `
      <div class="containerReview">
      <p>${review.name}</p>
      <p>${review.date}</p>
      <p>${review.review}<p>
      </div>
      `;
    });
  },
};

export default Detail;

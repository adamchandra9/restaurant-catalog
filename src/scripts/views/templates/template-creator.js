/* eslint linebreak-style: ["error", "windows"] */

import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => {
  const {
    pictureId, name, address, rating, description, city,
  } = restaurant;
  return `
    <h2 class="restaurant_title">${name}</h2>
      <img class="restaurant_poster" src="${
  CONFIG.BASE_DETAIL_IMAGE_RESTAURANT + pictureId
}" alt="${name}" />
      <div class="restaurant_info">
      <h3>Information</h3>
        <h4>Rating</h4>
        <p>${rating}</p>
        <h4>Address</h4>
        <p>${address}</p>
        <h4>Kota</h4>
        <p>${city} minutes</p>
        <h4>Categories</h4>
        <p id='categories'></p>
      </div>
      <div class="restaurant_description">
        <h3>Description</h3>
        <p>${description}</p>
        <h3>Menu</h3>
        <p id="menus"></p>
        <h3>Review</h3>
        <p id="reviews"></p>
      </div>
    `;
};

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export { createRestaurantDetailTemplate, createLikeButtonTemplate, createLikedButtonTemplate };

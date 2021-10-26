import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
const data = require("../DATA.json");

const hamburgerElement = document.querySelector("#hamburger");
const navElement = document.querySelector("nav");
const heroElement = document.querySelector(".hero");
const mainElement = document.querySelector("main");

hamburgerElement.addEventListener("click", (event) => {
  navElement.classList.add("open");
  event.stopPropagation();
});

heroElement.addEventListener("click", () => {
  navElement.classList.remove("open");
});
mainElement.addEventListener("click", () => {
  navElement.classList.remove("open");
});

const content = document.querySelector(".content");
for (const iterator of data.restaurants) {
  const articel = document.createElement("article");
  articel.classList.add("restaurant_item");

  const img = document.createElement("img");
  img.classList.add("restaurant_item_thumbnail");
  img.setAttribute("src", iterator.pictureId);
  img.setAttribute("alt", iterator.name);

  const city = document.createElement("div");
  city.classList.add("restaurant_item_city");
  city.innerText = iterator.city;

  const rating = document.createElement("p");
  rating.classList.add("restaurant_item_rating");
  rating.innerText = `Rating: ${iterator.rating}`;

  const title = document.createElement("h2");
  title.classList.add("restaurant_item_title");
  title.innerText = iterator.name;

  const desc = document.createElement("p");
  desc.classList.add("restaurant_item_desc");
  desc.innerText = iterator.description;

  const restaurantContent = document.createElement("div");
  restaurantContent.classList.add("restaurant_item_content");
  restaurantContent.appendChild(rating);
  restaurantContent.appendChild(title);
  restaurantContent.appendChild(desc);

  articel.appendChild(city);
  articel.appendChild(img);
  articel.appendChild(restaurantContent);
  content.appendChild(articel);
}

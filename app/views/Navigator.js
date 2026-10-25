import CssLoader from '../loaders/CssLoader.js';

export default class Navigator {
  #container;

  constructor() {
    this.cssLoader = new CssLoader();
    this.cssLoader.load("./app/views/css/song/nav.css");

    // container
    this.#container = document.createElement("nav");

    // 1. list
    this.list_button = document.createElement("button");
    this.list_button.textContent = "◀️";

    // 2. auto-scroll
    this.autoscroll_button = document.createElement("button");
    this.autoscroll_button.id = "autoscroll";
    this.autoscroll_button.textContent = "⏬";

    // fill container
    this.#container.append(this.list_button, this.autoscroll_button);

    // fill container
  }

  get container() {
    return this.#container;
  }

  // 1. list

  bindListButton(handler) {
    this.list_button.addEventListener("click", () => {
      handler();
    });
  }

  // 2. auto-scroll

  bindAutoScroll(handler) {
    this.autoscroll_button.addEventListener("click", () => {
      handler();
    });
  }
}

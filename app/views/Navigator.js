import CssLoader from '../loaders/CssLoader.js';

export default class Navigator {
  #container;

  list;
  autoscroll;

  constructor() {
    this.cssLoader = new CssLoader();
    this.cssLoader.load("./app/views/css/song/nav.css");

    // container
    this.#container = document.createElement("nav");

    // 1. list
    this.list = document.createElement("button");
    this.list.textContent = "◀️";

    // 2. auto-scroll
    this.autoscroll = document.createElement("button");
    this.autoscroll.id = "autoscroll";
    this.autoscroll.textContent = "⏬";

    // fill container
    this.#container.append(this.list, this.autoscroll);
  }

  get container() {
    return this.#container;
  }

  // 1. list

  bindList(handler) {
    this.list.addEventListener("click", () => {
      handler();
    });
  }

  // 2. auto-scroll

  bindAutoScroll(handler) {
    this.autoscroll.addEventListener("click", () => {
      handler();
    });
  }
}

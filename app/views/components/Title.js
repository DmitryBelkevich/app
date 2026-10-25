import CssLoader from '../../loaders/CssLoader.js';

export default class Title {
  #container;

  title;
  band;
  
  constructor() {
    this.cssLoader = new CssLoader();
    this.cssLoader.load("./app/views/css/song/title.css");

    // container
    this.#container = document.createElement("div");
    this.#container.id = "title";

    // 1. title
    this.title = document.createElement('div');
    this.title.classList.add("title");

    // 2. band
    this.band = document.createElement('div');
    this.band.classList.add("band");

    // fill container
    this.#container.append(this.title, this.band);
  }

  get container() {
    return this.#container;
  }

  // 1. title
  
  setTitle(title) {
    this.title.textContent = title;
  }

  // 2. band
  
  setBand(band) {
    this.band.textContent = band;
  }
}

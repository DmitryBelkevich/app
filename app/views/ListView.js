import CssLoader from '../loaders/CssLoader.js';

export default class ListView {
  constructor() {
    this.cssLoader = new CssLoader();
    
    // reset css
    this.cssLoader.load("./app/views/css/reset.css");

    // body css
    this.cssLoader.load("./app/views/css/list/body.css");
    
    this.body = document.body;
  }

  addGenre(title) {
    const div = document.createElement("div");

    div.classList.add("genre");

    div.textContent = title;

    this.body.append(div);
  }

  addSong(id, key, band, title) {
    const div = document.createElement("div");
    
    div.classList.add("song");
    
    div.textContent = id + " | " + (key || "___") + " | " + band + " - " + title;

    this.body.append(div);
  }
}

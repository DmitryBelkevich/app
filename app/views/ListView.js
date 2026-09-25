import CssLoader from '../loaders/CssLoader.js';

export default class ListView {
  binds = [];
  
  constructor() {
    this.cssLoader = new CssLoader();
    
    // reset css
    this.cssLoader.load("./app/views/css/reset.css");

    // genre css
    this.cssLoader.load("./app/views/css/list/genre.css");

    // song css
    this.cssLoader.load("./app/views/css/list/song.css");
    
    this.body = document.body;
  }

  addGenre(title) {
    // container
    const container = document.createElement("div");
    container.classList.add("genre");
    container.textContent = title;

    // components

    // fill
    this.body.append(container);
  }

  addSong(id, band, title) {
    // container
    const container = document.createElement("div");
    container.classList.add("song");

    // components
    const title_e = document.createElement("div");
    title_e.classList.add("title");
    title_e.textContent = title;

    const band_e = document.createElement("div");
    band_e.classList.add("band");
    band_e.textContent = band;

    // fill
    container.append(title_e, band_e);
    this.body.append(container);

    // listener
    this.binds.push((handler) => {
      element.addEventListener('click', () => {
        handler(id);
      });
    });
  }
}

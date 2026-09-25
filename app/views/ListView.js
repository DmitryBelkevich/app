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
    const element = document.createElement("div");

    element.classList.add("genre");

    element.textContent = title;

    this.body.append(element);
  }

  addSong(id, band, title) {
    // container
    const container = document.createElement("div");
    container.classList.add("song");

    // components
    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = title;

    const band = document.createElement("div");
    band.classList.add("band");
    band.textContent = band;

    // fill
    container.append(title, band);
    this.body.append(container);

    // listener
    this.binds.push((handler) => {
      element.addEventListener('click', () => {
        handler(id);
      });
    });
  }
}

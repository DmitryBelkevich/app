import CssLoader from '../loaders/CssLoader.js';

export default class ListView {
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
    const element = document.createElement("div");
    
    element.classList.add("song");
    
    element.textContent = band + " - " + title;

    element.addEventListener('click', function(event) {
      window.location.href = "https://dmitrybelkevich.github.io/app/song?id=" + id;
    });

    this.elements.push(element);
    this.binds.push(this.bindSongElement);

    this.body.append(element);
  }

  elements = [];
  binds = [];

  bindSongElement(handler) {
    this.elements[0].addEventListener("click", () => {
      handler();
    });
  }
}

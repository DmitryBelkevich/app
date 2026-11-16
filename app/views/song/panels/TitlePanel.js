import Panel from './Panel.js';

export default class TitlePanel extends Panel {
  #element;
  
  constructor(song) {
    super();
    this._cssLoader.load("./app/views/song/css/title.css");
    
    // container
    this.#element = document.createElement("div");
    this.#element.id = "title";
    this.#element.classList.add("panel");

    // 1. title
    const title = document.createElement('div');
    title.classList.add("title");
    title.textContent = song.title;

    // 2. band
    const band = document.createElement('div');
    band.classList.add("band");
    band.textContent = song.band;

    // fill container
    this.#element.append(title, band);
  }

  init() {
    document.body.append(this.#element);
  }
}

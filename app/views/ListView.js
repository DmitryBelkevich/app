import CssLoader from '../loaders/CssLoader.js';

export default class ListView {
  constructor() {
    this.cssLoader = new CssLoader();
    
    // reset css
    this.cssLoader.load("./app/views/css/reset.css");
    
    this.body = document.body;
  }

  addGenre() {
    
  }

  addSong(song) {
    const song_e = document.createElement("div");
    song_e.textContent = song.id + " | " + (song.key || "") + " | " + song.band + " - " + song.title;

    this.body.append(song_e);
  }
}

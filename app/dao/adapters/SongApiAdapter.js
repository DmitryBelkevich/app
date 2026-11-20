import Config from '../../config/Config.js';

import JsonLoader from '../../loaders/JsonLoader.js';

export default class SongApiAdapter {
  #jsonLoader;
  
  constructor() {
    this.#jsonLoader = new JsonLoader();
  }
  
  async load(path) {
    const songs = await this.#jsonLoader.load(path);

    for (const song of songs)
      song.text = Config.STORAGE + song.text;

    const id = this.#getId(path);
    const song = songs.find(song => song.id == id) || null;

    console.log(song);
    return null;//song;
  }

  #getId(path) {
    const id = path.slice(path.indexOf("?id=") + "?id=".length);
    return id;
  }
}

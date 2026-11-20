import Config from '../../config/Config.js';

import JsonLoader from '../../loaders/JsonLoader.js';

export default class SongsApiAdapter {
  #jsonLoader;
  
  constructor() {
    this.#jsonLoader = new JsonLoader();
  }

  async load(path) {
    const songs = await this.#jsonLoader.load(path);

    for (const song of songs) {
      for (const instrument of song.instruments) {
        instrument.key = instrument.key || song.key;
      }
      song.text = Config.STORAGE + song.text;
    }
    
    return songs;
  }
}

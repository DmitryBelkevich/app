import Config from '../../config/Config.js';

import JsonLoader from '../../loaders/JsonLoader.js';

export default class GenresApiAdapter {
  #jsonLoader;
  
  constructor() {
    this.#jsonLoader = new JsonLoader();
  }
  
  async load(path) {
    path = path.replace("genres", "songs");
    
    const songs = await this.#jsonLoader.load(path);

    for (const song of songs) {
      for (const instrument of song.instruments) {
        instrument.key = instrument.key || song.key;
      }
      song.text = Config.STORAGE + song.text;
    }
    
    const genres = this.#createGenres(songs);
    
    return genres;
  }

  #createGenres(songs) {
    const genres = new Map();

    let id = 1;
    for (const song of songs) {
      if (!genres.has(song.genre)) {
        const genre = {};

        genre.id = id++;
        genre.title = song.genre;
        genre.songs = [];
        
        genres.set(song.genre, genre);
      }

      // mapping
      const genre = genres.get(song.genre);
      genre.songs.push(song);
    }
    
    return Array.from(genres.values());
  }
}

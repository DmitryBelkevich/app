import config from '../config/config.js';

import Genre from '../models/Genre.js';
import JsonLoader from '../loaders/JsonLoader.js';

export default class GenreDao {
  constructor() {
    this.jsonLoader = new JsonLoader();
  }
  
  async getAll() {
    const data = await this.jsonLoader.load(config.database + "songs.json");

    const set = new Set();

    data.forEach(song => set.add(song.genre));

    console.log(set);
    
    return [];
  }
}

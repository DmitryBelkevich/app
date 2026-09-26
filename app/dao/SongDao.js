import config from '../config/config.js';

import Genre from '../models/Genre.js';
import Song from '../models/Song.js';
import JsonLoader from '../loaders/JsonLoader.js';

export default class SongDao {
  constructor() {
    this.jsonLoader = new JsonLoader();
  }

  async getAll() {
    const data = await this.jsonLoader.load(config.database + "songs.json");

    // TODO
    
    return data;
  }
  
  async getById(id) {
    const data = await this.jsonLoader.load(config.database + "songs.json");
    const element = data.find(song => song.id == id) || null;

    if (!element)
      return null;

    const song = new Song();

    song.id = element.id;
    song.band = element.band;
    song.title = element.title;
    
    song.genre = new Genre();
    song.genre.title = element.genre;
    
    song.raiting = element.raiting;
    song.text = element.text;
    song.score = element.score;
    song.playback = element.playback;
    song.key = element.key;
    song.voices = element.voices;
    song.instruments = element.instruments;

    return song;
  }
}

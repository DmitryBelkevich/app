import config from '../config/config.js';

import Song from '../models/Song.js';
import Instrument from '../models/Instrument.js';
import JsonLoader from '../loaders/JsonLoader.js';

export default class SongDao {
  constructor() {
    this.jsonLoader = new JsonLoader();
  }

  async getAll() {
    const data = await this.jsonLoader.load(config.database + "songs.json");
    
    return data;
  }
  
  async getById(id) {
    const data = await this.jsonLoader.load(config.database + "songs.json");
    const result = data.find(song => song.id == id) || null;

    if (!result)
      return null;

    console.log(result);
    const song = new Song();

    song.id = result.id;
    song.band = result.band;
    song.title = result.title;
    song.text = result.text;
    song.score = result.score;
    song.playback = result.playback;
    song.key = result.key;
    song.voices = result.voices;
    song.instruments = result.instruments;

    console.log(song);
    return song;
  }
}

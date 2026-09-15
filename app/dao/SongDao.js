import Song from '../models/Song.js';
import DatabaseLoader from '../loaders/DatabaseLoader.js';

export default class SongDao {
  constructor() {
    this.loader = new DatabaseLoader();
  }

  async getAll() {
    const data = await this.loader.loadData("songs.json");
    
    return data;
  }
  
  async getById(id) {
    const data = await this.loader.loadData("songs.json");
    const result = data.find(song => song.id == id) || null;

    if (!result)
      return null;

    const song = new Song();

    song.id = result.id;
    song.band = result.band;
    song.title = result.title;
    song.text = result.text;
    song.score = result.score;
    song.playback = result.playback;
    song.key = result.key || "";
    song.voices = result.voices;
    song.instruments = result.instruments;

    return song;
  }
}

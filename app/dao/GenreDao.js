import config from '../config/config.js';

import Genre from '../models/Genre.js';
import Song from '../models/Song.js';
import JsonLoader from '../loaders/JsonLoader.js';

export default class GenreDao {
  constructor() {
    this.jsonLoader = new JsonLoader();
  }
  
  async getAll() {
    const data = await this.jsonLoader.load(config.database + "songs.json");

    const songs = [];

    const map = new Map();
    let index = 0;
    data.forEach((element) => {
      const song = new Song();

      song.id = element.id;
      song.band = element.band;
      song.title = element.title;

      if (!map.has(element.genre)) {
        const genre = new Genre();

        genre.id = index++;
        genre.title = element.genre;
        
        map.set(element.genre, genre);
      }
      
      song.genre = map.get(element.genre);
      song.genre.songs.push(song);
      
      song.raiting = element.raiting;
      song.text = element.text;
      song.score = element.score;
      song.playback = element.playback;
      song.key = element.key;
      song.voices = element.voices;
      song.instruments = element.instruments;
      song.visible = element.visible;
      
      songs.push(song);
    });

    console.log(song);
    
    return Array.from(map.values());
  }
}

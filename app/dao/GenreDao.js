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

    console.log(data);

    const songs = [];

    const set = new Set();
    data.forEach((element) => {
      const song = new Song();

      song.id = element.id;
      song.band = element.band;
      song.title = element.title;

      set.add(element.genre);
      // song.genre = new Genre();
      // song.genre.title = element.genre;
      
      song.text = element.text;
      song.score = element.score;
      song.playback = element.playback;
      song.key = element.key;
      song.voices = element.voices;
      song.instruments = element.instruments;
      song.visible = element.visible;
      
      songs.push(song);
    });

    console.log(set);

    // const genresSet = new Set();
    // data.forEach(song => genresSet.add(song.genre));

    // const genres = Array.from(genresSet);
    // genres.forEach((title, index) => {
    //   const genre = new Genre();

    //   genre.id = index;
    //   genre.title = title;

    //   genres[index] = genre;

      // add genre.song
    // });

    // console.log(genres);
    
    return [];//genres
  }
}

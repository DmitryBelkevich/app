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

    data.forEach((element) => {
      const song = new Song();
      console.log(song);
    });

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

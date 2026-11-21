import Song from '../../models/Song.js';
import Genre from '../../models/Genre.js';
import Chord from '../../models/Chord.js';

import Factories from '../../factories/Factories.js';

export default class GenreMapper {
  #factories = new Factories();
  
  read(data) {
    if (!Array.isArray(data))
      return this.#createGenre(data);

    return this.#createGenres(data);
  }

  #createGenre(obj) {
    // TODO
    return null;
  }

  #createGenres(arr) {
    const genres = [];
    // const songs = new Map();

    for (const obj of arr) {
      const genre = new Genre();

      genre.id = obj.id;
      genre.title = obj.title;

      for (const s of obj.songs) {
        const song = new Song();

        song.id = s.id;
        song.band = s.band;
        song.title = s.title;
        song.tags.push(...s.tags || []);
        song.genre = genre;
        song.raiting = s.raiting;
        song.text = s.text;
        song.score = s.score;
        song.playback = s.playback;
        song.key = new Chord(s.key || "");
        song.transposition = s.transposition;

        for (const o of s.instruments) {
          const factory = this.#factories.getFactory(o.title);
          const instrument = factory.create(o);
          
          if (o.transposition)
            instrument.transposition = o.transposition;
          
          song.instruments.push(instrument);
        }

        song.isNew = s.new || false;
        song.isVisible = s.visible || true;

        // mapping
        genre.songs.push(song);

        // songs.set(s.id, song);
      }

      genres.push(genre);
    }
    
    return genres;
  }
}

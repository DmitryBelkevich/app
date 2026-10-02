import config from '../config/config.js';

import Song from '../models/Song.js';
import Genre from '../models/Genre.js';
import Chord from '../models/Chord.js';

import JsonLoader from '../loaders/JsonLoader.js';

import InstrumentFactory from '../factory/InstrumentFactory.js';

export default class SongDao {
  constructor() {
    this.jsonLoader = new JsonLoader();
    this.instrumentFactory = new InstrumentFactory();
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
    song.text = config.storage + element.text;
    song.score = element.score;
    song.playback = element.playback;
    song.key = new Chord(element.key || "");
    song.voices = element.voices;
    element.instruments.forEach((instrument_obj) => {
      const instrument = this.instrumentFactory.createInstrument(instrument_obj);
      
      instrument.key = new Chord(song.key.toString());
      
      song.instruments.push(instrument);
    });

    song.transposition = element.transposition || 0;

    return song;
  }
}

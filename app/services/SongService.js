import SongDao from '../dao/SongDao.js';

import Tuning from '../models/Tuning.js';
import Note from '../models/Note.js';
import Chord from '../models/Chord.js';

import Guitar from '../models/instruments/Guitar.js';

export default class SongService {
  constructor() {
    this.songDao = new SongDao();
  }

  async getAll() {
    const songs = await this.songDao.getAll();

    return songs;
  }
  
  async getById(id) {
    const song = await this.songDao.getById(id);

    // TODO
    
    // set CHORDS_LINK for each instruments
    song.instruments.forEach((instrument) => {
      // const index = song.text.length - ".html".length;
      
      // if (instrument.capo > 0)
      //   instrument.chords = song.text.slice(0, index) + " (" + instrument.capo + ")" + song.text.slice(index);
      // else if (instrument.transposition < 0 || instrument.transposition > 0)
      //   instrument.chords = song.text.slice(0, index) + " (" + instrument.transposition + ")" + song.text.slice(index);
      // else
      //   instrument.chords = song.text;

      instrument.chords = song.text;
    });

    // instrument.tuning
    
    return song;
  }
}

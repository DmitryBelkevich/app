import config from '../config/config.js';

import SongDao from '../dao/SongDao.js';

import Tuning from '../helpers/Tuning.js';

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

    song.text = config.storage + song.text;

    song.instruments.forEach((instrument) => {
      instrument.transposition = Tuning.droppedTo(instrument.tuning);
    });

    song.instruments.forEach((instrument) => {
      const index = song.text.length - ".html".length;
      
      if (instrument.capo > 0)
        instrument.chords = song.text.slice(0, index) + " (" + instrument.capo + ")" + song.text.slice(index);
      else if (instrument.transposition < 0)
        instrument.chords = song.text.slice(0, index) + " (" + instrument.transposition + ")" + song.text.slice(index);
      else
        instrument.chords = song.text;
    });

    song.instruments.forEach((instrument, index) => {
      if (instrument.title == "Guitar")
        if (!instrument.tuning)
          instrument.tuning = ["E", "A", "D", "G", "B", "E"];

      if (instrument.title == "Bass Guitar")
        if (!instrument.tuning)
          instrument.tuning = ["E", "A", "D", "G"];

      if (instrument.title == "5-string Bass Guitar")
        if (!instrument.tuning)
          instrument.tuning = ["B", "E", "A", "D", "G"];

      if (instrument.title != "Keyboards")
        if (!instrument.capo)
          instrument.capo = 0;

      if (instrument.title == "Keyboards")
        if (!instrument.transposition)
          instrument.transposition = 0;
    });
    
    return song;
  }
}

import config from '../config/config.js';

import SongDao from '../dao/SongDao.js';

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
      if (instrument.capo > 0) {
        const index = song.text.length - ".html".length;
        instrument.chords = song.text.slice(0, index) + " (" + instrument.capo + ")" + song.text.slice(index);
      } else
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

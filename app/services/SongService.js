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

    const b = song.instruments.forEach((instrument, index) => {
      if (instrument.capo > 0)
        return true;
    });
    if (b) {
      const toInsert = " (bass)";
      const index = song.text.length - ".html".length;

      song.text_bass = song.text.slice(0, index) + toInsert + song.text.slice(index);
    } else {
      song.text_bass = song.text;
    }

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
    });console.log(song);
    
    return song;
  }
}

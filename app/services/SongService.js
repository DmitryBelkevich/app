import config from '../config/config.js';

import SongDao from '../dao/SongDao.js';

import Tuning from '../models/Tuning.js';

import Instrument from '../models/Instrument.js';
import Keyboards from '../models/Keyboards.js';
import Guitar from '../models/Guitar.js';
import BassGuitar from '../models/BassGuitar.js';
import FiveStringBassGuitar from '../models/FiveStringBassGuitar.js';

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

    if (!song.key)
      song.key = "";

    song.instruments.forEach((instrument_obj, index) => {
      var instrument;
      
      if (instrument_obj.title == "Instrument") {
        instrument = new Instrument();
      } else if (instrument_obj.title == "Keyboards") {
        instrument = new Keyboards();

        if (instrument_obj.transposition)
          instrument.transposition = instrument_obj.transposition;
      } else if (instrument_obj.title == "Guitar" || instrument_obj.title == "E.Guitar" || instrument_obj.title == "Bass Guitar" || instrument_obj.title == "5-string Bass Guitar") {
        if (instrument_obj.title == "Guitar" || instrument_obj.title == "E.Guitar") {
          instrument = new Guitar();
        } else if (instrument_obj.title == "Bass Guitar") {
          instrument = new BassGuitar();
        } else if (instrument_obj.title == "5-string Bass Guitar") {
          instrument = new FiveStringBassGuitar();
        }

        if (instrument_obj.tuning)
          instrument.tuning = new Tuning(...instrument_obj.tuning);

        if (instrument_obj.capo)
          instrument.capo = instrument_obj.capo;
      }

      instrument.title = instrument_obj.title;
      
      song.instruments[index] = instrument;
    });

    // TODO
    
    // set CHORDS_LINK for each instruments
    song.instruments.forEach((instrument) => {
      const index = song.text.length - ".html".length;
      
      if (instrument.capo > 0)
        instrument.chords = song.text.slice(0, index) + " (" + instrument.capo + ")" + song.text.slice(index);
      else if (instrument.transposition < 0 || instrument.transposition > 0)
        instrument.chords = song.text.slice(0, index) + " (" + instrument.transposition + ")" + song.text.slice(index);
      else
        instrument.chords = song.text;
    });

    console.log(song);
    
    return song;
  }
}

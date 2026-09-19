import config from '../config/config.js';

import SongDao from '../dao/SongDao.js';

import Tuning from '../helpers/Tuning.js';

import Instrument from '../models/Instrument.js';
import Keyboards from '../models/Keyboards.js';
import Guitar from '../models/Guitar.js';
import BassGuitar from '../models/BassGuitar.js';
// import _5StringBassGuitar from '../models/_5StringBassGuitar.js';

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

    song.instruments.forEach((instrument, index) => {
      if (instrument.title == "Instrument") {
        const instrument = new Instrument();
      } else if (instrument.title == "Keyboards") {
        const keyboards = new Keyboards();
      } else if (instrument.title == "Guitar" || instrument.title == "E.Guitar" || instrument.title == "Bass Guitar" || instrument.title == "5-string Bass Guitar") {
        if (instrument.title == "Guitar" || instrument.title == "E.Guitar") {
          // console.log(instrument);
          // const guitar = Object.setPrototypeOf(instrument, Guitar.prototype);
          // console.log(guitar);
        } else if (instrument.title == "Bass Guitar") {
          console.log("Bass Guitar");
        } else if (instrument.title == "5-string Bass Guitar") {
          console.log("5-string Bass Guitar");
        }
      }
    });

    // set STANDARD tunuig for each instruments
    // song.instruments.forEach((instrument, index) => {
    //   if (instrument.title == "Guitar" || instrument.title == "E.Guitar")
    //     if (!instrument.tuning)
    //       instrument.tuning = ["E", "A", "D", "G", "B", "E"];

    //   if (instrument.title == "Bass Guitar")
    //     if (!instrument.tuning)
    //       instrument.tuning = ["E", "A", "D", "G"];

    //   if (instrument.title == "5-string Bass Guitar")
    //     if (!instrument.tuning)
    //       instrument.tuning = ["B", "E", "A", "D", "G"];

    //   if (instrument.title != "Keyboards" && instrument.title != "Instrument")
    //     if (!instrument.capo)
    //       instrument.capo = 0;

    //   if (instrument.title == "Keyboards" || instrument.title == "Instrument")
    //     if (!instrument.transposition)
    //       instrument.transposition = 0;
    // });

    // set transposition for each instruments
    // song.instruments.forEach((instrument) => {
    //   if (instrument.title != "Keyboards" && instrument.title != "Instrument")
    //     instrument.transposition = Tuning.droppedTo(instrument.tuning);
    // });

    // set chords for each instruments
    // song.instruments.forEach((instrument) => {
    //   const index = song.text.length - ".html".length;
      
    //   if (instrument.capo > 0)
    //     instrument.chords = song.text.slice(0, index) + " (" + instrument.capo + ")" + song.text.slice(index);
    //   else if (instrument.transposition < 0 || instrument.transposition > 0)
    //     instrument.chords = song.text.slice(0, index) + " (" + instrument.transposition + ")" + song.text.slice(index);
    //   else
    //     instrument.chords = song.text;
    // });

    console.log(song);
    
    return song;
  }
}

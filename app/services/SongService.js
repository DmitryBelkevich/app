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
    
    return song;
  }
}

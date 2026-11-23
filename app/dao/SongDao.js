import Config from '../config/Config.js';

import SongsApiAdapter from './adapters/SongsApiAdapter.js';
import SongApiAdapter from './adapters/SongApiAdapter.js';

import SongMapper from './mappers/SongMapper.js';

import HtmlLoader from '../loaders/HtmlLoader.js';

import Content from '../models/Content.js';

export default class SongDao {
  #mapper;
  #htmlLoader;

  constructor() {
    this.#mapper = new SongMapper();
    this.#htmlLoader = new HtmlLoader();
  }

  async getAll() {
    const arr = await new SongsApiAdapter().load(Config.API + "songs");
    
    const songs = this.#mapper.read(arr);
    
    return songs;
  }

  async getById(id) {
    const obj = await new SongApiAdapter().load(Config.API + "songs?id=" + id);
    
    const song = this.#mapper.read(obj);

    for (const instrument of song.instruments) {
      const path = this.#createContentLink(song, instrument);
      const str = await this.#htmlLoader.load(path);
      instrument.content = new Content(str);
    }
    
    return song;
  }

  #createContentLink(song, instrument) {
    if (!instrument.isTransposed())
      return song.text;
    
    const index = song.text.length - ".html".length;
    return song.text.slice(0, index) + " (" + instrument.transposition + ")" + song.text.slice(index);
  }
}

import Config from '../config/Config.js';

import Controller from './Controller.js';

import SongService from '../services/SongService.js';
import GenreService from '../services/GenreService.js';

import ListView from '../views/list/ListView.js';

export default class ListController extends Controller {
  #songService;
  #genreService;

  constructor() {
    super();
    this.#songService = new SongService();
    this.#genreService = new GenreService();
  }

  async init() {
    const songs = await this.#songService.getAll();
    const genres = await this.#genreService.getAll();

    console.log(songs);
    console.log(genres);

    const view = new ListView(genres);
    view.init();

    // binds

    // *** nav ***

    // *** list ***
    for (const component of view.panels.get("list").songs)
      component.click(this.#open_song_controller);
  }

  // *** nav ***

  // *** list ***

  #open_song_controller = (id) => {
    window.location.href = window.location.origin + "/" + Config.APP_NAME + "/song?id=" + id;
  }
}

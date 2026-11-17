import Config from '../config/Config.js';

import Controller from './Controller.js';

import SongService from '../services/SongService.js';

import SongView from '../views/song/SongView.js';

export default class SongController extends Controller {
  #songService;

  #song;
  #view;
  
  constructor() {
    super();
    this.#songService = new SongService();
  }

  async init() {
    this.#song = await this.#songService.getById(this._params.id);
    // console.log(this.#song);

    this.#view = new SongView(this.#song);
    this.#view.init();

    // binds

    // *** nav ***
    this.#view.panels.get("navigator").components.get("list_button").click(this.open_list_controller);
    this.#view.panels.get("navigator").components.get("autoscroll_button").click(this.run_autoscroll);

    // *** tabs ***
    for (const tab of this.#view.panels.get("tabs").tabs.values())
      tab.click(this.open_tab);

    // *** settings song ***
    this.#view.panels.get("settings");
  }

  // *** nav ***

  open_list_controller = () => {
    if (window.history.length > 1 && document.referrer.includes(window.location.hostname))
      history.back();
    else
      window.location.href = window.location.origin + "/" + Config.APP_NAME + "/list";
  }

  run_autoscroll = () => {
    // this.#view.autoscroll.speed = 10;
    this.#view.autoscroll.run();
  }

  // *** tabs ***

  open_tab = (id) => {}

  // *** settings song ***

  transpose_down_song = () => {
    this.#song.transpose(-1);
  }

  transpose_up_song = () => {
    this.#song.transpose(1);
  }
}

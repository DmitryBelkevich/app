import Config from '../config/Config.js';

import Controller from './Controller.js';

import SongService from '../services/SongService.js';

import SongView from '../views/song/SongView.js';

export default class SongController extends Controller {
  #songService;

  #view;
  
  constructor() {
    super();
    this.#songService = new SongService();
  }

  async init() {
    const song = await this.#songService.getById(this._params.id);
    console.log(song);

    this.#view = new SongView(song);
    this.#view.init();

    // binds

    // *** nav ***
    this.#view.panels.get("navigator").components.get("list_button").click(this.open_list_controller);
    this.#view.panels.get("navigator").components.get("autoscroll_button").click(this.run_autoscroll);

    // *** tabs ***
    for (const component of this.#view.panels.get("tabs").components.values())
      component.click(this.open_tab);
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

  open_tab = (id) => {
    // TODO
    console.log("tab " + id);
  }
}

import Config from '../config/Config.js';

import Controller from './Controller.js';

import SongService from '../services/SongService.js';
import DropdownMediator from '../services/DropdownMediator.js';

import SongView from '../views/song/SongView.js';

export default class SongController extends Controller {
  #songService;
  #mediator;

  #song;
  #view;
  
  constructor() {
    super();
    this.#songService = new SongService();
    this.#mediator = new DropdownMediator();
  }

  async init() {
    this.#song = await this.#songService.getById(this._params.id);
    // console.log(this.#song);

    this.#view = new SongView(this.#song);
    this.#view.init();

    // *** dropdown-mediator ***

    // register options
    const options = this.#view.panels.get("settings").panels.get("settings-instrument").components.get("dropdown").getOptions();
    for (const option of options.entries())
      this.#mediator.registerOption(option.value, option);

    // register instruments
    for (const [index, instrument] of this.#song.instruments.entries())
      this.#mediator.registerInstrument(index, instrument);

    // set default option
    this.#mediator.activate(1);
    // this.#view.panels.get("settings").panels.get("settings-instrument").components.get("dropdown").setOption(1);

    this.#binding();
  }

  #binding() {
    // *** nav ***
    this.#view.panels.get("navigator").components.get("list_button").click(this.open_list_controller);
    this.#view.panels.get("navigator").components.get("autoscroll_button").click(this.run_autoscroll);

    // *** tabs ***
    for (const tab of this.#view.panels.get("tabs").tabs.values())
      tab.click(this.open_tab);

    // *** settings song ***
    this.#view.panels.get("settings").panels.get("settings-song").components.get("down_button").click(this.transpose_down_song);
    this.#view.panels.get("settings").panels.get("settings-song").components.get("up_button").click(this.transpose_up_song);

    // *** settings instrument ***
    this.#view.panels.get("settings").panels.get("settings-instrument").components.get("dropdown").change(this.select_instrument);
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
    this.update_view();
  }

  transpose_up_song = () => {
    this.#song.transpose(1);
    this.update_view();
  }

  // *** settings instrument ***

  select_instrument = (event) => {
    console.log(event.target.value);
  }

  // *** view ***

  update_view = () => {
    // *** settings-song ***

    // display 1: key
    this.#view.panels.get("settings").panels.get("settings-song").components.get("display1").content(this.#song.key);
    this.#view.panels.get("settings").panels.get("settings-song").components.get("display1").state(this.#song.isTransposed());

    // display 2: transposition
    this.#view.panels.get("settings").panels.get("settings-song").components.get("display2").content(this.#song.transposition);
  }
}

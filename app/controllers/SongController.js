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

    // Cookie
    const cookie = this._cookieService.getByName("instrument");

    // *** dropdown-mediator ***

    // register options
    const options = this.#view.panels.get("settings").panels.get("settings-instrument").components.get("dropdown").getOptions();
    for (const option of options)
      this.#mediator.registerOption(+option.value, option);

    // register instruments
    for (const [index, instrument] of this.#song.instruments.entries())
      this.#mediator.registerInstrument(index, instrument);

    // set default option
    this.#mediator.activate(cookie.value || 0);

    // TODO set defaults for song [display1, display2]
    // TODO set defaults for instrument [display1, display2]
    this.update_view();

    // text & chords
    this.#view.panels.get("text").setText("<button>Hello World</button>");

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
    this.#view.panels.get("settings").panels.get("settings-instrument").components.get("down_button").click(this.transpose_down_instrument);
    this.#view.panels.get("settings").panels.get("settings-instrument").components.get("up_button").click(this.transpose_up_instrument);

    // *** tuning ***

    // *** text ***
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
    console.log(this.#song);
  }

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
    this.#mediator.activate(+event.target.value);
    this.update_view();
  }

  transpose_down_instrument = () => {
    this.#song.instruments[this.#mediator.current].transpose(-1);
    this.update_view();
  }

  transpose_up_instrument = () => {
    this.#song.instruments[this.#mediator.current].transpose(1);
    this.update_view();
  }

  // *** tuning ***

  // *** text ***

  // *** view ***

  update_view = () => {
    // *** settings song ***

    // display 1: key
    this.#view.panels.get("settings").panels.get("settings-song").components.get("display1").content(this.#song.key);
    this.#view.panels.get("settings").panels.get("settings-song").components.get("display1").state(this.#song.isTransposed());

    // display 2: transposition
    this.#view.panels.get("settings").panels.get("settings-song").components.get("display2").content(this.#song.transposition);

    // *** settings instrument ***

    // display 1: key
    this.#view.panels.get("settings").panels.get("settings-instrument").components.get("display1").content(this.#song.instruments[this.#mediator.current].key);
    this.#view.panels.get("settings").panels.get("settings-instrument").components.get("display1").state(this.#song.instruments[this.#mediator.current].isTransposed());

    // display 2: transposition
    this.#view.panels.get("settings").panels.get("settings-instrument").components.get("display2").content(this.#song.instruments[this.#mediator.current].transposition);

    // *** tuning ***
    this.#view.panels.get("settings").panels.get("tuning").setTuning(this.#song.instruments[this.#mediator.current].tuning);
    this.#view.panels.get("settings").panels.get("tuning").setCapo(this.#song.instruments[this.#mediator.current].capo);

    // *** text ***
  }
}

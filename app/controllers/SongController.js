import Song from '../models/Song.js';
import SongService from '../services/SongService.js';
import SongView from '../views/SongView.js';

import HtmlLoader from '../loaders/HtmlLoader.js';

import AutoScroll from '../helpers/page/AutoScroll.js';
import Transposer from '../helpers/Transposer.js';

export default class SongController {
  #params;

  async init() {
    this.#params = new URLSearchParams(window.location.search);
    const id = this.#params.get("id");
    
    // model
    this.songService = new SongService();
    this.song = await this.songService.getById(id);

    // view
    this.view = new SongView();
    
    this.view.setPageTitle(this.song.band + " - " + this.song.title);
    this.view.setTitle(this.song.title);
    this.view.setBand(this.song.band);
    this.view.setKey(this.song.key);
    this.song.instruments.forEach((instrument, index) => {
      if (instrument.title != "Keyboards" && instrument.title != "Instrument")
        this.view.addTuning(instrument.title, instrument.tuning);

      if (instrument.capo)
        this.view.addCapo(instrument.capo);
    });

    // load text
    this.htmlLoader = new HtmlLoader();
    const index = 0;//current instrument
    await this.loadText(index);

    // dropdown
    this.song.instruments.forEach((instrument, index) => {
      var title = instrument.title;

      if (title == "Guitar" || title == "E.Guitar")
        title = "🔴 " + title;
      else if (title == "Bass Guitar" || title == "5-string Bass Guitar")
        title = "🟡 " + title;
      else
        title = "🟢 " + title;

      if (instrument.capo > 0)
        title += " (" + "Capo: +" + instrument.capo + ")";
      
      this.view.addOption(index, title);
    });

    this.view.selectOption(index);

    // functions
    this.transposer = new Transposer();
    this.transposer.key = this.song.key;
    
    this.autoScroll = new AutoScroll();

    // *** binding controller-view ***

    // binding: view -> model

    // tabs
    this.view.bindTextTab(this.openText);
    this.view.bindScoreTab(this.openScore);
    this.view.bindPlaybackTab(this.openPlayback);

    // display
    this.view.bindDropdown(this.select_instrument);

    // settings
    this.view.bindTransposeDown(this.transpose_down);
    this.view.bindTransposeUp(this.transpose_up);
    this.view.bindAutoScroll(this.auto_scroll);
  }

  async loadText(index) {
    const instrument = this.song.instruments[index];
    const text = await this.htmlLoader.load(instrument.chords);
    this.view.setText(text);
  }

  // *** handlers ***

  // tabs

  openText = () => {
    console.log("open Text tab");
  }

  openScore = () => {
    if (!!this.song.score)
      window.open(this.song.score, "_blank");
  }

  openPlayback = () => {
    if (!!this.song.playback)
      window.open(this.song.playback, "_blank");
  }

  // *** display-div ***

  select_instrument = (event) => {
    this.loadText(event.target.value);
  }

  // *** settings-div ***

  // transposer

  transpose_down = () => {
    this.transposer.transposeDown();
  }

  transpose_up = () => {
    this.transposer.transposeUp();
  }

  // auto-scroll
  
  auto_scroll = () => {
    // this.autoScroll.speed = 10;
    
    this.autoScroll.run();
  }
}

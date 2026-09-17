import Song from '../models/Song.js';
import SongService from '../services/SongService.js';
import SongView from '../views/SongView.js';

import HtmlLoader from '../loaders/HtmlLoader.js';

import AutoScroll from '../helpers/page/AutoScroll.js';
import Transposer from '../helpers/Transposer.js';

export default class SongController {
  #params;
  #current_insrument_index = 0;

  async init() {
    this.#params = new URLSearchParams(window.location.search);
    const id = this.#params.get("id");
    
    // model
    this.songService = new SongService();
    this.song = await this.songService.getById(id);

    console.log("set instrument: " + this.#current_insrument_index);

    // view
    this.view = new SongView();
    
    this.view.setPageTitle(this.song.band + " - " + this.song.title);
    this.view.setTitle(this.song.title);
    this.view.setBand(this.song.band);
    this.view.setKey(this.song.key);
    this.song.instruments.forEach((instrument, index) => {
      this.view.addTuning(instrument.title, instrument.tuning);

      if (instrument.capo)
        this.view.addCapo(instrument.capo);
    });

    // load text
    this.htmlLoader = new HtmlLoader();

    var txt = this.song.text;
    if (true) {
      const toInsert = " (bass)";
      const index = txt.length - ".html".length;

      txt = txt.slice(0, index) + toInsert + txt.slice(index);
    }
    
    const text = await this.htmlLoader.load(txt);
    this.view.setText(text);

    // select
    this.song.instruments.forEach((instrument, index) => {
      var title = instrument.title;

      if (title == "Guitar")
        title = "🔴 " + title;
      else if (title == "Bass Guitar" || title == "5-string Bass Guitar")
        title = "🟡 " + title;

      if (instrument.capo > 0)
        title += " (" + "Capo: +" + instrument.capo + ")";
      
      this.view.addOption(index, title);
    });

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
    this.view.bindSelect(this.select_instrument);

    // settings
    this.view.bindTransposeDown(this.transpose_down);
    this.view.bindTransposeUp(this.transpose_up);
    this.view.bindAutoScroll(this.auto_scroll);
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
    this.#current_insrument_index = event.target.value;
    
    console.log("set instrument: " + this.#current_insrument_index);
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

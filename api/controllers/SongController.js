import Song from '../models/Song.js';
import SongService from '../services/SongService.js';
import SongView from '../views/SongView.js';

import TextLoader from '../loaders/TextLoader.js';

import Autoscroll from '../helpers/page/AutoScroll.js';
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
      this.view.addTuning(instrument.title, instrument.tuning, instrument.capo);
    });

    // load text
    this.loader = new TextLoader();
    const text = await this.loader.loadData(this.song.text);
    this.view.setText(text);

    // functions
    this.transposer = new Transposer();
    this.transposer.key = this.song.key;
    
    this.autoscroll = new Autoscroll();

    // *** binding controller-view ***

    // tabs
    this.view.bindTextTab(this.openText);
    this.view.bindScoreTab(this.openScore);
    this.view.bindPlaybackTab(this.openPlayback);

    // settings

    // transposer
    this.view.bindTransposeDown(this.transpose_down);
    this.view.bindTransposeUp(this.transpose_up);
    
    // autoscroll
    this.view.bindAutoscroll(this.auto_scroll);
  }

  // *** logic ***

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

  // settings

  // transposer

  transpose_down = () => {
    this.transposer.transposeDown();
  }

  transpose_up = () => {
    this.transposer.transposeUp();
  }

  // autoscroll
  
  auto_scroll = () => {
    this.autoscroll.run();
  }
}

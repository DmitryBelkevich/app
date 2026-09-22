import Song from '../models/Song.js';
import SongService from '../services/SongService.js';
import SongView from '../views/SongView.js';

import AutoScroll from '../helpers/page/AutoScroll.js';
import Transposer from '../helpers/Transposer.js';

import StateService from '../services/StateService.js';

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

    // *** title ***
    
    this.view.setPageTitle(this.song.band + " - " + this.song.title);
    this.view.setTitle(this.song.title);
    this.view.setBand(this.song.band);

    // *** display ***

    // 1. key-signature

    this.view.setKey(this.song.key);

    // 2. transposer

    // 3. auto-scroll
    this.autoScroll = new AutoScroll();

    // *** settings ***

    // 1. dropdown
    this.song.instruments.forEach((instrument, index) => {
      this.view.addOption(index, instrument.title, instrument.color);
    });

    // 2. tuning

    // *** tuning ***

    this.song.instruments.forEach((instrument, index) => {
      if (instrument.title != "Keyboards" && instrument.title != "Instrument")
        this.view.addTuning(instrument.tuning, instrument.tuning.isStandard());

      if (instrument.capo)
        this.view.addCapo(instrument.capo);
    });

    // *** text ***

    // state
    this.stateService = new StateService(this.song, this.view);

    // *** binding controller-view ***

    // binding: view -> model

    // *** tabs ***
    
    this.view.bindTextTab(this.openText);
    this.view.bindScoreTab(this.openScore);
    this.view.bindPlaybackTab(this.openPlayback);

    // *** display ***
    
    // 1. key-signature
    
    // 2. transposer
    this.transposer = new Transposer();
    this.transposer.key = this.song.key;
    
    this.view.bindTransposeDown(this.transpose_down);
    this.view.bindTransposeUp(this.transpose_up);

    // 3. auto-scroll
    this.view.bindAutoScroll(this.auto_scroll);

    // *** settings ***

    // 1. dropdown
    this.view.bindDropdown(this.select_instrument);

    // *** tuning ***

    // *** text ***
  }

  // *** handlers ***

  // *** tabs ***

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

  // *** display ***

  // 1. key-signature

  // 2. transposer

  transpose_down = () => {
    this.transposer.transposeDown();
  }

  transpose_up = () => {
    this.transposer.transposeUp();
  }

  // 3. auto-scroll
  
  auto_scroll = () => {
    // this.autoScroll.speed = 10;
    
    this.autoScroll.run();
  }

  // *** settings ***

  // 1. dropdown

  select_instrument = (event) => {
    this.stateService.current = event.target.value; // *** change STATE ***
  }

  // *** tuning ***

  // *** text ***
}

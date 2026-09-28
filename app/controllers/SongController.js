import Song from '../models/Song.js';
import SongService from '../services/SongService.js';
import SongView from '../views/SongView.js';

import AutoScroll from '../helpers/page/AutoScroll.js';

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

    // *** nav ***

    // *** title ***
    
    this.view.setPageTitle(this.song.band + " - " + this.song.title);
    this.view.setTitle(this.song.title);
    this.view.setBand(this.song.band);

    // *** settings ***

    // 1. key-signature (global)

    this.view.setKey(this.song.key);

    // 2. transposer (global)

    // 3. auto-scroll
    this.autoScroll = new AutoScroll();

    // *** instrument ***

    // 1. dropdown
    this.song.instruments.forEach((instrument, index) => {
      this.view.addOption(index, instrument.title, instrument.color);
    });

    // 2. tuning

    // *** text ***

    // state
    this.stateService = new StateService(this.song, this.view);
    this.stateService.load();

    // *** binding controller-view ***

    // binding: view -> model

    // *** nav ***

    this.view.bindListButton(this.openList);

    // *** tabs ***
    
    this.view.bindTextTab(this.openText);
    this.view.bindScoreTab(this.openScore);
    this.view.bindPlaybackTab(this.openPlayback);

    // *** settings ***
    
    // 1. key-signature (global)
    
    // 2. transposer (global)
    this.view.bindTransposeDown(this.transpose_global_down);
    this.view.bindTransposeUp(this.transpose_global_up);

    // 3. auto-scroll
    this.view.bindAutoScroll(this.auto_scroll);

    // *** settings ***

    // 1. dropdown
    this.view.bindDropdown(this.select_instrument);

    // *** tuning ***

    // *** text ***
  }

  // *** handlers ***

  // *** nav ***

  openList = () => {
    window.location.href = window.location.origin + "/app" + "/list";
  }

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

  // *** settings ***

  // 1. key-signature (global)

  // 2. transposer (global)

  transpose_global_down = () => {
    this.stateService.transposeService.transposeDown();
  }

  transpose_global_up = () => {
    this.stateService.transposeService.transposeUp();
  }

  // 0. key-signature (local)

  // 0. transposer (local)

  transpose_local_down = () => {
    console.log("transpose_local_down");
  }

  transpose_local_up = () => {
    console.log("transpose_local_up");
  }

  // 3. auto-scroll
  
  auto_scroll = () => {
    // this.autoScroll.speed = 10;
    
    this.autoScroll.run();
  }

  // *** instrument ***

  // 1. dropdown

  select_instrument = (event) => {
    this.stateService.current = event.target.value;
    this.stateService.load();
  }

  // *** text ***
}

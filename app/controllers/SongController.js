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

    // 1. list

    // 2. auto-scroll
    this.autoScroll = new AutoScroll();

    // *** title ***
    
    this.view.setPageTitle(this.song.band + " - " + this.song.title);
    this.view.setTitle(this.song.title);
    this.view.setBand(this.song.band);

    // *** settings ***

    // 1. key-signature (global)

    const key = this.song.key.transpose(this.song.transposition);
    this.view.setKeyGlobal(key, this.song.isTransposed());

    // 2. transposer (global)

    // 3. key-signature (local)

    this.view.setKeyLocal("Em");

    // 4. transposer (local)

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

    // 1. list
    this.view.bindListButton(this.openList);

    // 2. auto-scroll
    this.view.bindAutoScroll(this.auto_scroll);

    // *** tabs ***
    
    this.view.bindTextTab(this.openText);
    this.view.bindScoreTab(this.openScore);
    this.view.bindPlaybackTab(this.openPlayback);

    // *** settings ***
    
    // 1. key-signature (global)
    
    // 2. transposer (global)
    this.view.bindTransposeDownGlobal(this.transpose_down_global);
    this.view.bindTransposeUpGlobal(this.transpose_up_global);

    // 3. key-signature (local)

    // 4. transposer (local)
    this.view.bindTransposeDownLocal(this.transpose_down_local);
    this.view.bindTransposeUpLocal(this.transpose_up_local);

    // *** settings ***

    // 1. dropdown
    this.view.bindDropdown(this.select_instrument);

    // *** tuning ***

    // *** text ***
  }

  // *** handlers ***

  // *** nav ***

  // 1. list

  openList = () => {
    window.location.href = window.location.origin + "/app" + "/list";
  }

  // 2. auto-scroll
  
  auto_scroll = () => {
    // this.autoScroll.speed = 10;
    
    this.autoScroll.run();
  }

  // *** tabs ***

  openText = () => {
    console.log("open Text tab");
    console.log(this.song);// ------------- DELETE-------------------
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

  transpose_down_global = () => {
    console.log("transpose down Playback");
    
    this.song.transposition -= 1;
    const key = this.song.key.transpose(this.song.transposition);
    this.view.setKeyGlobal(key, this.song.isTransposed());
    
    console.log("transpose down tuning");
  }

  transpose_up_global = () => {
    console.log("transpose up Playback");
    
    this.song.transposition += 1;
    const key = this.song.key.transpose(this.song.transposition);
    this.view.setKeyGlobal(key, this.song.isTransposed());
    
    console.log("transpose up tuning");
  }

  // 3. key-signature (local)

  // 4. transposer (local)

  transpose_down_local = () => {
    this.stateService.transposeService.transposeDown();
  }

  transpose_up_local = () => {
    this.stateService.transposeService.transposeUp();
  }

  // *** instrument ***

  // 1. dropdown

  select_instrument = (event) => {
    this.stateService.current = event.target.value;
    this.stateService.load();
  }

  // *** text ***
}

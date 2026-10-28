import Song from '../models/Song.js';

import ParamsService from '../services2/ParamsService.js';
import SongService from '../services2/SongService.js';
import TranspositionService from '../services2/TranspositionService.js';
import InstrumentService from '../services2/InstrumentService.js';

import SongView from '../views/SongView.js';

// import AutoScroll from '../helpers/page/AutoScroll.js';

// import InstrumentService from '../services/InstrumentService.js';

export default class SongController {
  #songService;
  #transpositionService;
  #instrumentService;
  
  async init() {
    const paramsService = new ParamsService();
    const id = paramsService.getId();
    
    // model
    this.#songService = new SongService();
    this.song = await this.#songService.getById(id);

    // view
    this.view = new SongView();

    // *** nav ***

    // 1. list

    // 2. auto-scroll
    // this.autoScroll = new AutoScroll();

    // *** title ***
    
    this.view.setPageTitle(this.song.band + " - " + this.song.title);
    this.view.title.setTitle(this.song.title);
    this.view.title.setBand(this.song.band);

    // *** settings-song ***

    this.#transpositionService = new TranspositionService(this.song, this.view);

    // *** instrument ***

    this.#instrumentService = new InstrumentService(this.song, this.view);

    // *** tuning ***

    // *** text ***

    // state
    // this.instrumentService.load();

    // *** binding controller-view ***

    // binding: view -> model

    // *** nav ***

    // 1. list
    // this.view.navigator.bindList(this.openList);

    // 2. auto-scroll
    // this.view.navigator.bindAutoScroll(this.auto_scroll);

    // *** tabs ***
    
    // this.view.tabs.bindText(this.openText);
    // this.view.tabs.bindScore(this.openScore);
    // this.view.tabs.bindPlayback(this.openPlayback);

    // *** settings-song ***
    
    // 1. key-signature (song)

    // 2. transposition (song)
    
    // 3. transpose down (song)
    this.view.song.bindTransposeDown(this.transpose_down_song);
    
    // 4. transpose up (song)
    this.view.song.bindTransposeUp(this.transpose_up_song);

    // *** instrument ***

    // 1. dropdown
    this.view.instrument.bindDropdown(this.select_instrument);

    // 2. key-signature (instrument)

    // 3. transpose down (instrument)
    this.view.instrument.bindTransposeDown(this.transpose_down_instrument);

    // 4. transpose up (instrument)
    this.view.instrument.bindTransposeUp(this.transpose_up_instrument);

    // *** tuning ***

    // *** text ***
  }

  // *** handlers ***

  // *** nav ***

  // 1. list

  openList = () => {
    window.location.href = window.location.origin + "/app" + "/list";
  }

  // // 2. auto-scroll
  
  auto_scroll = () => {
    // this.autoScroll.speed = 10;
    
    this.autoScroll.run();
  }

  // *** tabs ***

  openText = () => {
    // console.log("open Text tab");
    console.log(this.song);
  }

  openScore = () => {
    if (!!this.song.score)
      window.open(this.song.score, "_blank");
  }

  openPlayback = () => {
    if (!!this.song.playback)
      window.open(this.song.playback, "_blank");
  }

  // *** settings-song ***

  // 1. key-signature (song)

  // 2. transposition (song)

  // 3. transpose down (song)

  transpose_down_song = () => {
    this.#transpositionService.transpose(-1);
    this.#instrumentService.setTransposition();
    
  //   // tuning-view
  //   this.instrumentService.loadKey();
  //   this.instrumentService.loadTuning();
  }

  // // 4. transpose up (song)

  transpose_up_song = () => {
    this.#transpositionService.transpose(1);
    this.#instrumentService.setTransposition();

  //   // tuning-view
  //   this.instrumentService.loadKey();
  //   this.instrumentService.loadTuning();
  }

  // *** instrument ***

  // 1. dropdown

  select_instrument = (event) => {
    this.#instrumentService.load(event.target.value);
  }

  // // 2. key-signature (instrument)

  // // 3. transpose down (instrument)

  transpose_down_instrument = () => {
    this.#instrumentService.transpose(-1);

  //   // tuning-view
  //   this.instrumentService.loadTuning();
  }

  // // 4. transpose down (instrument)

  transpose_up_instrument = () => {
    this.#instrumentService.transpose(1);

  //   // tuning-view
  //   this.instrumentService.loadTuning();
  }

  // *** text ***
}

import Title from './Title.js';
import Song from './Song.js';
import Instrument from './Instrument.js';
import Tuning from './Tuning.js';

import CssLoader from '../loaders/CssLoader.js';

export default class SongView {
  title;
  song;
  instrument;
  tuning;
  
  constructor() {
    this.title = new Title();
    this.song = new Song();
    this.instrument = new Instrument();
    this.tuning = new Tuning();
    
    this.cssLoader = new CssLoader();

    // reset css
    this.cssLoader.load("./app/views/css/reset.css");

    // *** components ***

    // navigator
    this.cssLoader.load("./app/views/css/song/nav.css");
    this.nav = document.createElement("nav");

    // 1. list
    this.list_button = document.createElement("button");
    this.list_button.textContent = "◀️";

    // 2. auto-scroll
    this.autoscroll_e = document.createElement("button");
    this.autoscroll_e.id = "autoscroll";
    this.autoscroll_e.textContent = "⏬";

    // fill container
    this.nav.append(this.list_button, this.autoscroll_e);
    
    // Tab 1
    this.tab_text = document.createElement("button");
    this.tab_text.id = "tab_text";
    this.tab_text.classList.add("tab");
    this.tab_text.textContent = "📝 Text & Chords";
    
    // Tab 2
    this.tab_score = document.createElement("button");
    this.tab_score.id = "tab_score";
    this.tab_score.classList.add("tab");
    this.tab_score.textContent = "🎵 Scores";
    
    // Tab 3
    this.tab_playback = document.createElement("button");
    this.tab_playback.id = "tab_playback";
    this.tab_playback.classList.add("tab");
    this.tab_playback.textContent = "🎧 Playbacks";
    
    // Tabs
    this.cssLoader.load("./app/views/css/song/tabs.css");
    this.tabs = document.createElement("div");
    this.tabs.id = "tabs";

    // fill container
    this.tabs.append(this.tab_text, this.tab_score, this.tab_playback);
    
    // *** Text ***
    this.cssLoader.load("./app/views/css/song/text.css");
    this.text = document.createElement("div");
    this.text.id = "text";
    
    // *** Footer ***
    this.cssLoader.load("./app/views/css/song/footer.css");
    this.footer = document.createElement("div");
    this.footer.id = "footer";
    this.footer.textContent = "Copyright © Dmitry Belkevich";
    
    // *** fill container ***
    document.body.append(
      this.nav,
      this.title,
      this.tabs,
      this.song.container,
      this.instrument.container,
      this.tuning.container,
      this.text,
      this.footer
    );
  }

  // *** render ***

  // *** head ***

  setPageTitle(title) {
    document.title = title;
  }

  // 1. list

  // 2. autoscroll

  // *** text ***

  setText(text) {
    this.text.innerHTML = text;
  }

  // *** binding: view -> controller ***

  // *** nav ***

  // 1. list

  bindListButton(handler) {
    this.list_button.addEventListener("click", () => {
      handler();
    });
  }

  // 2. auto-scroll
  
  bindAutoScroll(handler) {
    this.autoscroll_e.addEventListener("click", () => {
      handler();
    });
  }

  // *** tabs ***
  
  bindTextTab(handler) {
    this.tab_text.addEventListener("click", () => {
      handler();
    });
  }

  bindScoreTab(handler) {
    this.tab_score.addEventListener("click", () => {
      handler();
    });
  }

  bindPlaybackTab(handler) {
    this.tab_playback.addEventListener("click", () => {
      handler();
    });
  }
}

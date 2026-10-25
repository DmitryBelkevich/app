import Navigator from './Navigator.js';
import Title from './Title.js';
import Song from './Song.js';
import Instrument from './components/Instrument.js';
import Tuning from './Tuning.js';
import Text from './Text.js';

import CssLoader from '../loaders/CssLoader.js';

export default class SongView {
  navigator;
  title;
  song;
  instrument;
  tuning;
  text;
  
  constructor() {
    this.navigator = new Navigator();
    this.title = new Title();
    this.song = new Song();
    this.instrument = new Instrument();
    this.tuning = new Tuning();
    this.text = new Text();
    
    // reset css
    this.cssLoader = new CssLoader();
    this.cssLoader.load("./app/views/css/reset.css");

    // *** components ***
    
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
    
    // *** Footer ***
    this.cssLoader.load("./app/views/css/song/footer.css");
    this.footer = document.createElement("div");
    this.footer.id = "footer";
    this.footer.textContent = "Copyright © Dmitry Belkevich";
    
    // *** fill container ***
    document.body.append(
      this.navigator.container,
      this.title.container,
      this.tabs,
      this.song.container,
      this.instrument.container,
      this.tuning.container,
      this.text.container,
      this.footer
    );
  }

  // *** render ***

  setPageTitle(title) {
    document.title = title;
  }

  // *** binding: view -> controller ***

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

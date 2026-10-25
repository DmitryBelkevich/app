import Navigator from './components/Navigator.js';
import Title from './components/Title.js';
import Tabs from './components/Tabs.js';
import Song from './components/Song.js';
import Instrument from './components/Instrument.js';
import Tuning from './components/Tuning.js';
import Text from './components/Text.js';

import CssLoader from '../loaders/CssLoader.js';

export default class SongView {
  navigator;
  title;
  tabs;
  song;
  instrument;
  tuning;
  text;
  
  constructor() {
    this.navigator = new Navigator();
    this.title = new Title();
    this.tabs = new Tabs();
    this.song = new Song();
    this.instrument = new Instrument();
    this.tuning = new Tuning();
    this.text = new Text();
    
    // reset css
    this.cssLoader = new CssLoader();
    this.cssLoader.load("./app/views/css/reset.css");

    // *** components ***
    
    // *** Footer ***
    this.cssLoader.load("./app/views/css/song/footer.css");
    this.footer = document.createElement("div");
    this.footer.id = "footer";
    this.footer.textContent = "Copyright © Dmitry Belkevich";
    
    // *** fill container ***
    document.body.append(
      this.navigator.container,
      this.title.container,
      this.tabs.container,
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
}

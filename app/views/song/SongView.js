import View from '../View.js';

import NavigatorPanel from './panels/NavigatorPanel.js';
import TitlePanel from './panels/TitlePanel.js';
import TabsPanel from './panels/TabsPanel.js';
import TextPanel from './panels/TextPanel.js';
import ScorePanel from './panels/ScorePanel.js';
import PlaybackPanel from './panels/PlaybackPanel.js';
import FooterPanel from './panels/FooterPanel.js';

import Autoscroll from './services/Autoscroll.js';
import Mediator from './services/Mediator.js';

export default class SongView extends View {
  #panels = new Map();
  #autoscroll = new Autoscroll();
  #mediator = new Mediator();
  
  constructor(song) {
    super();
    
    this.setPageTitle(song.band + " - " + song.title);

    this.#panels.set("navigator", new NavigatorPanel());
    this.#panels.set("title", new TitlePanel(song));
    this.#panels.set("tabs", new TabsPanel());
    this.#panels.set("text", new TextPanel());
    this.#panels.set("score", new ScorePanel());
    this.#panels.set("playback", new PlaybackPanel());
    this.#panels.set("footer", new FooterPanel());
  }

  init() {
    for (const panel of this.#panels.values())
      panel.init();
  }

  get panels() {
    return this.#panels;
  }

  get autoscroll() {
    return this.#autoscroll;
  }
}

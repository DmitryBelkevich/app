import View from '../View.js';

import NavigatorPanel from './panels/NavigatorPanel.js';
import TitlePanel from './panels/TitlePanel.js';
import TabsPanel from './panels/TabsPanel.js';
import TextPanel from './panels/TextPanel.js';
import ScorePanel from './panels/ScorePanel.js';
import PlaybackPanel from './panels/PlaybackPanel.js';
import FooterPanel from './panels/FooterPanel.js';

import Autoscroll from './services/Autoscroll.js';
import TabsMediator from './services/TabsMediator.js';

export default class SongView extends View {
  #panels = new Map();
  #autoscroll = new Autoscroll();
  #tabsMediator = new TabsMediator();
  
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

    // add panels into Mediator
    this.#tabsMediator.add("tab_text", this.#panels.get("text"));
    this.#tabsMediator.add("tab_score", this.#panels.get("score"));
    this.#tabsMediator.add("tab_playback", this.#panels.get("playback"));
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

  get tabsMediator() {
    return this.#tabsMediator;
  }
}

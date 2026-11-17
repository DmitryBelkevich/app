import View from '../View.js';

import NavigatorPanel from './panels/NavigatorPanel.js';
import TitlePanel from './panels/TitlePanel.js';
import TabsPanel from './panels/TabsPanel.js';
import TextPanel from './panels/TextPanel.js';
import ScorePanel from './panels/ScorePanel.js';
import PlaybackPanel from './panels/PlaybackPanel.js';
import SettingsPanel from './panels/SettingsPanel.js';
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
    this.#panels.set("settings", new SettingsPanel(song));
    this.#panels.set("text", new TextPanel());
    this.#panels.set("score", new ScorePanel(song));
    this.#panels.set("playback", new PlaybackPanel(song));
    this.#panels.set("footer", new FooterPanel());

    // *** Tabs-Mediator ***

    // register tabs
    this.#tabsMediator.registerTab("tab_text", this.#panels.get("tabs").tabs.get("text"));
    this.#tabsMediator.registerTab("tab_score", this.#panels.get("tabs").tabs.get("score"));
    this.#tabsMediator.registerTab("tab_playback", this.#panels.get("tabs").tabs.get("playback"));

    // register panels
    this.#tabsMediator.registerPanel("tab_text", this.#panels.get("settings"));
    this.#tabsMediator.registerPanel("tab_text", this.#panels.get("text"));
    this.#tabsMediator.registerPanel("tab_score", this.#panels.get("score"));
    this.#tabsMediator.registerPanel("tab_playback", this.#panels.get("playback"));

    // activate default tab
    // this.#tabsMediator.activate("tab_text");
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

  init() {
    for (const panel of this.#panels.values())
      panel.init();
  }
}

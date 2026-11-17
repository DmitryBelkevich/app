import Panel from './Panel.js';

import SettingsSongPanel from './SettingsSongPanel.js';

export default class SettingsPanel extends Panel {
  #panels = new Map();

  constructor(song) {
    super();
    // this._cssLoader.load("./app/views/song/css/000.css");

    // container
    this._element = document.createElement("div");
    this._element.id = "settings";

    // panels
    this.#panels.set("settings-song", new SettingsSongPanel(song));

    // fill
    this._element;
  }

  get panels() {
    return this.#panels;
  }

  init() {
    for (const panel of this.#panels.values())
      panel.init();
  }
}

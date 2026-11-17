import Panel from './Panel.js';

import SettingsSongPanel from './SettingsSongPanel.js';

export default class SettingsPanel extends Panel {
  #panels = new Map();

  constructor(song) {
    super();
    // this._cssLoader.load("./app/views/song/css/settings.css");

    // container
    this._element = document.createElement("div");
    this._element.id = "settings";

    // panels
    this.#panels.set("settings-song", new SettingsSongPanel(song));
  }

  get panels() {
    return this.#panels;
  }

  init() {
    for (const panel of this.#panels.values())
      panel.init();

    document.body.append(this._element);
  }
}

import Panel from './Panel.js';

import SettingsSongPanel from './panels/SettingsSongPanel.js';

export default class SettingsPanel extends Panel {
  #panels = new Map();

  constructor(song) {
    super();
    // this._cssLoader.load("./app/views/song/css/000.css");

    this.#panels.set("settings-song", new SettingsSongPanel(song));
  }

  get panels() {
    return this.#panels;
  }

  init() {
    for (const panel of this.#panels.values())
      panel.init();
  }
}

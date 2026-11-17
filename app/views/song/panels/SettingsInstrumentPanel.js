import Panel from './Panel.js';

export default class SettingsInstrumentPanel extends Panel {
  #components = new Map();

  constructor(song) {
    super();
    this._cssLoader.load("./app/views/song/css/settings_instrument.css");

    // container
    this._element = document.createElement("div");
    this._element.id = "settings-instrument";
    this._element.classList.add("panel");

    // components
  }
}

import Panel from './Panel.js';

export default class TuningPanel extends Panel {
  constructor() {
    super();
    this._cssLoader.load("./app/views/song/css/tuning.css");

    // container
    this._element = document.createElement("div");
    this._element.id = "tuning";
    this._element.classList.add("panel");

    // components

    // 1. tuning

    // 2. capo
  }
  
  init() {
    
  }

  setTuning(tuning) {
    console.log(tuning);
  }

  setCapo(capo) {
    console.log(capo);
  }
}

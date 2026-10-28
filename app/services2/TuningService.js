export default class TuningService {
  #view;
  
  constructor(view) {
    this.#view = view;
  }

  loadTuning(instrument) {
    this.#view.tuning.clear();

    if (!instrument.tuning)
      return;
    
    tuning.forEach(note => this.#view.tuning.addString(note, instrument.tuning.isStandard));

    if (instrument.capo)
      this.#view.tuning.addCapo(instrument.capo);
  }
}

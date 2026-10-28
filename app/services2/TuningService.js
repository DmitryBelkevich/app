export default class TuningService {
  #view;
  
  constructor(view) {
    this.#view = view;
  }

  loadTuning(instrument_) {
    this.#view.tuning.clear();

    if (!instrument_.tuning)
      return;
    
    instrument_.tuning.forEach(note => this.#view.tuning.addString(note, instrument.tuning.isStandard));

    if (instrument_.capo)
      this.#view.tuning.addCapo(instrument_.capo);
  }
}

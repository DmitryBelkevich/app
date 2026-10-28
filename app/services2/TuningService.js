export default class TuningService {
  #instrument;
  #view;
  
  constructor(instrument, view) {
    this.#instrument = instrument;
    this.#view = view;

    this.loadTuning();
  }

  set instrument(instrument) {
    this.#instrument = instrument;
  }

  loadTuning() {
    this.#view.tuning.clear();

    const tuning = this.#instrument.tuning;

    if (!tuning)
      return;

    const isStandard = tuning.isStandard();
    
    tuning.forEach(note => this.#view.tuning.addString(note, isStandard));

    if (this.#instrument.capo)
      this.#view.tuning.addCapo(this.#instrument.capo);
  }
}

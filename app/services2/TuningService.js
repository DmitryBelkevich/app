export default class TuningService {
  #view;
  
  constructor(view) {
    this.#view = view;
  }

  loadTuning(instrument) {
    this.#view.tuning.clear();

    const tuning = instrument.tuning;

    if (!tuning)
      return;

    const isStandard = tuning.isStandard();
    
    tuning.forEach(note => this.#view.tuning.addString(note, isStandard));

    if (instrument.capo)
      this.#view.tuning.addCapo(instrument.capo);
  }
}

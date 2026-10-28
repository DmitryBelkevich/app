export default class TuningService {
  #view;
  
  constructor(view) {
    this.#view = view;
  }

  loadTuning(tuning, capo) {
    this.clear();

    if (tuning)
      tuning.forEach(note => this.#view.tuning.addString(note, tuning.isStandard()));

    if (capo)
      this.#view.tuning.addCapo(capo);
  }

  clear() {
    this.#view.tuning.clear();
  }
}

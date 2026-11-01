export default class TuningService {
  #view;
  
  constructor(view) {
    this.#view = view;
  }

  loadTuning(tuning, capo) {
    this.clear();

    if (tuning)
      tuning.forEach(note => this.#view.addString(note, tuning.isStandard()));

    if (capo)
      this.#view.addCapo(capo);
  }

  clear() {
    this.#view.clear();
  }
}

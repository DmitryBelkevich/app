export default class Mediator {
  #panels = [];

  add(panel) {
    this.#panels.push(panel);
  }
}

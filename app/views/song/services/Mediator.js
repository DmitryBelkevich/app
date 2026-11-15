export default class Mediator {
  #panels = [];

  add(panel) {
    this.#panels.push(panel);
  }

  set tab(id) {
    // TODO
    console.log("active tab: " + id);
    console.log("hidden tabs: ");
  }
}

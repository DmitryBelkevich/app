export default class TabsMediator {
  #panels = new Map();

  add(id, panel) {
    this.#panels.set(id, panel);
  }

  set tab(id) {
    // TODO
    console.log("active tab: " + id);
    console.log("hidden tabs: ");
    console.log("all tabs: " + this.#panels.values());
  }
}

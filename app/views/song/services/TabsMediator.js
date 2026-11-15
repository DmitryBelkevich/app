export default class TabsMediator {
  #panels = new Map();

  add(key, panel) {
    this.#panels.set(key, panel);
  }

  set tab(id) {
    // TODO
    console.log("active tab: " + id);
    console.log("hidden tabs: ");
    console.log("all tabs: " + this.#panels);
  }
}

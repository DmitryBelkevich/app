export default class TabsMediator {
  #panels = new Map();

  add(id, panel) {
    this.#panels.set(id, panel);
  }

  set tab(id) {
    // TODO
    console.log("active tab: " + this.#panels.get(id));
    console.log("hidden tabs: ");
    console.log("all tabs:");
    for (const panel of this.#panels.values())
      console.log(panel);
  }
}

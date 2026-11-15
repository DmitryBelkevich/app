export default class TabsMediator {
  #panels = new Map();

  add(id, panel) {
    this.#panels.set(id, panel);
  }

  set tab(id) {
    // TODO
    // console.log("active tab: " + id);
    const panel = this.#panels.get(id);
    console.log(panel);
    // console.log("hidden tabs: ");
    // console.log("all tabs:");
    // for (const panel of this.#panels.values())
    //   console.log(panel);
  }
}

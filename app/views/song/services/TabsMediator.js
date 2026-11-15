export default class TabsMediator {
  #panels = new Map();

  add(id, panel) {
    this.#panels.set(id, panel);
  }

  set panel(id) {
    const panel = this.#panels.get(id);
    console.log(panel);
    // TODO
    // console.log("hidden tabs: ");
    // console.log("all tabs:");
    // for (const panel of this.#panels.values())
    //   console.log(panel);
  }
}

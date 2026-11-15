export default class TabsMediator {
  #panels = new Map();

  add(id, panel) {
    this.#panels.set(id, panel);
  }

  // TODO
  set panel(id) {
    // for (const panel of this.#panels.values())
    //   console.log(panel);// all hidden
    
    const panel = this.#panels.get(id);
    console.log(panel);// set active
  }
}

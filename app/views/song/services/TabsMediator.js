export default class TabsMediator {
  #panels = new Map();

  add(id, panel) {
    this.#panels.set(id, panel);
  }

  // TODO
  set panel(id) {
    // for (const panel of this.#panels.values())
    //   panel.element.style.display = "none";
    
    // const panel = this.#panels.get(id);
    // console.log(panel);// set active

    for (const panel of this.#panels.values())
      console.log(panel.element);
  }
}

export default class TabsMediator {
  #panels = new Map();

  add(id, panel) {
    this.#panels.set(id, panel);
  }

  set panel(id) {
    // all hidden
    for (const panel of this.#panels.values())
      panel.element.style.display = "none";

    // set active
    const panel = this.#panels.get(id);
    panel.element.style.display = "block";
  }
}

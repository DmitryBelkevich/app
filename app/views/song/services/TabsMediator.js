export default class TabsMediator {
  #tabs = new Map();
  #panels = new Map();

  register(id, tab, panel) {
    this.#tabs.set(id, tab);
    this.#panels.set(id, panel);

    tab.click(id => this.activate(id));
  }

  activate(id) {
    // tabs
    for (const [key, tab] of this.#tabs)
      tab.setActive(id == key);
    
    // all hidden
    for (const panel of this.#panels.values())
      panel.element.style.display = "none";

    // set active
    const panel = this.#panels.get(id);
    panel.element.style.display = "block";
  }
}

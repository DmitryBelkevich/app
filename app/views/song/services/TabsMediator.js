export default class TabsMediator {
  #tabs = new Map();
  #panels = new Map();

  register(id, tab, panel) {
    this.#tabs.set(id, tab);
    this.#panels.set(id, panel);

    tab.click(id => this.activate(id));
  }

  activate(id) {
    for (const [key, tab] of this.#tabs)
      tab.active = id == key;

    for (const [key, panel] of this.#panels)
      panel.visible = id == key;
  }
}

export default class TabsMediator {
  #tabs = new Map();
  #panels = new Map();

  registerTab(id, tab) {
    this.#tabs.set(id, tab);
    
    tab.click(id => this.activate(id));
  }

  registerPanel(id, panel) {
    if (!this.#panels.has(id))
      this.#panels.set(id, []);
    
    this.#panels.get(id).push(panel);
  }

  activate(id) {
    for (const [key, tab] of this.#tabs)
      tab.active = id == key;

    for (const [key, panels] of this.#panels)
      for (const panel of panels)
        panel.visible = id == key;
  }
}

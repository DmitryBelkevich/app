export default class TabsMediator {
  #tabs = new Map();
  #panels = new Map();

  constructor() {
    console.log(this.#panels);
  }

  registerTab(id, tab) {
    this.#tabs.set(id, tab);
    
    tab.click(id => this.activate(id));
  }

  registerPanel(id, panel) {
    this.#panels.set(id, ...panel);
  }

  activate(id) {
    // for (const [key, tab] of this.#tabs)
    //   tab.active = id == key;

    // for (const [key, panel] of this.#panels)
    //   panel.visible = id == key;
  }
}

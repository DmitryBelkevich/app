export default class TabsMediator {
  #panels = [];

  add(panel) {
    this.#panels.push(panel);
  }

  set tab(id) {
    // TODO
    console.log("active tab: " + id);
    console.log("hidden tabs: ");
  }
}

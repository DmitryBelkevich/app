import MainView from '../views/MainView.js';

export default class MainController {
  async init() {
    // view
    this.view = new MainView();
  }
}

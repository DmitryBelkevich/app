import config from './config/config.js';

import MainController from '../controllers/MainController.js';
import ListController from '../controllers/ListController.js';
import SongController from '../controllers/SongController.js';

export default class Dispatcher {
  #routes = [];
  
  constructor() {
    this.#routes[""] = new MainController();
    this.#routes["list"] = new ListController();
    this.#routes["song"] = new SongController();
  }
  
  dispatch(path) {
    const routeName = path.slice(("/" + config.appName + "/").length);
    
    const controller = this.#routes[routeName];
    controller.init();
  }
}

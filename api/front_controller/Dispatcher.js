import MainController from '../controllers/MainController.js';
import ListController from '../controllers/ListController.js';
import SongController from '../controllers/SongController.js';

export default class Dispatcher {
  #routes = [];
  
  constructor() {
    this.#routes[""] = new MainController();
    this.#routes["/list"] = new ListController();
    this.#routes["/song"] = new SongController();
  }
  
  dispatch(path) {
    const appName = "city_17";
    const routeName = path.slice(("/" + appName).length, -1);
    
    const controller = this.#routes[routeName];
    controller.init();
  }
}

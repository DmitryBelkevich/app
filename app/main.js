import config from './config/config.js';
import FrontController from './front_controller/FrontController.js';

function main() {console.log(config);
  const frontController = new FrontController();
  
  frontController.handleRequest(window.location.pathname);
}

const app = main();

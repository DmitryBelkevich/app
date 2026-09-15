import FrontController from './front_controller/FrontController.js';

function main() {
  const frontController = new FrontController();
  
  frontController.handleRequest(window.location.pathname);
}

const app = main();

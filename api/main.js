import FrontController from '../front_controller/FrontController.js';

function main() {
  const frontController = new FrontController();

  const path = window.location.pathname;
  frontController.dispatch(path);
}

const app = main();

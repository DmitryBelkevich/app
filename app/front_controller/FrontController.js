import Dispatcher from './Dispatcher.js';

export default class FrontController {
  constructor() {
    this.dispatcher = new Dispatcher();
  }
  
  handleRequest(request) {
    this.dispatcher.dispatch(request);
  }
}

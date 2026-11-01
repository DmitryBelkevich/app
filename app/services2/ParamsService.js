export default class ParamsService {
  #params;
  
  constructor() {
    this.#params = new URLSearchParams(window.location.search);
  }
  
  getParam(param) {
    return this.#params.get(param);
  }

  getId() {
    return this.#params.get("id");
  }
}

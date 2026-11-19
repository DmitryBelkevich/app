import ParamsService from '../services/ParamsService.js';
import CookieService from '../services/CookieService.js';

export default class Controller {
  _paramsService;
  _cookieService;
  _params;
  
  constructor() {
    this._paramsService = new ParamsService();
    this._cookieService = new CookieService();

    this._params = this._paramsService.getObject();
  }
  
  async init() {
    console.log("init");
  }
}

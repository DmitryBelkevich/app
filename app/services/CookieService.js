import CookieDao from '../dao/CookieDao.js';

export default class CookieService {
  #cookieDao;
  
  constructor() {
    this.#cookieDao = new CookieDao();
  }
  
  getAll() {
    return this.#cookieDao.getAll();
  }
  
  getByName(name) {
    return this.#cookieDao.getByName(name);
  }
  
  save(obj) {
    this.#cookieDao.save(obj);
  }
}

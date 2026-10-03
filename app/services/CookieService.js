import CookieDao from '../dao/CookieDao.js';

export default class CookieService {
  #cookieDao;
  #default_obj;
  
  consctructor() {
    this.#cookieDao = new CookieDao();console.log(this.#cookieDao);

    this.#default_obj = { name: "instrument", value: 0 };
  }

  getAll() {
    return this.#cookieDao.getAll();
  }

  getByName(name) {
    return this.#cookieDao.getByName(name) || this.#default_obj;
  }

  save(obj) {
    this.#cookieDao.save(obj);
  }
}

export default class CookieService {
  #cookieDao;
  #default_obj;
  
  consctructor() {
    this.#cookieDao = new CookieDao();

    this.#default_obj = { name: "instrument", value: 0 };
  }

  getAll() {
    return this.#cookieDao.getAll();
  }

  getByName(name) {
    return this.#cookieDao.getByName(name);
  }

  getDeafult() {
    return this.#default_obj;
  }

  save(obj) {
    this.#cookieDao.save(obj);
  }
}

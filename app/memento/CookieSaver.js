export default class CookieLoader {
  getAll() {
    const cookies_obj = document.cookie.split("; ").reduce((acc, current) => {
        const [key, value] = current.split('=');
        acc[key] = value || "";
      return acc;
    }, {});

    return cookies_obj;
  }
  
  getByName(name) {
    const cookies_obj = this.getAll();

    const value = cookies_obj[name];

    if (value)
      return {name: name, value: value};
    
    return null;
  }
  
  save(cookie_obj) {
    document.cookie = cookie_obj.name + "=" + cookie_obj.value;
  }
}

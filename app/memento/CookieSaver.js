export default class CookieSaver {
  getByName(name) {
    const obj = document.cookie.split("; ").reduce((acc, current) => {
        const [key, value] = current.split('=');
        acc[key] = value || "";
      return acc;
    }, {});

    return obj;
  }
  
  save(obj) {
    document.cookie = obj.name + "=" + obj.value;
  }
}

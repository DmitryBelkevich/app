export default class CookieSaver {
  getAll() {
    const obj = document.cookie.split("; ").reduce((acc, current) => {
        const [key, value] = current.split('=');
        acc[key] = value || "";
      return acc;
    }, {});

    return obj;
  }
  
  getByName(name) {
    const obj = this.getAll();

    const value = obj[name];
    
    return {name: name, value: value};
  }
  
  save(obj) {
    document.cookie = obj.name + "=" + obj.value;
  }
}

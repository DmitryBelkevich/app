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

    const result = {name: name, value: value};

    console.log(result);
    
    return result;
  }
  
  save(obj) {
    document.cookie = obj.name + "=" + obj.value;
  }
}

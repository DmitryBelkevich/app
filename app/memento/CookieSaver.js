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
    const cookies_obj = this.getAll();

    const value = cookies_obj[name];

    console.log(name);

    const result = {name: name, value: value};
    
    return result;
  }
  
  save(obj) {
    document.cookie = obj.name + "=" + obj.value;
  }
}

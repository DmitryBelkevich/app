export default class CookieService {
  // #default_obj;

  // constructor() {
  //   this.#default_obj = {
  //     name: "instrument",
  //     value: 0
  //   };
  // }
  
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

    if (value)
      return {name: name, value: value};
    
    return null;//this.#default_obj;
  }
  
  save(obj) {
    document.cookie = obj.name + "=" + obj.value;
  }
}

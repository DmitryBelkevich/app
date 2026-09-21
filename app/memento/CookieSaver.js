export default class CookieSaver {
  getAll() {
    const cookies_obj = document.cookie.split("; ").reduce((acc, current) => {
        const [key, value] = current.split('=');
        acc[key] = value || "";
      return acc;
    }, {});

    // if (JSON.stringify(cookies_obj) === JSON.stringify({"": ""})) {}

    return cookies_obj;// {"": ""}
  }
  
  getByName(name) {
    const cookies_obj = this.getAll();

    const value = cookies_obj[name];

    console.log(value);// undefined

    if (!value)
      return {name: name, value: value};
    
    return null;
  }
  
  save(obj) {
    document.cookie = obj.name + "=" + obj.value;
  }
}

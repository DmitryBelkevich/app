export default class CookieSaver {
  getByName(name) {
    const objects = document.cookie.split("; ");
    
    const object = objects.find(obj => obj.split("=")[0] == name) || null;
    
    if (!!object) {
      const name = object.split("=")[0];
      const value = object.split("=")[1];
      return {name: name, value: value};
    }
    
    return null;
  }
  
  save(obj) {
    document.cookie = obj.name + "=" + obj.value;
  }
}

export default class CookieSaver {
  getByName(name) {
    const objects = document.cookie.split("; ");
    
    const object = objects.find(obj => obj.split("=")[0] == name) || null;
    
    if (!!object)
      return object.split("=")[1];
    
    return null;
  }
  
  save(obj) {
    document.cookie = obj.name + "=" + obj.value;
  }
}

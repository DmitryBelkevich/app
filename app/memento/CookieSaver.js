export default class CookieSaver {
  #current = "current";
  
  get current() {
    const objects = document.cookie.split("; ");
    
    const object = objects.find(obj => obj.split("=")[0] == this.#current) || null;
    
    if (!!object)
      return object.split("=")[1];
    
    return null;
  }
  
  set current(current) {
    document.cookie = this.#current + "=" + current;
  }
}

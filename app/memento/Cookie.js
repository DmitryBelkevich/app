export default class Cookie {
  #current = "current";
  
  get current() {
    const objects = document.cookie.split("; ");
    console.log(objects);
    
    const object = objects.find(obj => obj.split("=")[0] == "current").split("=")[1] || null;
    console.log(object);
    
    return null;
  }
  
  set current(current) {
    document.cookie = this.#current + "=" + current;
  }
}

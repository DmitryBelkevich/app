export default class Cookie {
  #current = "current";

  constructor() {
    // document.cookie = this.#current + "=" + 0;
  }
  
  get current() {
    const objects = document.cookie.split("; ");
    
    const object = objects.find(obj => obj.split("=")[0] == "current") || null;
    
    if (!object) {
      console.log("hello");
      // return object.split("=")[1];
    }
    
    return null;
  }
  
  set current(current) {
    document.cookie = this.#current + "=" + current;
  }
}

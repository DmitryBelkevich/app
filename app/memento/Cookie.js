export default class Cookie {
  #current = "current";

  constructor() {
    // document.cookie = this.#current + "=" + 0;
  }
  
  get current() {
    const objects = document.cookie.split("; ");
    console.log(objects);
    
    const object = objects.find(obj => obj.split("=")[0] == "current") || null;
    console.log(object);

    if (!object)
      return object.split("=")[1];
    
    return 1;
  }
  
  set current(current) {
    document.cookie = this.#current + "=" + current;
  }
}

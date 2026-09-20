export default class Cookie {
  get current() {
    const objects = document.cookie.split("; ");
    console.log(objects);
    
    const object = objects.find(obj => obj.split("=")[0] == "current").split("=")[1] || null;
    
    
    return object;
  }
  
  set current(current) {
    document.cookie = "current=" + current;
  }
}

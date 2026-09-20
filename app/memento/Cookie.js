export default class Cookie {
  get current() {
    return document.cookie.split("; ")objects.find(obj => obj.split("=")[0] == "current").split("=")[1] || null;
  }
  
  set current(current) {
    document.cookie = "current=" + current;
  }
}

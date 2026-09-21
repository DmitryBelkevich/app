export default class CookieSaver {
  getByName(name) {
    const obj = document.cookie.split("; ").reduce((acc, current) => {
        const [key, value] = current.split('=');
        acc[key] = value || "";
      return acc;
    }, {});

    if (JSON.stringify(obj) === JSON.stringify({"": ''}))
      return null;

    return obj;
  }
  
  save(obj) {
    document.cookie = obj.name + "=" + obj.value;
  }
}

export default class CssLoader {
  load(url) {
    const link = document.createElement("link");
    
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = url;
    
    document.head.appendChild(link);
  }
}

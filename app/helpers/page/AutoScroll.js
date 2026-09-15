export default class AutoScroll {
  #speed = 15;//1 slow, 10 normal, 100 fast.
  #animationFrameId;

  #step = () => {
    window.scrollBy(0, 1);
    
    if ((window.innerHeight + window.scrollY) < document.body.offsetHeight) {
      setTimeout(() => {
        this.#animationFrameId = requestAnimationFrame(this.#step);
      }, 1000 / this.#speed);
    }
  }
  
  run() {
    this.#animationFrameId = requestAnimationFrame(this.#step);
  }
  
  stop() {
    cancelAnimationFrame(this.#animationFrameId);
  }
}

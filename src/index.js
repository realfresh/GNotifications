module.exports = {

  options: {
    position: 'top',
  },

  ready: false,

  init() {
    this.container = document.createElement("div");
    this.container.id = "gn-container";
    this.container.className = `gn-container ${this.options.position || 'top'}`;
    document.getElementsByTagName('body')[0].appendChild(this.container);
    this.ready = true;
  },

  add({ type="", message, duration=3000, center=true }) {
    if (!this.ready)
      this.init();

    const div = this.messageElement(type, message, center);
    this.container.appendChild(div);
    setTimeout(() => {
      div.classList.add('visible');
      setTimeout(() => {
        this.removeMessage(div, type);
      }, duration)
    }, 100);
  },

  // HELPERS
  clear() {
    this.container.innerHTML = ""
  },
  messageElement(type="", message="", center) {
    const div = document.createElement("div");
    const close = document.createElement("div");
    close.className = 'close';
    close.addEventListener('click', (evt) => {
      this.removeMessage(div, type);
    });
    div.className = `gn-notification ${type} ${center ? 'text-center' : ''} shadow-1`;
    div.innerHTML = message;
    div.appendChild(close);
    return div
  },
  removeMessage(div, type) {
    if (div) {
      div.classList.remove('visible');
      setTimeout(() => {
        if (div.parentNode) {
          div.parentNode.removeChild(div);
        }
      }, 350);
    }
  },

};
import CssLoader from '../loaders/CssLoader.js';

export default class SongView {
  constructor() {
    this.cssLoader = new CssLoader();

    // *** components ***
    
    // reset css
    this.cssLoader.load("./app/views/css/reset.css");
    
    // Title
    this.cssLoader.load("./app/views/css/song/title.css");
    this.title = document.createElement("div");
    this.title.id = "title";

    this.title_h = document.createElement('h1');
    this.band_h = document.createElement('h2');
    
    this.title.append(this.title_h, this.band_h);
    
    // Tab 1
    this.tab_text = document.createElement("button");
    this.tab_text.id = "tab_text";
    this.tab_text.classList.add("tab");
    this.tab_text.textContent = "📝 Text & Chords";
    
    // Tab 2
    this.tab_score = document.createElement("button");
    this.tab_score.id = "tab_score";
    this.tab_score.classList.add("tab");
    this.tab_score.textContent = "🎵 Scores";
    
    // Tab 3
    this.tab_playback = document.createElement("button");
    this.tab_playback.id = "tab_playback";
    this.tab_playback.classList.add("tab");
    this.tab_playback.textContent = "🎧 Playbacks";
    
    // Tabs
    this.cssLoader.load("./app/views/css/song/tabs.css");
    this.tabs = document.createElement("div");
    this.tabs.id = "tabs";
    
    this.tabs.append(this.tab_text, this.tab_score, this.tab_playback);

    // *** display ***
    
    this.cssLoader.load("./app/views/css/song/display.css");
    this.display = document.createElement("div");
    this.display.id = "display";

    // 1. key-signature
    this.key_e = document.createElement("div");
    this.key_e.id = "key";

    // 2. transposer
    this.transpose_down = document.createElement("button");
    this.transpose_down.id = "transpose_down";
    this.transpose_down.textContent = "🔽";

    this.transpose_up = document.createElement("button");
    this.transpose_up.id = "transpose_up";
    this.transpose_up.textContent = "🔼";

    // 3. auto-scroll
    this.autoscroll_e = document.createElement("button");
    this.autoscroll_e.id = "autoscroll";
    this.autoscroll_e.textContent = "⏬";

    // fill display
    this.display.append(this.key_e, this.transpose_down, this.transpose_up, this.autoscroll_e);
    
    // *** settings ***
    
    this.cssLoader.load("./app/views/css/song/settings.css");
    this.settings = document.createElement("div");
    this.settings.id = "settings";

    // dropdown
    this.dropdown = document.createElement("select");
    this.dropdown.id = "instruments";

    // fill settings
    this.settings.append(this.dropdown);
    
    // *** Tuning ***
    this.cssLoader.load("./app/views/css/song/tuning.css");
    this.tuning = document.createElement("div");
    this.tuning.id = "tuning";
    
    // *** Text ***
    this.cssLoader.load("./app/views/css/song/text.css");
    this.text = document.createElement("div");
    this.text.id = "text";
    
    // *** Footer ***
    this.cssLoader.load("./app/views/css/song/footer.css");
    this.footer = document.createElement("div");
    this.footer.id = "footer";
    this.footer.textContent = "Copyright © Dmitry Belkevich";
    
    // *** fill body ***
    document.body.append(
      this.title,
      this.tabs,
      this.display,
      this.settings,
      this.tuning,
      this.text,
      this.footer
    );
  }

  // *** render ***

  // *** head ***

  setPageTitle(title) {
    document.title = title;
  }

  // *** title ***

  setTitle(title) {
    this.title_h.textContent = title;
  }

  setBand(band) {
    this.band_h.textContent = band;
  }

  // *** display ***

  // 1. key-signature

  setKey(key) {
    this.key_e.textContent = key;
  }

  // 2. transposer

  // 3. autoscroll

  // *** settings ***

  // 1. dropdown

  addOption(index, title) {
    const option = document.createElement("option");

    option.value = index;
    option.textContent = title;
    
    this.dropdown.append(option);
  }

  selectOption(index) {
    this.dropdown.selectedIndex = index;
  }

  getValue() {
    return this.dropdown.value;
  }

  // *** tuning ***

  addTuning(tuning, isStandard) {
    const tuning_e = document.createElement("div");

    if (isStandard)
      tuning_e.classList.add("standard");
    else
      tuning_e.classList.add("non-standard");
    
    tuning_e.textContent = "[" + tuning + "]";
    
    this.tuning.append(tuning_e);
  }

  addCapo(capo) {
    const capo_e = document.createElement("div");
    capo_e.classList.add("capo");
    capo_e.textContent = "Capo: +" + capo;

    this.tuning.append(capo_e);
  }

  // *** text ***

  setText(text) {
    this.text.innerHTML = text;
  }

  // *** binding: view -> controller ***

  // *** tabs ***
  
  bindTextTab(handler) {
    this.tab_text.addEventListener("click", () => {
      handler();
    });
  }

  bindScoreTab(handler) {
    this.tab_score.addEventListener("click", () => {
      handler();
    });
  }

  bindPlaybackTab(handler) {
    this.tab_playback.addEventListener("click", () => {
      handler();
    });
  }

  // *** display ***

  // 1. key-signature

  // 2. transposer

  bindTransposeDown(handler) {
    this.transpose_down.addEventListener("click", () => {
      handler();
    });
  }
  
  bindTransposeUp(handler) {
    this.transpose_up.addEventListener("click", () => {
      handler();
    });
  }

  // 3. auto-scroll
  
  bindAutoScroll(handler) {
    this.autoscroll_e.addEventListener("click", () => {
      handler();
    });
  }

  // *** settings ***

  // 1. dropdown

  bindDropdown(handler) {
    this.dropdown.addEventListener("change", (event) => {
      handler(event);
    });
  }
}

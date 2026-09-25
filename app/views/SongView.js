import CssLoader from '../loaders/CssLoader.js';

export default class SongView {
  constructor() {
    this.cssLoader = new CssLoader();

    // reset css
    this.cssLoader.load("./app/views/css/reset.css");

    // *** components ***

    // Navigator
    this.cssLoader.load("./app/views/css/song/nav.css");
    this.nav = document.createElement("nav");

    this.list_button = document.createElement("button");
    this.list_button.textContent = "list";

    // fill container
    this.nav.append(this.list_button);
    
    // Title
    this.cssLoader.load("./app/views/css/song/title.css");
    this.title = document.createElement("div");
    this.title.id = "title";

    this.title_e = document.createElement('div');
    this.title_e.classList.add("title");
    
    this.band_e = document.createElement('div');
    this.band_e.classList.add("band");

    // fill container
    this.title.append(this.title_e, this.band_e);
    
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

    // fill container
    this.tabs.append(this.tab_text, this.tab_score, this.tab_playback);

    // *** settings ***
    
    this.cssLoader.load("./app/views/css/song/settings.css");
    this.settings = document.createElement("div");
    this.settings.id = "settings";

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

    // fill settings
    this.settings.append(this.key_e, this.transpose_down, this.transpose_up, this.autoscroll_e);
    
    // *** instrument ***
    
    this.cssLoader.load("./app/views/css/song/instrument.css");
    this.instrument = document.createElement("div");
    this.instrument.id = "instrument";

    // 1. dropdown
    this.dropdown = document.createElement("select");

    // 2. tuning
    this.tuning = document.createElement("div");
    this.tuning.id = "tuning";

    // 3. capo

    // fill instrument
    this.instrument.append(this.dropdown, this.tuning);
    
    // *** Text ***
    this.cssLoader.load("./app/views/css/song/text.css");
    this.text = document.createElement("div");
    this.text.id = "text";
    
    // *** Footer ***
    this.cssLoader.load("./app/views/css/song/footer.css");
    this.footer = document.createElement("div");
    this.footer.id = "footer";
    this.footer.textContent = "Copyright © Dmitry Belkevich";
    
    // *** fill container ***
    document.body.append(
      this.nav,
      this.title,
      this.tabs,
      this.settings,
      this.instrument,
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
    this.title_e.textContent = title;
  }

  setBand(band) {
    this.band_e.textContent = band;
  }

  // *** settings ***

  // 1. key-signature

  setKey(key) {
    this.key_e.textContent = key;
  }

  // 2. transposer

  // 3. autoscroll

  // *** instrument ***

  // 1. dropdown

  addOption(index, title, color) {
    const option = document.createElement("option");

    option.value = index;
    
    const colors = {
      null: "⚪️",
      undefined: "⚪️",
      
      "grey": "⚪️",
      "red": "🔴",
      "yellow": "🟡",
      "green": "🟢",
    };
    
    option.textContent = colors[color] + " " + title;
    
    this.dropdown.append(option);
  }

  selectOption(index) {
    this.dropdown.selectedIndex = index;
  }

  getValue() {
    return this.dropdown.value;
  }

  // 2. tuning

  clearTuning() {
    this.tuning.replaceChildren();
  }

  addString(note, isStandard) {
    const div = document.createElement("div");

    const standards = {
      true: "standard",
      false: "non-standard",
    }

    div.classList.add("string");
    div.classList.add(standards[isStandard]);

    div.textContent = note;

    this.tuning.append(div);
  }

  // 3. capo

  addCapo(capo) {
    const div = document.createElement("div");
    div.classList.add("capo");
    div.textContent = "Capo: +" + capo;

    this.tuning.append(div);
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

  // *** settings ***

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

  // *** instrument ***

  // 1. dropdown

  bindDropdown(handler) {
    this.dropdown.addEventListener("change", (event) => {
      handler(event);
    });
  }
}

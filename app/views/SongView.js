import CssLoader from '../loaders/CssLoader.js';

export default class SongView {
  song;
  instrument;
  
  constructor() {
    this.song = new Song();
    this.instrument = new Instrument();
    
    this.cssLoader = new CssLoader();

    // reset css
    this.cssLoader.load("./app/views/css/reset.css");

    // *** components ***

    // navigator
    this.cssLoader.load("./app/views/css/song/nav.css");
    this.nav = document.createElement("nav");

    // 1. list
    this.list_button = document.createElement("button");
    this.list_button.textContent = "◀️";

    // 2. auto-scroll
    this.autoscroll_e = document.createElement("button");
    this.autoscroll_e.id = "autoscroll";
    this.autoscroll_e.textContent = "⏬";

    // fill container
    this.nav.append(this.list_button, this.autoscroll_e);
    
    // title
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

    // *** settings-song ***
    
    // *** instrument ***

    // *** tuning ***

    this.cssLoader.load("./app/views/css/song/tuning.css");
    this.tuning = document.createElement("div");
    this.tuning.id = "tuning";

    // 3. capo
    
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
      this.song.container,
      this.instrument.container,
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

  // 1. list

  // 2. autoscroll

  // *** title ***

  setTitle(title) {
    this.title_e.textContent = title;
  }

  setBand(band) {
    this.band_e.textContent = band;
  }

  // *** settings-song ***

  // *** instrument ***

  // *** tuning ***

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

  // *** nav ***

  // 1. list

  bindListButton(handler) {
    this.list_button.addEventListener("click", () => {
      handler();
    });
  }

  // 2. auto-scroll
  
  bindAutoScroll(handler) {
    this.autoscroll_e.addEventListener("click", () => {
      handler();
    });
  }

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

  // *** settings-song ***

  // *** instrument ***
}

class Song {
  #container;
  
  key;
  transposition;
  transpose_down;
  transpose_up;
  
  constructor() {
    this.cssLoader.load("./app/views/css/song/settings_song.css");
    
    // container
    this.#container = document.createElement("div");
    this.#container.id = "settings-song";

    // 1. key-signature
    this.key = document.createElement("div");
    this.key.id = "key-song";

    // 2. transposition
    this.transposition = document.createElement("div");

    // 3. transpose down
    this.transpose_down = document.createElement("button");
    this.transpose_down.textContent = "🔽";

    // 4. transpose up
    this.transpose_up = document.createElement("button");
    this.transpose_up.textContent = "🔼";

    // fill settings
    this.#container.append(
      this.key, this.transposition, this.transpose_down, this.transpose_up,
    );
  }

  get container() {
    return this.#container;
  }

  // 1. key-signature

  setKey(key, isTransposed) {
    const transpositions = {
      true: "transposed",
      false: "original",
    };
    
    this.key.textContent = key;

    this.key.classList.remove(transpositions[true]);
    this.key.classList.remove(transpositions[false]);
    
    this.key.classList.add(transpositions[isTransposed]);
  }

  // 2. transposition

  setTransposition(count) {
    this.transposition.textContent = count;
  }

  // 3. transpose down

  // 4. transpose up

  // *** binding: view -> controller ***

  // 1. key-signature

  // 2. transpose down

  bindTransposeDown(handler) {
    this.transpose_down.addEventListener("click", () => {
      handler();
    });
  }

  // 3. transpose up
  
  bindTransposeUp(handler) {
    this.transpose_up.addEventListener("click", () => {
      handler();
    });
  }
}

class Instrument {
  #container;
  
  dropdown;
  key;
  transpose_down;
  transpose_up;
  
  constructor() {
    this.cssLoader.load("./app/views/css/song/instrument.css");

    // container
    this.#container = document.createElement("div");
    this.#container.id = "instrument";

    // 1. dropdown
    this.dropdown = document.createElement("select");

    // 2. key-signature
    this.key = document.createElement("div");
    this.key.id = "key-instrument";

    // 3. transpose down
    this.transpose_down = document.createElement("button");
    this.transpose_down.textContent = "🔽";

    // 4. transpose up
    this.transpose_up = document.createElement("button");
    this.transpose_up.textContent = "🔼";

    // fill container
    this.#container.append(
      this.dropdown,
      this.key, this.transpose_down, this.transpose_up,
    );
  }

  get container() {
    return this.#container;
  }
  
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

  setOption(index) {
    this.dropdown.selectedIndex = index;
  }

  getValue() {
    return this.dropdown.value;
  }

  // 2. key-signature (instrument)

  setKey(key) {
    this.key.textContent = key;
  }

  // 3. transpose down (instrument)

  // 4. transpose up (instrument)

  // *** binding: view -> controller ***

  // 1. dropdown

  bindDropdown(handler) {
    this.dropdown.addEventListener("change", (event) => {
      handler(event);
    });
  }

  // 2. key-signature (instrument)

  // 3. transpose down (instrument)

  bindTransposeDown(handler) {
    this.transpose_down.addEventListener("click", () => {
      handler();
    });
  }

  // 4. transpose up (instrument)

  bindTransposeUp(handler) {
    this.transpose_up.addEventListener("click", () => {
      handler();
    });
  }
}

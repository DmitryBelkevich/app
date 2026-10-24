import CssLoader from '../loaders/CssLoader.js';

export default class SongView {
  constructor() {
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
    
    this.cssLoader.load("./app/views/css/song/settings_song.css");
    this.settings_song = document.createElement("div");
    this.settings_song.id = "settings-song";

    // 1. key-signature (song)
    this.key_song = document.createElement("div");
    this.key_song.id = "key-song";

    // 2. transposition (song)
    this.transposition_song = document.createElement("div");

    // 3. transpose down (song)
    this.transpose_down_song = document.createElement("button");
    this.transpose_down_song.textContent = "🔽";

    // 4. transpose up (song)
    this.transpose_up_song = document.createElement("button");
    this.transpose_up_song.textContent = "🔼";

    // fill settings
    this.settings_song.append(
      this.key_song, this.transposition_song, this.transpose_down_song, this.transpose_up_song,
    );
    
    // *** instrument ***
    
    this.cssLoader.load("./app/views/css/song/instrument.css");
    this.instrument = document.createElement("div");
    this.instrument.id = "instrument";

    // 1. dropdown
    this.dropdown = document.createElement("select");

    // 2. key-signature (instrument)
    this.key_instrument = document.createElement("div");
    this.key_instrument.id = "key-instrument";

    // 3. transpose down (instrument)
    this.transpose_down_instrument = document.createElement("button");
    this.transpose_down_instrument.textContent = "🔽";

    // 4. transpose up (instrument)
    this.transpose_up_instrument = document.createElement("button");
    this.transpose_up_instrument.textContent = "🔼";

    // 3. capo

    // fill instrument
    this.instrument.append(
      this.dropdown,
      this.key_instrument, this.transpose_down_instrument, this.transpose_up_instrument,
    );

    // *** tuning ***

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
    
    // *** fill container ***
    document.body.append(
      this.nav,
      this.title,
      this.tabs,
      this.settings_song,
      this.instrument,
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

  // 1. key-signature (song)

  setKeySong(key, isTransposed) {
    const transpositions = {
      true: "transposed",
      false: "original",
    };
    
    this.key_song.textContent = key;

    this.key_song.classList.remove(transpositions[true]);
    this.key_song.classList.remove(transpositions[false]);
    
    this.key_song.classList.add(transpositions[isTransposed]);
  }

  // 2. transposition_song

  setTranspositionSong(count) {
    this.transposition_song.textContent = count;
  }

  // 3. transpose down (song)

  // 4. transpose up (song)

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

  setOption(index) {
    this.dropdown.selectedIndex = index;
  }

  getValue() {
    return this.dropdown.value;
  }

  // 2. key-signature (instrument)

  setKeyInstrument(key) {
    this.key_instrument.textContent = key;
  }

  // 3. transpose down (instrument)

  // 4. transpose up (instrument)

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

  // 1. key-signature (song)

  // 2. transpose down (song)

  bindTransposeDownSong(handler) {
    this.transpose_down_song.addEventListener("click", () => {
      handler();
    });
  }

  // 3. transpose up (song)
  
  bindTransposeUpSong(handler) {
    this.transpose_up_song.addEventListener("click", () => {
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

  // 2. key-signature (instrument)

  // 3. transpose down (instrument)

  bindTransposeDownInstrument(handler) {
    this.transpose_down_instrument.addEventListener("click", () => {
      handler();
    });
  }

  // 4. transpose up (instrument)

  bindTransposeUpInstrument(handler) {
    this.transpose_up_instrument.addEventListener("click", () => {
      handler();
    });
  }
}

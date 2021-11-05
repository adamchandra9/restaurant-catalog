/* eslint linebreak-style: ["error", "windows"] */
/* eslint no-underscore-dangle: ["error", { "allow": ["_button", "_drawer", "_content", "_hero",
"_initialAppShell"] }] */

import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({
    button, drawer, content, hero,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._hero = hero;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      hero: this._hero,
    });
  }
}

export default App;

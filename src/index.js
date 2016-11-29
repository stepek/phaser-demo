/* globals window */
import 'pixi';
import 'p2';
import Phaser from 'phaser';

import GameState from './states/GameState';
import BootState from './states/BootState';
import SplashState from './states/SplashState';
import MainMenuState from './states/MainMenuState';

class Game extends Phaser.Game {
  constructor() {
    super(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'paint-canvas');
    this.state.add('Boot', BootState, false);
    this.state.add('Splash', SplashState, false);
    this.state.add('MainMenu', MainMenuState, false);
    this.state.add('Game', GameState, false);

    this.state.start('Boot');
  }
}

window.game = new Game();

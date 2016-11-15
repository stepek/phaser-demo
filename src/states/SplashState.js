import Phaser from 'phaser';

export default class BootState extends Phaser.State {
  init() {
    console.log('init Splash');
  }

  preload() {
    console.log('preload');
  }

  create() {
    console.log('create');
    this.state.start('Game');
  }
}

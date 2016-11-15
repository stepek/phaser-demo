import Phaser from 'phaser';

export default class GameState extends Phaser.State {
  init() {
    console.log('init Game');
  }

  preload() {
    console.log('preload');
  }

  create() {
    console.log('create');
  }

  render() {}
}

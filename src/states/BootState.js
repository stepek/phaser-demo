import Phaser from 'phaser';

export default class BootState extends Phaser.State {
  init() {
    console.log('init Boot');
  }

  preload() {
    this.stage.backgroundColor = '#D6D6FF';
    this.load.image('loading-background', 'img/loading/background.png');
    this.load.image('loading-progress', 'img/loading/progress.png');
  }

  create() {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    this.state.start('Splash');
  }
}

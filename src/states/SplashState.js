import Phaser from 'phaser';
import resources from './../resources';

export default class BootState extends Phaser.State {
  preload() {
    const {width, height} = this.world;
    const loadProgress = this.add.sprite((width - 540) * 0.5, (height + 170) * 0.5, 'loading-progress');

    this.load.setPreloadSprite(loadProgress);
    this.preloadResources();
  }

  preloadResources() {
    for (let method in resources) {
      resources[method].forEach(args => {
        const loader = this.load[method];
        loader && loader.apply(this.load, args); // eslint-disable-line
      });
    }
  }

  create() {
    this.state.start('Game');
  }
}

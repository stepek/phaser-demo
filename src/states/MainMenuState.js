import Phaser from 'phaser';

export default class MainMenuState extends Phaser.State {
  create() {
    const {width, height} = this.world;

    this.title = this.add.sprite(width * 0.5, (height - 100) * 0.5, 'title');
    this.title.anchor.set(0.5);

    this.buttonAudio = this.add.button(width - 25, 25, 'button-audio', () => {console.log('Audio');}, this, 1, 0, 2);
    this.buttonAudio.anchor.set(1,0);

    this.buttonStart = this.add.button(width - 20, height - 20, 'button-start', this.clickStart, this, 1, 0, 2);
    this.buttonStart.anchor.set(1);

    this.buttonHelp = this.add.button(20, height - 20, 'button-help', this.clickHelp, this, 1, 0, 2);
    this.buttonHelp.anchor.set(0,1);

    this.buttonStart.x = width + this.buttonStart.width + 20;
    this.add.tween(this.buttonStart).to({x: width - 20}, 500, Phaser.Easing.Exponential.Out, true);
    this.buttonAudio.y = -this.buttonAudio.height - 20;
    this.add.tween(this.buttonAudio).to({y: 20}, 500, Phaser.Easing.Exponential.Out, true);
    this.buttonHelp.y = height + this.buttonHelp.height + 20;
    this.add.tween(this.buttonHelp).to({y: height - 20}, 500, Phaser.Easing.Exponential.Out, true);

    this.camera.flash(0x000000, 500, false);
  }

  clickStart = () => {
    this.camera.onFadeComplete.add(() => {
      this.game.state.start('Story');
    }, this);
    this.camera.fade(0x000000, 200, false);
  };

  clickHelp = () => {
    this.camera.onFadeComplete.add(() => {
      this.game.state.start('Help');
    }, this);
    this.camera.fade(0x000000, 200, false);
  };
}

import Phaser from 'phaser';

export default class HelpState extends Phaser.State {
  create() {
    const {height} = this.world;

    this.text = this.add.text(100, 75, 'Help screen', {font: '32px Arial', fill: '#000'});
    this.buttonBack = this.add.button(20, height - 20, 'button-back', this.clickBack, this, 1, 0, 2);
    this.buttonBack.anchor.set(0, 1);

    this.buttonBack.y = height + this.buttonBack.height + 20;
    this.add.tween(this.buttonBack).to({y: height - 20}, 500, Phaser.Easing.Exponential.Out, true);

    this.camera.flash(0x000000, 500, false);
  }

  clickBack = () => {
    this.camera.onFadeComplete.add(() => {
      this.game.state.start('MainMenu');
    }, this);
    this.camera.fade(0x000000, 200, false);
  };
}

import Phaser from 'phaser';

export default class StoryState extends Phaser.State {
  create() {
    const {width, height} = this.world;

    this.textStory = this.add.text(100, 75, 'Story screen', {font: '32px Arial', fill: '#000'});
    this.buttonContinue = this.add.button(
      width - 20, height - 20, 'button-continue', this.clickContinue, this, 1, 0, 2
    );

    this.buttonContinue.anchor.set(1,1);
    this.buttonContinue.x = width + this.buttonContinue.width + 20;

    this.add.tween(this.buttonContinue).to({x: width - 20}, 500, Phaser.Easing.Exponential.Out, true);

    this.camera.flash(0x000000, 500, false);
  }

  clickContinue = () => {
    this.camera.onFadeComplete.add(() => {
      this.game.state.start('Game');
    }, this);
    this.camera.fade(0x000000, 200, false);
  };
}

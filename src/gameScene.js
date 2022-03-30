import Phaser from 'phaser';

class GameScene extends Phaser.Scene {
	constructor() {
		super('GameScene')
	}

	preload() {}

	create() {
		this.add.text(100, 100, 'Hello World');
	}

	update() {}
}

export default GameScene;

import Phaser from 'phaser';
import { config } from './gameConfig';

window.addEventListener('load', () => {
  console.log('game loaded');
  const game = new Phaser.Game(config);
});

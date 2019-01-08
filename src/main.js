import 'phaser';
import GameScene from './scenes/GameScene';
import Monster from './scenes/Monster';

const config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.WEBGL,
    pixelArt: true,
    roundPixels: true,
    parent: 'content',
    width: 1260,
    height: 560,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: [
        GameScene,
        //Player,
        // Monster
    ]
};

const game = new Phaser.Game(config);
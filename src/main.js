import 'phaser';
import GameScene from './scenes/GameScene';

let config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.AUTO,
    parent: 'app',
    title: 'Shinobi x WIP Camp',
    width: 960,
    height: 960,
    zoom : 1, 
    resolution: window.devicePixelRatio || 1,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [

        GameScene
    ]
};

var game = new Phaser.Game(config);


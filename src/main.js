import 'phaser';
import GameScene from './scenes/GameScene';

let config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.AUTO,
    parent: 'app',
    width: 800,
    height: 600,
    zoom : 1,
    backgroundcolor: '#88BBDD',   
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



const game = new Phaser.Game(config);
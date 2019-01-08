import ControlPc from './Player/ControlPc'
import Map from './Map/Camera Player'
let player;
let map;
class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('player','../../images/iconalive.png')
        this.load.image('map','../../images/Background_long.jpg')
    }

    create() {

        // map = this.physics.add.image(0,0,'map').setScale(2,2).setOrigin(0).setScrollFactor(1);
        map = new Map({ scene: this,});
        map.create();
        player = new ControlPc({ scene: this,});
        player.create();
    }

    update() {
        player.update();
        player.updateDirect ()

    }
}

export default GameScene;

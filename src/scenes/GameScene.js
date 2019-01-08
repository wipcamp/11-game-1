import ControlPc from './Player/ControlPc'
let player;
class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('player','../../images/iconalive.png')
    }

    create() {
        player = new ControlPc({ scene: this,});
        player.create();
    }

    update() {
        player.update();

    }
}

export default GameScene;

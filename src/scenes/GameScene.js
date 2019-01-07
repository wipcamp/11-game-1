import move_mobile from './move_mobile'

let mobile
class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('player', '../../images/player.png');
        this.load.image('bg', '../../images/bg.jpg');
        this.load.image('button_control', '../../images/button_control.png');
    }

    create() {
        mobile = new move_mobile({ scene: this })
        mobile.create()



    }

    update() {
        mobile.update()
    }
}

export default GameScene;

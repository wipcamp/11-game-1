import move_mobile from './move_mobile'
import responsive from './responsive'

let mobile
let respon

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('player', '../../images/player.png');
        this.load.image('bg', '../../images/bg.jpg');
        
        this.load.image('up', './../../images/button_up.png');
        this.load.image('down', '../../images/button_down.png');
        this.load.image('left', '../../images/button_left.png');
        this.load.image('right', '../../images/button_right.png');

        this.load.image('up_left', '../../images/button_up_left.png');
        this.load.image('up_right', '../../images/button_up_right.png');
        
        this.load.image('down_left', '../../images/button_down_left.png');
        this.load.image('down_right', '../../images/button_down_right.png');
        
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

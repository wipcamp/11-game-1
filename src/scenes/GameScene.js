import ControlPc from './Player/ControlPc'
import Map from './Map/Camera Player'
import SafeZone from './Map/SafeZone'
let player;
let map;
let zone
let gameover = false;
class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('player', '../../images/iconalive.png')
        this.load.image('map', '../../images/Background_long.jpg')
        this.load.image('safezone', '../../images/zone.jpg')
    }

    create() {

        map = new Map({ scene: this, });
        map.create();
        zone = new SafeZone({ scene: this, });
        zone.create();
        player = new ControlPc({ scene: this, });
        player.create();
        this.physics.add.collider(player.getPlayer(), zone.getSafeZone());
        
        
    }

    update() {
        player.update();
        // player.updateDirect();
        

    }

}

export default GameScene;

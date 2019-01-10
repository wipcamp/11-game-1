import ControlPc from './Player/ControlPc'
import Map from './Map/Camera Player'
import SafeZone from './Map/SafeZone'
import ChangeZone from './Map/ChangeZone'
let player;
let map;
let zone
let doors
let colliderDoor
let eiei=false
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
        this.load.image('door','../../images/door.png')
        // this.load.spritesheet('door','../../images/door.png',{frameWidth: 68, frameHeight: 68})
    }

    create() {

        map = new Map({ scene: this, });
        map.create();
        zone = new SafeZone({ scene: this, });
        zone.create();
        doors = new ChangeZone({ scene: this, });
        doors.create();
        player = new ControlPc({ scene: this, });
        player.create();
        this.physics.add.collider(player.getPlayer(), zone.getSafeZone());
        // this.physics.add.collider(player.getPlayer(), door.getDoor());
        this.keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
        this.keyB = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B)
        // console.log(doors)
        colliderDoor  = this.physics.add.collider(player.getPlayer(), doors.getDoor(),this.remove,null,this);
    }    

    update() {
        player.update();
        
    }
    
    remove(player,door){
        if(this.keyC.isDown){   
            door.disableBody(true,true)
        }
   }
}

export default GameScene;

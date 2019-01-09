import ControlPc from './Player/ControlPc'
import MapDesign from './Map/MapDesign'
import Option from './Data/Option'
import Monster from './Monster'

let player, monster, bullets, mapDesign, option;


class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('player', '../../images/player.png')
        this.load.image('monster', '../../images/monster.png');
        this.load.image('platform', '../../images/platform.png');
        this.load.image('bullet', '../../images/bullet.png');
        this.load.image('heart', '../../images/heart.png');
        this.load.image('part', '../../images/part.png');
        this.load.image('bg', '../../images/bg.png');
        this.load.image('flower', '../../images/flower.png');
        this.load.image('wall', '../../images/wall.png');
        this.load.image('safezone', '../../images/safezone.png');
        this.load.image('butOption', '../../images/button/butOption.png');
        this.load.image('butSound', '../../images/button/butSound.png');
    }

    create() {
        mapDesign = new MapDesign({ scene: this, });
        mapDesign.create();        
        player = new ControlPc({ scene: this, });
        player.create();
        monster = new Monster({ scene: this, });
        monster.create();        
        option = new Option({ scene: this, });
        option.create();        

        this.physics.add.collider(monster.getMonster(), player.getPlayer(), () => {
            player.getPlayer().setTint(0xff0000);
        });
        this.physics.add.collider(monster.getMonster(), player.getBullet(), collect);
        this.physics.add.collider(monster.getMonster(), monster.getPlatforms());
        this.physics.add.collider(monster.getMonster(), mapDesign.getPart());
        this.physics.add.collider(monster.getMonster(), mapDesign.getSafeZone());
        this.physics.add.collider(player.getPlayer(), monster.getPlatforms());

       
    }
    
    update() {
        player.update();
        monster.update();
        mapDesign.update();

    }
}

function collect(monster, bullets) {
    bullets.disableBody(true, true);
}

export default GameScene;

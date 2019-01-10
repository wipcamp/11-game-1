import ControlPc from './Player/ControlPc'
import MapDesign from './Map/MapDesign'
import Option from './Data/Option'
import Value from './HP/Value'
import Monster from './Monster'

let player, monster, bullets, mapDesign, option, hp;


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
        this.load.image('halfheart', '../../images/halfheart.png');
        this.load.image('part', '../../images/part.png');
        this.load.image('part2', '../../images/part2.png');
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
        hp = new Value({ scene: this, });
        hp.create();        

        this.physics.add.collider(monster.getMonster(), player.getPlayer(), () => {
            player.getPlayer().setTint(0xff0000);
        });
        this.physics.add.collider(monster.getMonster(), player.getBullet(), collect);
        this.physics.add.collider(monster.getMonster(), mapDesign.getPart());
        this.physics.add.collider(monster.getMonster(), mapDesign.getPart2());
        this.physics.add.collider(monster.getMonster(), mapDesign.getPart3());
        this.physics.add.collider(monster.getMonster(), mapDesign.getPart4());
        this.physics.add.collider(monster.getMonster(), mapDesign.getSafeZone());
        this.physics.add.collider(monster.getMonster(), mapDesign.getWall());
        this.physics.add.collider(monster.getMonster(), mapDesign.getFlower());
        this.physics.add.collider(monster.getMonster(), mapDesign.getFlower2());

        this.physics.add.collider(player.getPlayer(), mapDesign.getPart());
        this.physics.add.collider(player.getPlayer(), mapDesign.getPart2());
        this.physics.add.collider(player.getPlayer(), mapDesign.getPart3());
        this.physics.add.collider(player.getPlayer(), mapDesign.getPart4());
        this.physics.add.collider(player.getPlayer(), mapDesign.getWall());
        this.physics.add.collider(player.getPlayer(), mapDesign.getFlower());
        this.physics.add.collider(player.getPlayer(), mapDesign.getFlower2());
       
    }
    
    update() {
        player.update();
        monster.update();
        mapDesign.update();
        hp.update();

    }
}

function collect(monster, bullets) {
    bullets.disableBody(true, true);
}

export default GameScene;

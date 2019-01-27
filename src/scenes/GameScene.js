import ControlPc from './Player/ControlPc'
import MapDesign from './Map/MapDesign'
import Option from './Data/Option'
import Drop from './Data/Drop'
import HP from './Value/HP'
import EXP from './Value/EXP'
import Monster from './Monster'
import Boss from './Boss'

let player, monster, mapDesign, option, hp, boss, drop, exp;


class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('player', '../../images/player.png')
        this.load.image('weapon', '../../images/weapon.png');
        this.load.image('bullet', '../../images/bullet.png');

        this.load.image('monster', '../../images/monster.png');
        this.load.image('boss', '../../images/boss.png');
        this.load.image('weaponBoss', '../../images/weaponBoss.png');

        this.load.image('platform', '../../images/platform.png');
        this.load.image('heart', '../../images/heart.png');
        this.load.image('halfheart', '../../images/halfheart.png');
        this.load.image('part', '../../images/part.png');
        this.load.image('part2', '../../images/part2.png');
        this.load.image('flower', '../../images/flower.png');
        this.load.image('wall', '../../images/wall.png');
        this.load.image('safezone', '../../images/safezone.png');

        this.load.image('bg', '../../images/bg.png');

        this.load.image('dropExp', '../../images/Item/exp.png');
        this.load.image('dropGold', '../../images/Item/gold.png');

        this.load.image('butOption', '../../images/button/butOption.png');
        this.load.image('butSound', '../../images/button/butSound.png');
    }

    create() {
        mapDesign = new MapDesign({ scene: this, });
        mapDesign.create();        
        boss = new Boss({ scene: this, });
        boss.create();        
        monster = new Monster({ scene: this, });
        monster.create();        
        option = new Option({ scene: this, });
        option.create();        
        hp = new HP({ scene: this, });
        hp.create();        
        drop = new Drop({ scene: this, });
        drop.create();        
        exp = new EXP({ scene: this, });
        exp.create();        
        player = new ControlPc({ scene: this, });
        player.create();
        console.log(drop.getDropExp())
        this.physics.add.collider(monster.getMonster(), player.getPlayer(), hp.checkHeart);
        this.physics.add.collider(monster.getMonster(), player.getBullet(), hp.checkHp, drop.dropExp);
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

        this.physics.add.collider(boss.getBoss(), player.getPlayer(), hp.checkHeart);
        this.physics.add.collider(boss.getWeaponBoss(), player.getPlayer(), hp.checkHeart);
        this.physics.add.collider(boss.getBoss(), monster.getMonster());
        this.physics.add.collider(boss.getBoss(), player.getWeapon(), hp.checkHpBoss, drop.GetRandom);

        //this.physics.add.overlap(player.getBullet(), monster.getMonster(), monster.collectMons);
        this.physics.add.collider(player.getPlayer(), drop.getDropExp(), exp.expMons);
        
    }
    
    update() {
        player.update();
        monster.update();
        mapDesign.update();
        hp.update();
        boss.update();
        drop.update();
        exp.update();
    }
}


export default GameScene;

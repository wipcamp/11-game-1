import Monster from './Monster'
import move_mobile from '../Control/move_mobile'
import ControlPc from '../Control/ControlPc'
import responsive from './../core/responsive'
import Map from '../Map/Map'
import MapDesign from '../Map/MapDesign'
import Boss from '../Enemy/Boss'
import Player from '../Player/Player'
import HP from '../Value/HP'
import EXP from '../Value/EXP'
import Option from './Data/Option'
import Drop from './Data/Drop'

let map
let mobile
let respon
let player
let boss
let hp
let exp
let control
let monster
let option
let drop
let mapDesign


class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });

    }

    preload() {
        this.load.image('bg', '../../images/bg.png');

        this.load.image('up', './../../images/button_up.png');
        this.load.image('down', '../../images/button_down.png');
        this.load.image('left', '../../images/button_left.png');
        this.load.image('right', '../../images/button_right.png');

        this.load.image('up_left', '../../images/button_up_left.png');
        this.load.image('up_right', '../../images/button_up_right.png');

        this.load.image('down_left', '../../images/button_down_left.png');
        this.load.image('down_right', '../../images/button_down_right.png');

        this.load.image('player', '../../images/player.png')
        this.load.image('attack', '../../images/button_atk.png')

        this.load.image('reticle', '../../images/target.png')
        this.load.image('bullet', '../../images/bomb.png')

        this.load.image('boss', '../../images/boss.gif')

        this.load.image('heart', '../../images/heart.png')
        this.load.image('halfheart', '../../images/halfheart.png')

        this.load.image('over', '../../images/game_over.png')

        this.load.audio('bgm', '../sound/bgm.wav');
        this.load.audio('throw', '../sound/throw.wav');
        this.load.audio('hit', '../sound/hit.mp3');
        this.load.audio('gameover', '../sound/gameover.mp3');

        this.load.image('weapon', '../../images/weapon.png');
        this.load.image('monster', '../../images/monster.png');
        this.load.image('platform', '../../images/platform.png');
        this.load.image('part', '../../images/part.png');
        this.load.image('part2', '../../images/part2.png');
        this.load.image('flower', '../../images/flower.png');
        this.load.image('wall', '../../images/wall.png');
        this.load.image('safezone', '../../images/safezone.png');
        this.load.image('dropExp', '../../images/Item/exp.png');
        this.load.image('dropGold', '../../images/Item/gold.png');
        this.load.image('butOption', '../../images/button/butOption.png');
        this.load.image('butSound', '../../images/button/butSound.png');
    }

    create() {
        console.log(this.scene)

        let width = this.scene.scene.game.config.width;
        let height = this.scene.scene.game.config.height;

        if (width < 1536 && height < 864) {
            map = new MapDesign({ scene: this, });
            map.create();

            mobile = new move_mobile({ scene: this })
            mobile.create()

            respon = new responsive({ width, height })
            respon.check(width, height)


            boss = new Boss({ scene: this });
            boss.create();

            player = new Player({ scene: this })
            player.create();
            player.getBoss(boss);
            boss.getPlayer(player)
            mobile.getPlayer(player)

            hp = new HP({ scene: this, });
            hp.create();
            hp.checkHeart();
            
        } else {
            map = new MapDesign({ scene: this, });
            map.create();

            control = new ControlPc({ scene: this })
            control.create();

            boss = new Boss({ scene: this });
            boss.create();

            player = new Player({ scene: this })
            player.create();
            player.getBoss(boss);
            boss.getPlayer(player)
            control.getPlayer(player)

            hp = new HP({ scene: this, });
            hp.create();        
            
            monster = new Monster({ scene: this, });
            monster.create();  

            option = new Option({ scene: this, });
            option.create();        


            drop = new Drop({ scene: this, });
            drop.create();        

            exp = new EXP({ scene: this, });
            exp.create();        
            

            //Object in map
            // console.log(drop.getDropExp())
            // this.physics.add.collider(monster.getMonster(), player.getPlayer(), hp.checkHeart);
            // this.physics.add.collider(monster.getMonster(), player.fire(),hp.checkHp, drop.dropExp);
            // this.physics.add.collider(monster.getMonster(), map.getPart());
            // this.physics.add.collider(monster.getMonster(), map.getPart2());
            // this.physics.add.collider(monster.getMonster(), map.getPart3());
            // this.physics.add.collider(monster.getMonster(), map.getPart4());
            // this.physics.add.collider(monster.getMonster(), map.getSafeZone());
            // this.physics.add.collider(monster.getMonster(), map.getWall());
            // this.physics.add.collider(monster.getMonster(), map.getFlower());
            // this.physics.add.collider(monster.getMonster(), map.getFlower2());
    
            // this.physics.add.collider(player.getPlayer(), map.getPart());
            // this.physics.add.collider(player.getPlayer(), map.getPart2());
            // this.physics.add.collider(player.getPlayer(), map.getPart3());
            // this.physics.add.collider(player.getPlayer(), map.getPart4());
            // this.physics.add.collider(player.getPlayer(), map.getWall());
            // this.physics.add.collider(player.getPlayer(), map.getFlower());
            // this.physics.add.collider(player.getPlayer(), map.getFlower2());
    
            // this.physics.add.collider(boss.getBoss(), player.getPlayer(), hp.checkHeart);
            // this.physics.add.collider(boss.getPlayer(), player.getPlayer(), hp.checkHeart);
            // this.physics.add.collider(boss.getBoss(), monster.getMonster());
            // this.physics.add.collider(boss.getBoss(), control.getWeapon(), hp.checkHpBoss, drop.GetRandom);
    
            // //this.physics.add.overlap(player.getBullet(), monster.getMonster(), monster.collectMons);
            // this.physics.add.collider(player.getPlayer(), drop.getDropExp(), exp.expMons);
            
        }

    }
    
    update() {
        player.update();
        boss.update();
        control.update();
        // monster.update();
        hp.update();
        // drop.update();
        // exp.update();
    }
}



export default GameScene;

import Monster from './Monster'
import move_mobile from '../Control/move_mobile'
import ControlPc from '../Control/ControlPc'
import responsive from './../core/responsive'
import Map from '../Map/Map'
import MapDesign from '../Map/MapDesign'
import Boss from '../Enemy/Boss'
import Player from '../Player/Player'
import Time from '../Map/Time'

import Bullet from '../core/Bullet';

let map
let bullets =[]
let mobile
let respon
let player
let time
let control
let mapDesign
let monsters = []
let bosses = []
let countBoss = 0

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

        //this.load.image('reticle', '../../images/target.png')
        this.load.image('bullet', '../../images/asset/weapon.png')

        this.load.image('boss', '../../images/boss.gif')

        this.load.image('heart', '../../images/heart.png')
        this.load.image('halfheart', '../../images/halfheart.png')

        this.load.image('over', '../../images/game_over.png')

        this.load.audio('bgm', '../sound/bgm.wav');
        this.load.audio('throw', '../sound/throw.wav');
        this.load.audio('hit', '../sound/hit.mp3');
        this.load.audio('gameover', '../sound/gameover.mp3');

        // this.load.image('weapon', '../../images/weapon.png');
        this.load.spritesheet('monster', '../images/asset/monster.png', { frameWidth: 463, frameHeight: 500 }, 2);
        // this.load.image('platform', '../../images/platform.png');
        this.load.image('longlog', '../../images/asset/tonpaiside.png');
        this.load.image('ontablog', '../../images/asset/tonpai.png');
        // this.load.image('part2', '../../images/asset/singletree.png');
        this.load.image('blanker', '../../images/asset/woof.png');
        this.load.image('type2blanker', '../../images/asset/woof2.png');
        this.load.image('type3blanker', '../../images/asset/woof3.png');
        this.load.image('type4blanker', '../../images/asset/woof4.png');
        this.load.image('type5blanker', '../../images/asset/woof5.png');
        this.load.image('type6blanker', '../../images/asset/woof6.png');
        this.load.image('forest', '../../images/asset/singletree.png');
        this.load.image('safezone', '../../images/safezone.png');
        // this.load.image('dropExp', '../../images/Item/exp.png');
        // this.load.image('dropGold', '../../images/Item/gold.png');
        this.load.image('butOption', '../../images/button/butOption.png');
        this.load.image('butSound', '../../images/button/butSound.png');
    }

    create() {
        console.log(this.scene)

        let width = this.scene.scene.game.config.width;
        let height = this.scene.scene.game.config.height;

        if (width < 1536 && height < 864) {
            mapDesign = new MapDesign({ scene: this, });
            mapDesign.create();
            

            control = new move_mobile({ scene: this })
            control.create()

            respon = new responsive({ width, height })
            respon.check(width, height)

            bosses = new Boss({ scene: this });
            bosses.create();

            player = new Player({ scene: this })
            player.create();
            player.getBoss(bosses);
            bosses.getPlayer(player)
            bosses.getBlanker(mapDesign)
            player.getBlanker(mapDesign)
            control.getPlayer(player)

            monsters = new Monster({ scene: this, });
            monsters.create();

            bullets = new Bullet({ scene: this, });
            bullets.create();

            map = new Map({ scene: this, });
            map.create();

            //monster collider
            let mons = monsters.getMonster()
            this.physics.add.collider(mons.getChildren(), player.getPlayer());
            this.physics.add.collider(mons.getChildren(), mapDesign.getLonglog());
            this.physics.add.collider(mons.getChildren(), mapDesign.getLonglog2());
            this.physics.add.collider(mons.getChildren(), mapDesign.getLonglog3());
            this.physics.add.collider(mons.getChildren(), mapDesign.getLonglog4());

            this.physics.add.collider(mons.getChildren(), mapDesign.getOntablog());
            this.physics.add.collider(mons.getChildren(), mapDesign.getOntablog2());
            this.physics.add.collider(mons.getChildren(), mapDesign.getOntablog3());
            this.physics.add.collider(mons.getChildren(), mapDesign.getOntablog4());
            this.physics.add.collider(mons.getChildren(), mapDesign.getOntablog5());
            this.physics.add.collider(mons.getChildren(), mapDesign.getOntablog6());

            this.physics.add.collider(mons.getChildren(), mapDesign.getDowntablog());
            this.physics.add.collider(mons.getChildren(), mapDesign.getDowntablog2());
            this.physics.add.collider(mons.getChildren(), mapDesign.getDowntablog3());
            this.physics.add.collider(mons.getChildren(), mapDesign.getDowntablog4());
            this.physics.add.collider(mons.getChildren(), mapDesign.getDowntablog5());
            this.physics.add.collider(mons.getChildren(), mapDesign.getDowntablog6());


            this.physics.add.collider(mons.getChildren(), mapDesign.getRighttablog());
            this.physics.add.collider(mons.getChildren(), mapDesign.getRighttablog2());
            this.physics.add.collider(mons.getChildren(), mapDesign.getRighttablog3());
            this.physics.add.collider(mons.getChildren(), mapDesign.getRighttablog4());

            //player collider
            this.physics.add.collider(player.getPlayer(), mapDesign.getLonglog())
            this.physics.add.collider(player.getPlayer(), mapDesign.getLonglog2())
            this.physics.add.collider(player.getPlayer(), mapDesign.getLonglog3())
            this.physics.add.collider(player.getPlayer(), mapDesign.getLonglog4())

            this.physics.add.collider(player.getPlayer(), mapDesign.getOntablog())
            this.physics.add.collider(player.getPlayer(), mapDesign.getOntablog2())
            this.physics.add.collider(player.getPlayer(), mapDesign.getOntablog3())
            this.physics.add.collider(player.getPlayer(), mapDesign.getOntablog4())
            this.physics.add.collider(player.getPlayer(), mapDesign.getOntablog5())
            this.physics.add.collider(player.getPlayer(), mapDesign.getOntablog6())

            this.physics.add.collider(player.getPlayer(), mapDesign.getDowntablog())
            this.physics.add.collider(player.getPlayer(), mapDesign.getDowntablog2())
            this.physics.add.collider(player.getPlayer(), mapDesign.getDowntablog3())
            this.physics.add.collider(player.getPlayer(), mapDesign.getDowntablog4())
            this.physics.add.collider(player.getPlayer(), mapDesign.getDowntablog5())
            this.physics.add.collider(player.getPlayer(), mapDesign.getDowntablog6())

            this.physics.add.collider(player.getPlayer(), mapDesign.getRighttablog())
            this.physics.add.collider(player.getPlayer(), mapDesign.getRighttablog2())
            this.physics.add.collider(player.getPlayer(), mapDesign.getRighttablog3())
            this.physics.add.collider(player.getPlayer(), mapDesign.getRighttablog4())

            //ที่หลบกระสุน
            this.physics.add.collider(mons.getChildren(), mapDesign.getBlanker());
            this.physics.add.collider(mons.getChildren(), mapDesign.getBlanker2());
            this.physics.add.collider(mons.getChildren(), mapDesign.getBlanker3());
            this.physics.add.collider(mons.getChildren(), mapDesign.getBlanker4());
            this.physics.add.collider(mons.getChildren(), mapDesign.getBlanker5());
            this.physics.add.collider(mons.getChildren(), mapDesign.getBlanker6());
            this.physics.add.collider(mons.getChildren(), mapDesign.getBlanker7());
            this.physics.add.collider(mons.getChildren(), mapDesign.getBlanker8());
            this.physics.add.collider(mons.getChildren(), mapDesign.getBlanker9());
            this.physics.add.collider(mons.getChildren(), mapDesign.getBlanker10());
            this.physics.add.collider(mons.getChildren(), mapDesign.getBlanker11());
            this.physics.add.collider(mons.getChildren(), mapDesign.getBlanker12());
            this.physics.add.collider(mons.getChildren(), mapDesign.getBlanker13());
            this.physics.add.collider(mons.getChildren(), mapDesign.getBlanker14());
            this.physics.add.collider(mons.getChildren(), mapDesign.getBlanker15());

            this.physics.add.collider(player.getPlayer(), mapDesign.getBlanker())
            this.physics.add.collider(player.getPlayer(), mapDesign.getBlanker2())
            this.physics.add.collider(player.getPlayer(), mapDesign.getBlanker3())
            this.physics.add.collider(player.getPlayer(), mapDesign.getBlanker4())
            this.physics.add.collider(player.getPlayer(), mapDesign.getBlanker5())
            this.physics.add.collider(player.getPlayer(), mapDesign.getBlanker6())
            this.physics.add.collider(player.getPlayer(), mapDesign.getBlanker7())
            this.physics.add.collider(player.getPlayer(), mapDesign.getBlanker8())
            this.physics.add.collider(player.getPlayer(), mapDesign.getBlanker9())
            this.physics.add.collider(player.getPlayer(), mapDesign.getBlanker10())
            this.physics.add.collider(player.getPlayer(), mapDesign.getBlanker11())
            this.physics.add.collider(player.getPlayer(), mapDesign.getBlanker12())
            this.physics.add.collider(player.getPlayer(), mapDesign.getBlanker13())
            this.physics.add.collider(player.getPlayer(), mapDesign.getBlanker14())
            this.physics.add.collider(player.getPlayer(), mapDesign.getBlanker15())


        } else {
            mapDesign = new MapDesign({ scene: this, });
            mapDesign.create();

            control = new ControlPc({ scene: this })
            control.create();
            
            respon = new responsive({ width, height })
            respon.check(width, height)

            bosses = new Boss({ scene: this });
            bosses.create();

            player = new Player({ scene: this })
            player.create();
            player.getBoss(bosses);
            bosses.getPlayer(player)
            // player.getMonster(monsters)
            bosses.getBlanker(mapDesign)
            player.getBlanker(mapDesign)
            control.getPlayer(player)

            monsters = new Monster({ scene: this, });
            monsters.create();

            bullets = new Bullet({ scene: this, });
            bullets.create();

            map = new Map({ scene: this, });
            map.create();
    
            //Object in map
            let mons = monsters.getMonster()
            let boss = bosses.getBoss()
            // this.physics.add.collider(mons.getChildren(), player.getPlayer(), player.playerHitCallback1);
            this.physics.add.collider(player.getPlayer(), this.testHitBoss);
            this.physics.add.collider(mons.getChildren())
        //    this.physics.add.collider(player.getPlayer(), bullets.getBullet(), player.playerHitCallback);
            this.physics.add.collider(mons.getChildren(), player.getPlayer(), player.playerHitCallback);
            // this.physics.add.collider(mons.getChildren(), player.checkHp);
            this.physics.add.collider(mons.getChildren(), mapDesign.getSafeZone());
            this.physics.add.collider(mons.getChildren(), mapDesign.getPart());
            this.physics.add.collider(mons.getChildren(), mapDesign.getPart2());
            this.physics.add.collider(mons.getChildren(), mapDesign.getPart3());
            this.physics.add.collider(mons.getChildren(), mapDesign.getPart4());
            this.physics.add.collider(mons.getChildren(), mapDesign.getSafeZone());
            this.physics.add.collider(mons.getChildren(), mapDesign.getWall());
            this.physics.add.collider(mons.getChildren(), mapDesign.getFlower());
            this.physics.add.collider(mons.getChildren(), mapDesign.getFlower2());
            this.physics.add.collider(mons.getChildren(), mapDesign.getLonglog());
            this.physics.add.collider(mons.getChildren(), mapDesign.getLonglog2());
            this.physics.add.collider(mons.getChildren(), mapDesign.getLonglog3());
            this.physics.add.collider(mons.getChildren(), mapDesign.getLonglog4());

            // this.physics.add.collider(bosses.getBoss(), mapDesign.getOntablog());
            // this.physics.add.collider(bosses.getBoss(), mapDesign.getOntablog2());
            // this.physics.add.collider(bosses.getBoss(), mapDesign.getOntablog3());
            // this.physics.add.collider(bosses.getBoss(), mapDesign.getOntablog4());
            // this.physics.add.collider(bosses.getBoss(), mapDesign.getOntablog5());
            // this.physics.add.collider(bosses.getBoss(), mapDesign.getOntablog6());

            this.physics.add.collider(mons.getChildren(), mapDesign.getOntablog());
            this.physics.add.collider(mons.getChildren(), mapDesign.getOntablog2());
            this.physics.add.collider(mons.getChildren(), mapDesign.getOntablog3());
            this.physics.add.collider(mons.getChildren(), mapDesign.getOntablog4());
            this.physics.add.collider(mons.getChildren(), mapDesign.getOntablog5());
            this.physics.add.collider(mons.getChildren(), mapDesign.getOntablog6());

            this.physics.add.collider(mons.getChildren(), mapDesign.getDowntablog());
            this.physics.add.collider(mons.getChildren(), mapDesign.getDowntablog2());
            this.physics.add.collider(mons.getChildren(), mapDesign.getDowntablog3());
            this.physics.add.collider(mons.getChildren(), mapDesign.getDowntablog4());
            this.physics.add.collider(mons.getChildren(), mapDesign.getDowntablog5());
            this.physics.add.collider(mons.getChildren(), mapDesign.getDowntablog6());


            this.physics.add.collider(mons.getChildren(), mapDesign.getRighttablog());
            this.physics.add.collider(mons.getChildren(), mapDesign.getRighttablog2());
            this.physics.add.collider(mons.getChildren(), mapDesign.getRighttablog3());
            this.physics.add.collider(mons.getChildren(), mapDesign.getRighttablog4());


            this.physics.add.collider(player.getPlayer(), mapDesign.getPart());
            this.physics.add.collider(player.getPlayer(), mapDesign.getPart2());
            this.physics.add.collider(player.getPlayer(), mapDesign.getPart3());
            this.physics.add.collider(player.getPlayer(), mapDesign.getPart4());
            this.physics.add.collider(player.getPlayer(), mapDesign.getWall());
            this.physics.add.collider(player.getPlayer(), mapDesign.getFlower());
            this.physics.add.collider(player.getPlayer(), mapDesign.getFlower2());
            this.physics.add.collider(player.getPlayer(), mapDesign.getLonglog())
            this.physics.add.collider(player.getPlayer(), mapDesign.getLonglog2())
            this.physics.add.collider(player.getPlayer(), mapDesign.getLonglog3())
            this.physics.add.collider(player.getPlayer(), mapDesign.getLonglog4())

            this.physics.add.collider(player.getPlayer(), mapDesign.getOntablog())
            this.physics.add.collider(player.getPlayer(), mapDesign.getOntablog2())
            this.physics.add.collider(player.getPlayer(), mapDesign.getOntablog3())
            this.physics.add.collider(player.getPlayer(), mapDesign.getOntablog4())
            this.physics.add.collider(player.getPlayer(), mapDesign.getOntablog5())
            this.physics.add.collider(player.getPlayer(), mapDesign.getOntablog6())

            this.physics.add.collider(player.getPlayer(), mapDesign.getDowntablog())
            this.physics.add.collider(player.getPlayer(), mapDesign.getDowntablog2())
            this.physics.add.collider(player.getPlayer(), mapDesign.getDowntablog3())
            this.physics.add.collider(player.getPlayer(), mapDesign.getDowntablog4())
            this.physics.add.collider(player.getPlayer(), mapDesign.getDowntablog5())
            this.physics.add.collider(player.getPlayer(), mapDesign.getDowntablog6())

            this.physics.add.collider(player.getPlayer(), mapDesign.getRighttablog())
            this.physics.add.collider(player.getPlayer(), mapDesign.getRighttablog2())
            this.physics.add.collider(player.getPlayer(), mapDesign.getRighttablog3())
            this.physics.add.collider(player.getPlayer(), mapDesign.getRighttablog4())

             //ที่หลบกระสุน
             this.physics.add.collider(mons.getChildren(), mapDesign.getBlanker());
             this.physics.add.collider(mons.getChildren(), mapDesign.getBlanker2());
             this.physics.add.collider(mons.getChildren(), mapDesign.getBlanker3());
             this.physics.add.collider(mons.getChildren(), mapDesign.getBlanker4());
             this.physics.add.collider(mons.getChildren(), mapDesign.getBlanker5());
             this.physics.add.collider(mons.getChildren(), mapDesign.getBlanker6());
             this.physics.add.collider(mons.getChildren(), mapDesign.getBlanker7());
             this.physics.add.collider(mons.getChildren(), mapDesign.getBlanker8());
             this.physics.add.collider(mons.getChildren(), mapDesign.getBlanker9());
             this.physics.add.collider(mons.getChildren(), mapDesign.getBlanker10());
             this.physics.add.collider(mons.getChildren(), mapDesign.getBlanker11());
             this.physics.add.collider(mons.getChildren(), mapDesign.getBlanker12());
             this.physics.add.collider(mons.getChildren(), mapDesign.getBlanker13());
             this.physics.add.collider(mons.getChildren(), mapDesign.getBlanker14());
             this.physics.add.collider(mons.getChildren(), mapDesign.getBlanker15());
 
             this.physics.add.collider(player.getPlayer(), mapDesign.getBlanker())
             this.physics.add.collider(player.getPlayer(), mapDesign.getBlanker2())
             this.physics.add.collider(player.getPlayer(), mapDesign.getBlanker3())
             this.physics.add.collider(player.getPlayer(), mapDesign.getBlanker4())
             this.physics.add.collider(player.getPlayer(), mapDesign.getBlanker5())
             this.physics.add.collider(player.getPlayer(), mapDesign.getBlanker6())
             this.physics.add.collider(player.getPlayer(), mapDesign.getBlanker7())
             this.physics.add.collider(player.getPlayer(), mapDesign.getBlanker8())
             this.physics.add.collider(player.getPlayer(), mapDesign.getBlanker9())
             this.physics.add.collider(player.getPlayer(), mapDesign.getBlanker10())
             this.physics.add.collider(player.getPlayer(), mapDesign.getBlanker11())
             this.physics.add.collider(player.getPlayer(), mapDesign.getBlanker12())
             this.physics.add.collider(player.getPlayer(), mapDesign.getBlanker13())
             this.physics.add.collider(player.getPlayer(), mapDesign.getBlanker14())
             this.physics.add.collider(player.getPlayer(), mapDesign.getBlanker15())

            // this.physics.add.collider(player.getPlayer(), player.checkHeart);
            // this.physics.add.collider(bosses.getWeaponBoss(), player.getPlayer(), hp.checkHeart);
            this.physics.add.collider(mons.getChildren());
            // this.physics.add.collider(player.checkHpBoss);
        }

    }

    update() {
        player.update();
        bosses.update();
        control.update();
        monsters.update();
        map.update();
        // drop.update();
        // exp.update();
    
    }

    testHit(monster) {
        // console.log(monster)
        monster.hpMonsR -= 10
        // let mons = monsters.getMonster()
        if (monster.hpMonsR == 20) {
            // console.log(monsters.getMonster().getChildren())
            // monster.setTint(0xff0000)
        } else if (monster.hpMonsR <= 0) {
            // monster.disableBody(true, true)
            countBoss++
            console.log(countBoss)
            if (countBoss == 2) {
                if (bos.disableBody(true)) {
                    console.log(bosses)
                    boshpMonB = 100
                    bos.disableBody(false, false);
                    countBoss = 0

                }
            }
        }

    }

    testHitBoss(bos) {
        console.log(bos)
        bos.hpMonsB -= 10

        if (bos.hpMonsB == 20) {
            bos.setTint(0xff0000)
        } else if (bos.hpMonsB <= 0) {
            bos.disableBody(true, true)
        }
    }

    spawnBoss(bos) {
        if (bos.disableBody(true)) {
            console.log(bosses)
            boshpMonB = 100
            bos.disableBody(false);
            countBoss = 0
        }
    }

}



export default GameScene;
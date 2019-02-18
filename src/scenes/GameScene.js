import ControlPc from './Player/ControlPc'
import MapDesign from './Map/MapDesign'
import Option from './Data/Option'
import Value from './HP/Value'
import Monster from './Monster'
import Boss from './Boss'

let player, bullets, mapDesign, option, hp, bos
let bosses = []
let monsters = []
let countBoss = 0


class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('player', '../../images/player.png')
        this.load.image('weapon', '../../images/weapon.png');
        this.load.image('monster', '../../images/monster.png');
        this.load.image('boss', '../../images/boss.png');
        this.load.image('weaponBoss', '../../images/weaponBoss.png');
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
        bosses = new Boss({ scene: this, });
        bosses.create();
        player = new ControlPc({ scene: this, });
        player.create();

        /*for (i = 0; i != 40; i++) {
            monsters[i] = new Monster({ scene: this, });
            monsters[i].create()
        }*/
        // console.log(physics)

        monsters = new Monster({ scene: this, })
        monsters.create()

        option = new Option({ scene: this, });
        option.create();
        hp = new Value({ scene: this, });
        hp.create();

        // for (let index = 0; index < monsters.length; index++) {
        //     this.physics.add.collider(player.getPlayer(), monsters[index].getMonster());

        // }

        // this.physics.add.collider(monsters.getMonster(), player.getPlayer(), this.checkHp)
        // this.physics.add.collider(monsters.getMonster(), player.getPlayer(), this.exMonHp,null,this);
        let mons = monsters.getMonster()
        let boss = bosses.getBoss()
        // this.physics.add.collider(mons.getChildren(), player.getPlayer(), hp.checkHeart);
        this.physics.add.collider(mons.getChildren(), player.getPlayer(), this.testHit, hp.checkHeart);
        this.physics.add.collider(boss.getChildren(), player.getPlayer(), this.testHitBoss);
        this.physics.add.collider(mons.getChildren())
        this.physics.add.collider(mons.getChildren(), player.getBullet(), hp.checkHp);
        this.physics.add.collider(mons.getChildren(), mapDesign.getPart());
        this.physics.add.collider(mons.getChildren(), mapDesign.getPart2());
        this.physics.add.collider(mons.getChildren(), mapDesign.getPart3());
        this.physics.add.collider(mons.getChildren(), mapDesign.getPart4());
        this.physics.add.collider(mons.getChildren(), mapDesign.getSafeZone());
        this.physics.add.collider(mons.getChildren(), mapDesign.getWall());
        this.physics.add.collider(mons.getChildren(), mapDesign.getFlower());
        this.physics.add.collider(mons.getChildren(), mapDesign.getFlower2());

        this.physics.add.collider(player.getPlayer(), mapDesign.getPart());
        this.physics.add.collider(player.getPlayer(), mapDesign.getPart2());
        this.physics.add.collider(player.getPlayer(), mapDesign.getPart3());
        this.physics.add.collider(player.getPlayer(), mapDesign.getPart4());
        this.physics.add.collider(player.getPlayer(), mapDesign.getWall());
        this.physics.add.collider(player.getPlayer(), mapDesign.getFlower());
        this.physics.add.collider(player.getPlayer(), mapDesign.getFlower2());

        this.physics.add.collider(boss.getChildren(), player.getPlayer(), hp.checkHeart);
        // this.physics.add.collider(bosses.getWeaponBoss(), player.getPlayer(), hp.checkHeart);
        this.physics.add.collider(boss.getChildren(), mons.getChildren());
        this.physics.add.collider(boss.getChildren(), player.getWeapon(), hp.checkHpBoss);
        
        // console.log(mons.getChildren())
        // console.log(monsters)
    }

    update() {
        player.update();
        // for (i = 0; i != 40; i++) {
        //     monsters[i].update();
        // }
        mapDesign.update();
        hp.update();
        bosses.update();



    }

    testHit(monster) {
        // console.log(monster)
        monster.hpMonsR -= 10
        // let mons = monsters.getMonster()
        if (monster.hpMonsR == 20) {
            // console.log(monsters.getMonster().getChildren())
            monster.setTint(0xff0000)
        } else if (monster.hpMonsR <= 0) {
            monster.disableBody(true, true)
            countBoss++
            console.log(countBoss)
            if(countBoss==2){
                if(bos.disableBody(true)){
                    console.log(bosses)
                    boshpMonB = 100
                    // bos.disableBody(false,false);
                    countBoss = 0
                    
                }
            }
            // console.log(mons.getChildren())    
            // mons.getChildren().visible(false)
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

    spawnBoss(bos){ 

        if(bos.disableBody(true)){
            console.log(bosses)
            boshpMonB = 100
            bos.disableBody(false);
            countBoss = 0
            
        }
        
    }



    // exMonHp(player,monster){
    //     // // hp.getHpMons() -= 10
    //     // hp.checkHp()
    //     // console.log(hp.getHpMons())
    //     // if( hp.getHpMons() == 20){
    //     //     monster.setTint(0xff0000);   
    //     // }else if( hp.getHpMons() <= 0){
    //     //     monster.disableBody(true,true)
    //     //     // hp.getHpMons() = 100
    //     // }

    //     console.log(hpMonster)
    //     hpMonster -= 10

    //     if(hpMonster == 20){
    //         monster.setTint(0xff0000);   
    //     }else if(hpMonster == 0){
    //         monster.disableBody(true,true)
    //         hpMonster = 100
    //     }
    // }


}

// function collect(monster, bullets) { 
//     bullets.disableBody(true, true);
// }

export default GameScene;

import responsive from "./responsive";
import Bullets from './Bullet'

let phasers;
let player;
let reticle;
let boss;
let playerBullets;
let gameover = false;
let overpic;
let hp3;
let hp2;
let hp1;

class Player extends Phaser.Scene {

    constructor(config) {
        super(config.scene);
        this.scene = config.scene;
        this.scene.add.existing(this);
        phasers = config.scene
    }


    preload() {

        this.load.image('player', '../../images/player.png');
        this.load.image('reticle', '../../images/target.png');
        this.load.image('over', '../../images/game_over.png');

    }

    create() {
        console.log('Player created!!!')

        let Bullet = new Bullets(this)
        Bullet.create()

        let width = phasers.scene.scene.game.config.width;
        let height = phasers.scene.scene.game.config.height;
        let x = phasers.scene.scene

        let responsives = new responsive(width, height)
        responsives.check(height, width)
        let scaleRatio = responsives.getScale()

        //กำหนดตัวละครเป็น physics
        player = phasers.physics.add.sprite(400, 600, 'player');
        player.setScale(scaleRatio + 0.2);
        //ไม่ให้ player ออกนอกโลก
        player.setCollideWorldBounds(true);

        reticle = phasers.physics.add.image(400, 500, 'reticle');
        reticle.setScale(scaleRatio + 0.2);
        
        hp1 = phasers.add.image(-350, -250, 'boss').setScrollFactor(0.5, 0.5);
        hp2 = phasers.add.image(-300, -250, 'boss').setScrollFactor(0.5, 0.5);
        hp3 = phasers.add.image(-250, -250, 'boss').setScrollFactor(0.5, 0.5);
        
        overpic = phasers.add.image(player.x, player.y, 'over').setScale(scaleRatio)
        overpic.setVisible(false);
       
        // Add groups for Bullet objects
        playerBullets = phasers.physics.add.group({ classType: Bullet.getBullet(), runChildUpdate: true });

        //กล้องตามตัว player
        phasers.cameras.main.setBounds(0, 0, 900, 900)
        phasers.cameras.main.startFollow(player, true, 1, 1);

        // Set sprite variables
        player.health = 3;

    }

    update() {

        if (gameover == true) {
            phasers.scene.pause();
            overpic.x = player.x
            overpic.y = player.y
            overpic.setVisible(true)
        }

    }

    resize(width, height) {
        phasers.cameras.resize(width, height);
        this.bg.setDisplaySize(0, 0);
    }

    getPlayer() {
        return player
    }

    getReticle(){
        return reticle
    }

    getBoss(b){
        boss = b
    }

    playerHitCallback(playerHit, bulletHit) {
        // console.log('hit call back !!!')
        // Reduce health of player
        // console.log(playerHit,"lllllll",bulletHit)
        if (bulletHit.active === true && playerHit.active === true) {
            playerHit.health = playerHit.health - 1;
            console.log("Player hp: ", playerHit.health);

            // Kill hp sprites and kill player if health <= 0
            if (playerHit.health == 2) {
                hp3.destroy();
            }
            else if (playerHit.health == 1) {
                hp2.destroy();
            }
            else if (playerHit.health == 0) {
                hp1.destroy();
                gameover = true;
                // Game over state should execute here
            }

            // Destroy bullet
            bulletHit.setActive(false).setVisible(false);
        }
    }

    fire(){

        let bullet = playerBullets.get()

        if (bullet) {
            bullet.fire(player.x, player.y, player.rotation)
            phasers.physics.add.collider(boss.getBoss(), bullet, boss.enemyHitCallback);
        }
    }

}


export default Player;
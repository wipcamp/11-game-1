import responsive from "./../core/responsive";
import Bullets from './../core/Bullet'
import HP from './../Value/HP'

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
let weapon;
let heart1 , heart1_2 , heart2 , heart2_2 , heart3 , heart3_2 
let cursors;
let bgm;
let hits;
let s_over;

class Player extends Phaser.Scene {

    constructor(config) {
        super(config.scene);
        this.scene = config.scene;
        this.scene.add.existing(this);
        phasers = config.scene
    }


    preload() {

    

    }

    create() {

        let Bullet = new Bullets(this)
        Bullet.create()

        bgm = phasers.sound.add('bgm', {volume : 0.5});
        bgm.setVolume(0.5);
        bgm.play({ loop: true });
        
        
        hits = phasers.sound.add('hit',  true);
        hits.volume -= 0.5;

        s_over = phasers.sound.add('gameover', true);
        s_over.volume -= 0.5;

        let width = phasers.scene.scene.game.config.width;
        let height = phasers.scene.scene.game.config.height;
        let x = phasers.scene.scene

        let responsives = new responsive(width, height)
        responsives.check(height, width)
        let scaleRatio = responsives.getScale()

        cursors = phasers.input.keyboard.createCursorKeys();
        phasers.keyW = phasers.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        phasers.keyA = phasers.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        phasers.keyS = phasers.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        phasers.keyD = phasers.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        phasers.keySpacebar = phasers.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);


        //กำหนดตัวละครเป็น physics
        player = phasers.physics.add.sprite(400, 600, 'player');
        player.setScale(scaleRatio + 0.2);
        //ไม่ให้ player ออกนอกโลก
        player.setCollideWorldBounds(true);

        //weapon = phasers.physics.add.image(410,600, 'weapon');
        //weapon.setCollideWorldBounds(true);
        
        hp1 = phasers.add.image(-350, -250, 'heart').setScrollFactor(0.5, 0.5);
        hp2 = phasers.add.image(-300, -250, 'heart').setScrollFactor(0.5, 0.5);
        hp3 = phasers.add.image(-250, -250, 'heart').setScrollFactor(0.5, 0.5);        
        
        // Add groups for Bullet objects
        playerBullets = phasers.physics.add.group({ classType: Bullet.getBullet(), runChildUpdate: true });
        
        overpic = phasers.add.image(player.x, player.y, 'over').setScale(scaleRatio + 0.2)
        overpic.setVisible(false);

        //กล้องตามตัว player
        // phasers.cameras.main.setBounds(0, 0, 900, 900);
        phasers.cameras.main.startFollow(player, true, 1, 1);
        // phasers.cameras.mains.setZoom(2); 

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

    getPlayer() {
        return player
    }

    getBoss(b){
        boss = b
    }

    playerHitCallback(playerHit, bulletHit) {
        // console.log('hit call back !!!')
        // Reduce health of player
        // console.log(playerHit,"lllllll",bulletHit)
        if (bulletHit.active === true && playerHit.active === true) {
            playerHit.health = playerHit.health - 0.5;
            hits.play({ loop: false });
            console.log("Player hp: ", playerHit.health);

            // Kill hp sprites and kill player if health <= 0
            if (playerHit.health == 2.5) {
                hp3.destroy();
                // heart3.setVisible(false);
                // heart3_2.setVisible(true);
            }
            else if (playerHit.health == 2) {
                hp2.destroy();
                // heart3.setVisible(false);
                // heart3_2.setVisible(false);
            }
            else if (playerHit.health == 1.5) {
                hp2.destroy();
                // heart2.setVisible(false);
                // heart2_2.setVisible(true);
            }
            else if (playerHit.health == 1) {
                hp2.destroy();
                // heart2_2.setVisible(false);
            }
            else if (playerHit.health == 0.5) {
                hp2.destroy();
                // heart1_2.setVisible(true);
                // heart1.setVisible(false);
            }
            else if (playerHit.health == 0) {
                hp1.destroy();
                // heart1_2.setVisible(false);
                // heart1.setVisible(true);
                // heart2.setVisible(true);
                // heart3.setVisible(true);
                gameover = true;
                bgm.pause();
                s_over.play({ loop: true});
            }

            // Destroy bullet
            bulletHit.setActive(false).setVisible(false);
        }
    }

    fire(){

        let bullet = playerBullets.get()

        if (bullet) {
            bullet.fire(player.x, player.y, player.rotation)
            bullet.setAngle(player)
            phasers.physics.add.collider(boss.getBoss(), bullet, boss.enemyHitCallback);
        }
    }

}


export default Player;
import responsive from "./../core/responsive";
import Bullets from './../core/Bullet';

let phasers;
let player;
let reticle;
let boss;
let monsters
let playerBullets;
let gameover = false;
let overpic;

let heart1, heart1_2, heart2, heart2_2, heart3, heart3_2
let cursors, bgm1;
let hits, timeText, time;
let x, y, currentHeart = 3,
    health = 3;
let s_over;
let blanker;
let slidelog;
let bullet


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

        heart1_2 = phasers.physics.add.image(scaleRatio + 320, y - 365, 'halfheart').setScrollFactor(0).setScale(1.5);
        heart1_2.setVisible(false);
        heart1 = phasers.physics.add.image(scaleRatio + 320, y - 365, 'heart').setScrollFactor(0).setScale(3);
        heart1.setVisible(true);

        heart2_2 = phasers.physics.add.image(scaleRatio + 360, y - 365, 'halfheart').setScrollFactor(0).setScale(1.5);
        heart2_2.setVisible(false);
        heart2 = phasers.physics.add.image(scaleRatio + 360, y - 365, 'heart').setScrollFactor(0).setScale(1.5);
        heart2.setVisible(true);


        heart3_2 = phasers.physics.add.image(scaleRatio + 400, y - 365, 'halfheart').setScrollFactor(0).setScale(1.5);
        heart3_2.setVisible(false);
        heart3 = phasers.physics.add.image(scaleRatio + 400, y - 365, 'heart').setScrollFactor(0).setScale(1.5);
        heart3.setVisible(true);

        overpic = phasers.add.image(0, 0, 'over').setScale(scaleRatio + 0.2)
        overpic.setVisible(false);

        bgm1 = phasers.sound.add('bgm', { volume: 0.5 });
        bgm1.setVolume(0.5);
        bgm1.play({ loop: true });

        hits = phasers.sound.add('hit', true);
        hits.volume -= 0.5;

        let width = phasers.scene.scene.game.config.width;
        let height = phasers.scene.scene.game.config.height;
        let x = phasers.scene.scene

        let responsives = new responsive(width, height)
        responsives.check(height, width)
        let scaleRatio = responsives.getScale()

        s_over = phasers.sound.add('gameover', false);
        s_over.volume -= 0.5;

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


        // Add groups for Bullet objects
        playerBullets = phasers.physics.add.group({ classType: Bullet.getBullet(), runChildUpdate: true });

        overpic = phasers.add.image(0, 0, 'over').setScale(scaleRatio + 0.2)
        overpic.setVisible(false);

        //กล้องตามตัว player    
        phasers.cameras.main.setBounds(0, 0, 1240, 2048);
        phasers.cameras.main.startFollow(player, true, 1, 1);
        bullet = playerBullets.get()
            // Set sprite variables


    }

    update() {


        if (gameover == true) {
            phasers.scene.pause();
            bgm1.pause();
            overpic.x = player.x
            overpic.y = player.y
            overpic.setVisible(true)

        }



    }

    getPlayerBullet() {
        return bullet
    }

    getPlayer() {
        return player
    }

    getBoss(b) {
        boss = b
    }



    getBlanker(bk) {
        blanker = bk
    }

    getSlidelog(ss) {
        slidelog = ss
    }


    playerHitCallback(playerHit, bulletHit) {
        health -= 0.5;
        currentHeart -= 0.5;
        hits.play({ loop: false });
        console.log("Player hp: ", health);
        if (bulletHit.active === true && playerHit.active === true) {
            // console.log("Player hp: ", health);
            bulletHit.setActive(true).setVisible(true);
            if (health >= 2.5 && health < 3) {
                heart3.setVisible(false);
                heart3_2.setVisible(true);
                return health;
            }
            if (health >= 2 && health < 2.5) {
                heart3.setVisible(false);
                heart3_2.setVisible(false);
                return health;
            }
            if (health >= 1.5 && health < 2) {
                heart2.setVisible(false);
                heart2_2.setVisible(true);
                return health;
            }
            if (health >= 1 && health < 1.5) {
                heart2_2.setVisible(false);
                return health;
            }
            if (health >= 0.5 && health < 1) {
                heart1_2.setVisible(true);
                heart1.setVisible(false);
                return health;
            } else {
                heart1_2.setVisible(false);
                heart1.setVisible(false);
                heart2.setVisible(false);
                heart3.setVisible(false);
                heart2_2.setVisible(false);
                heart3_2.setVisible(false);
                gameover = true;
                s_over.play({ loop: true });
            }
        }
        if (health >= 0 && health < 0.5) {
            gameover = true;
            s_over.play({ loop: true });
            return health;
        }
        return health;
    }

    checkHeart() {
        // delay=3000;
        // hits.play({ loop: false });
        // currentText.setText('HP Player: ' + currentHeart);

        // if (currentHeart >= 2.5 && currentHeart < 3) {
        //     heart3.setVisible(false);
        //     heart3_2.setVisible(true);
        //     return currentHeart;
        //  } if (currentHeart >= 2 && currentHeart < 2.5) {
        //     heart3.setVisible(false);
        //     heart3_2.setVisible(false);
        //     return currentHeart;
        //  } if (currentHeart >= 1.5 && currentHeart < 2) {
        //     heart2.setVisible(false);
        //     heart2_2.setVisible(true);
        //     return currentHeart;
        //  } if (currentHeart >= 1 && currentHeart < 1.5) {
        //     heart2_2.setVisible(false);
        //     return currentHeart;
        //  } if (currentHeart >= 0.5 && currentHeart < 1) {
        //     heart1_2.setVisible(true);
        //     heart1.setVisible(false);
        //     return currentHeart;
        // } else {
        //     heart1_2.setVisible(false);
        //     heart1.setVisible(false);
        //     heart2.setVisible(false);
        //     heart3.setVisible(false);
        //     heart2_2.setVisible(false);
        //     heart3_2.setVisible(false);

        // }
        // return currentHeart;
    }

    // checkHp() {
    //     if (player.health >= 0 && player.health < 0.5) {
    //         console.log(player.health)
    //         // delay=3000;
    //         gameover = true;
    //         bgm1.pause();
    //         sover.play({ loop: true });
    //         return player.health;
    //     }
    // }



    fire() {



        if (bullet) {
            bullet.fire(player.x, player.y, player.rotation)
            phasers.physics.add.collider(boss.getBoss(), bullet, boss.enemyHitCallback);
            // phasers.physics.add.collider(, bullet, phasers.testHit);
            phasers.physics.add.collider(bullet, blanker.getBlanker(), (bullet, blanker) => {
                bullet.setActive(false).setVisible(false);
            });
            phasers.physics.add.collider(bullet, blanker.getBlanker2(), (bullet, blanker) => {
                bullet.setActive(false).setVisible(false);
            });
            phasers.physics.add.collider(bullet, blanker.getBlanker3(), (bullet, blanker) => {
                bullet.setActive(false).setVisible(false);
            });
            phasers.physics.add.collider(bullet, blanker.getBlanker4(), (bullet, blanker) => {
                bullet.setActive(false).setVisible(false);
            });
            phasers.physics.add.collider(bullet, blanker.getBlanker5(), (bullet, blanker) => {
                bullet.setActive(false).setVisible(false);
            });
            phasers.physics.add.collider(bullet, blanker.getBlanker6(), (bullet, blanker) => {
                bullet.setActive(false).setVisible(false);
            });
            phasers.physics.add.collider(bullet, blanker.getBlanker7(), (bullet, blanker) => {
                bullet.setActive(false).setVisible(false);
            });
            phasers.physics.add.collider(bullet, blanker.getBlanker8(), (bullet, blanker) => {
                bullet.setActive(false).setVisible(false);
            });
            phasers.physics.add.collider(bullet, blanker.getBlanker9(), (bullet, blanker) => {
                bullet.setActive(false).setVisible(false);
            });
            phasers.physics.add.collider(bullet, blanker.getBlanker10(), (bullet, blanker) => {
                bullet.setActive(false).setVisible(false);
            });
            phasers.physics.add.collider(bullet, blanker.getBlanker11(), (bullet, blanker) => {
                bullet.setActive(false).setVisible(false);
            });
            phasers.physics.add.collider(bullet, blanker.getBlanker12(), (bullet, blanker) => {
                bullet.setActive(false).setVisible(false);
            });
            phasers.physics.add.collider(bullet, blanker.getBlanker13(), (bullet, blanker) => {
                bullet.setActive(false).setVisible(false);
            });
            phasers.physics.add.collider(bullet, blanker.getBlanker14(), (bullet, blanker) => {
                bullet.setActive(false).setVisible(false);
            });
            phasers.physics.add.collider(bullet, blanker.getBlanker15(), (bullet, blanker) => {
                bullet.setActive(false).setVisible(false);
            });
            // phasers.physics.add.collider(bullet, slidelog.getSlidelog(), (bullet, slidelog) => {
            //     bullet.setActive(false).setVisible(false);
            // });
        }
    }

}


export default Player;
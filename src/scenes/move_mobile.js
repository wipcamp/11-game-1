import 'phaser';
import responsive from "./responsive";
import joystick from "./virtualjoystick"
import Bullets from './Bullet'
let phasers;
let player;
let button;
let cursors;
let x;
let y;
let boss;
let healthpoint;
let enemyBullets;
let playerBullets;
let background;
let bullets;
let reticle;

let time = 0
let rightButton
let leftButton
let down_right_Button
let up_right_Button
let up_left_Button
let down_left_Button
let attackButton
let upButton
let downButton
let hp1
let hp2
let hp3
let gameover = false;
let overpic
class move_mobile extends Phaser.Scene {
    constructor(config) {
        super(config.scene);
        this.scene = config.scene;
        this.scene.add.existing(this);
        phasers = config.scene;
    }

    preload() {
        this.load.image('up', './../../images/button_up.png');
        this.load.image('down', '../../images/button_down.png');
        this.load.image('left', '../../images/button_left.png');
        this.load.image('right', '../../images/button_right.png');

        this.load.image('up_left', '../../images/button_up_left.png');
        this.load.image('up_right', '../../images/button_up_right.png');

        this.load.image('down_left', '../../images/button_down_left.png');
        this.load.image('down_right', '../../images/button_down_right.png');

        this.load.image('attack', '../../images/button_atk.png');

        this.load.image('player', '../../images/player.png');
        this.load.image('bg', '../../images/bg.png');

        this.load.image('reticle', '../../images/target.png')
        this.load.image('bullet', '../../images/bomb.png');

        this.load.image('boss', '../../images/boss.gif');

        this.load.image('over', '../../images/game_over.png');
    }
    create() {
        let Bullet = new Bullets(this)
        Bullet.create()

        let width = phasers.scene.scene.physics.world.bounds.width;
        let height = phasers.scene.scene.physics.world.bounds.height;
        let x = phasers.scene.scene

        phasers.physics.world.setBounds(0, 0, 1600, 1200);

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

        // ตัวละคร boss
        boss = phasers.physics.add.sprite(400, 200, 'boss').setScale(scaleRatio + 0.2)

        hp1 = phasers.add.image(-350, -250, 'boss').setScrollFactor(0.5, 0.5);
        hp2 = phasers.add.image(-300, -250, 'boss').setScrollFactor(0.5, 0.5);
        hp3 = phasers.add.image(-250, -250, 'boss').setScrollFactor(0.5, 0.5);

        overpic = phasers.add.image(player.x, player.y, 'over').setScale(scaleRatio)
        overpic.setVisible(false);

        //กล้องตามตัว player
        phasers.cameras.main.setBounds(0, 0, 900, 900)
        phasers.cameras.main.startFollow(player, true, 1, 1);

        // Add 2 groups for Bullet objects
        playerBullets = phasers.physics.add.group({ classType: Bullet.getBullet(), runChildUpdate: true });
        enemyBullets = phasers.physics.add.group({ classType: Bullet.getBullet(), runChildUpdate: true });


        //ใส่ปุ่มในมือถือ และ ล็อกตัวปุ่มทั้งหมด
        // .setScrollFactor(0) = A sprite, doesn't scroll with the camera (is fixed to camera)  
        rightButton = phasers.physics.add.image(scaleRatio * 320, height - 65, 'right').setInteractive().setScale(scaleRatio + 0.5).setScrollFactor(0);
        rightButton.on('pointerdown', control_right); //pointerdown คือ เมื่อกด จะให้เกิดอะไรซักอย่าง โดยเรียกใช้ฟังก์ชั่น
        rightButton.on('pointerup', control_stopX); //pointerup คือ เมื่อไม่ได้กดปุ่ม หรือ ปล่อย จะให้เกิดอะไรซักอย่าง โดยเรียกใช้ฟังก์ชั่น

        leftButton = phasers.add.image(scaleRatio * 80, height - 65, 'left').setInteractive().setScale(scaleRatio + 0.5).setScrollFactor(0);
        leftButton.on('pointerdown', control_left);
        leftButton.on('pointerup', control_stopX);

        upButton = phasers.physics.add.image(scaleRatio * 200, height - 100, 'up').setInteractive().setScale(scaleRatio + 0.5).setScrollFactor(0);
        upButton.on('pointerdown', control_up);
        upButton.on('pointerup', control_stopY);
        upButton.setCollideWorldBounds(true)

        downButton = phasers.add.image(scaleRatio * 200, height - 30, 'down').setInteractive().setScale(scaleRatio + 0.5).setScrollFactor(0);
        downButton.on('pointerdown', control_down);
        downButton.on('pointerup', control_stopY);

        up_left_Button = phasers.physics.add.image(scaleRatio * 320, height - 100, 'up_right').setInteractive().setScale(scaleRatio + 0.5).setScrollFactor(0);
        up_left_Button.on('pointerdown', control_up_right);
        up_left_Button.on('pointerup', control_stopXY);
        up_left_Button.setCollideWorldBounds(true)

        up_right_Button = phasers.physics.add.image(scaleRatio * 80, height - 100, 'up_left').setInteractive().setScale(scaleRatio + 0.5).setScrollFactor(0);
        up_right_Button.on('pointerdown', control_up_left);
        up_right_Button.on('pointerup', control_stopXY);
        up_right_Button.setCollideWorldBounds(true)
        //x, y
        down_left_Button = phasers.add.image(scaleRatio * 80, height - 30, 'down_left').setInteractive().setScale(scaleRatio + 0.5).setScrollFactor(0);
        down_left_Button.on('pointerdown', control_down_left);
        down_left_Button.on('pointerup', control_stopXY);

        down_right_Button = phasers.add.image(scaleRatio * 320, height - 30, 'down_right').setInteractive().setScale(scaleRatio + 0.5).setScrollFactor(0);
        down_right_Button.on('pointerdown', control_down_right);
        down_right_Button.on('pointerup', control_stopXY);

        attackButton = phasers.add.image(width - 60, height - 60, 'attack').setInteractive().setScale(scaleRatio + 0.8).setScrollFactor(0);
        attackButton.on('pointerdown', control_attack);
        attackButton.on('pointerup', control_stopXY);



        //ฟังก์ชั่นของแต่ละปุ่ม
        function control_right() {
            player.setVelocityX(150);
            player.setAngle(90);

            reticle.setVelocityX(150);
            reticle.x = player.x + 100
            reticle.y = player.y

        }
        function control_left() {
            player.setVelocityX(-150);
            player.setAngle(270)

            reticle.setVelocityX(-150);
            reticle.x = player.x - 100
            reticle.y = player.y
        }
        function control_up() {
            player.setVelocityY(-150);
            player.setAngle(0)

            reticle.setVelocityY(-150);
            reticle.x = player.x
            reticle.y = player.y - 100

        }
        function control_down() {
            player.setVelocityY(150);
            player.setAngle(180)

            reticle.setVelocityY(150);
            reticle.x = player.x
            reticle.y = player.y + 80;
        }
        function control_up_right() {
            player.setVelocityX(150);
            player.setVelocityY(-150);
            player.setAngle(45)

            reticle.setVelocityX(150);
            reticle.setVelocityY(-150);
            reticle.x = player.x + 80;
            reticle.y = player.y - 60;
        }
        function control_up_left() {
            player.setVelocityX(-150);
            player.setVelocityY(-150);
            player.setAngle(300)

            reticle.setVelocityX(-150);
            reticle.setVelocityY(-150);
            reticle.x = player.x - 100;
            reticle.y = player.y - 100;
        }
        function control_down_left() {
            player.setVelocityX(-150);
            player.setVelocityY(150);
            player.setAngle(225)

            reticle.setVelocityX(-150);
            reticle.setVelocityY(150);
            reticle.x = player.x - 100;
            reticle.y = player.y + 80;
        }
        function control_down_right() {
            player.setVelocityX(150);
            player.setVelocityY(150);
            player.setAngle(120)

            reticle.setVelocityX(150);
            reticle.setVelocityY(150);
            reticle.x = player.x + 100;
            reticle.y = player.y + 80;
        }

        //ฟังก์ชั่นหยุดตัวละครเวลาเดินในแกน X และ แกน y
        function control_stopX() {
            player.setVelocityX(0);
            reticle.setVelocityX(0);

        }
        function control_stopY() {
            player.setVelocityY(0);
            reticle.setVelocityY(0);
        }
        function control_stopXY() {
            player.setVelocityX(0);
            player.setVelocityY(0);

            reticle.setVelocityX(0);
            reticle.setVelocityY(0);
        }
        // Set sprite variables

        player.health = 3;
        boss.health = 3;
        boss.lastFired = 0;

        //ฟังก์ชั่นปุ่มยิง 
        function control_attack() {
            console.log("fire");

          let  bullet = playerBullets.get()

            if (bullet) {
                bullet.fire(player.x, player.y, player.rotation)
                phasers.physics.add.collider(boss, bullet, enemyHitCallback);
            }

        }

    }

    update() {
        enemyFire(boss, player, phasers);
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

}

function enemyHitCallback(bossHit, bulletHit) {
    // Reduce health of boss

    if (bulletHit.active && bossHit.active) {
        bossHit.health = bossHit.health - 1;
        console.log("Boss hp: ", bossHit.health);

        // Kill enemy if health <= 0
        if (bossHit.health <= 0) {
            bossHit.setActive(false).setVisible(false);
        }

        // Destroy bullet
        bulletHit.setActive(false).setVisible(false);
    }
}

function playerHitCallback(playerHit, bulletHit) {
    // Reduce health of player
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

function enemyFire(boss, player, gameObject) {
    boss.lastFired += 50
    if (boss.active === false) {
        return;
    } else {
        if ((time + boss.lastFired) >= 1000) {
            boss.lastFired = time;

            // Get bullet from bullets group
            var bullet = enemyBullets.get().setActive(true).setVisible(true);

            if (bullet) {

                bullet.fire(boss.x, boss.y, boss.rotation + Phaser.Math.Between(0, 300));

                // Add collider between bullet and player
                gameObject.physics.add.collider(player, bullet, playerHitCallback);
            }
        }
    }

}


export default move_mobile;


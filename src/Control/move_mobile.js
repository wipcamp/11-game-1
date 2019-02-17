import 'phaser';
import responsive from "./../core/responsive";
import Bullets from './../core/Bullet'
import Player from './../Player/Player'

let phasers;
let button;
let x;
let y;
let player;
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
let playerFunction
let throws

class move_mobile extends Phaser.Scene {
    constructor(config) {
        super(config.scene);
        this.scene = config.scene;
        this.scene.add.existing(this);
        phasers = config.scene;
    }

    preload() {
           
        
    }
    create() {

        let Bullet = new Bullets(this)
        Bullet.create()

        throws = phasers.sound.add('throw',  true);

        let width = phasers.scene.scene.physics.world.bounds.width;
        let height = phasers.scene.scene.physics.world.bounds.height;
        let x = phasers.scene.scene

        phasers.physics.world.setBounds(0, 0, 1600, 1200);

        let responsives = new responsive(width, height)
        responsives.check(height, width)
        let scaleRatio = responsives.getScale()

        //ใส่ปุ่มในมือถือ และ ล็อกตัวปุ่มทั้งหมด
        // .setScrollFactor(0) = A sprite, doesn't scroll with the camera (is fixed to camera)  
        rightButton = phasers.physics.add.image(scaleRatio * 320, height - 65, 'right').setInteractive().setScale(scaleRatio + 0.5).setScrollFactor(0);
        rightButton.on('pointerdown', this.control_right); //pointerdown คือ เมื่อกด จะให้เกิดอะไรซักอย่าง โดยเรียกใช้ฟังก์ชั่น
        rightButton.on('pointerup', this.control_stopX); //pointerup คือ เมื่อไม่ได้กดปุ่ม หรือ ปล่อย จะให้เกิดอะไรซักอย่าง โดยเรียกใช้ฟังก์ชั่น

        leftButton = phasers.add.image(scaleRatio * 80, height - 65, 'left').setInteractive().setScale(scaleRatio + 0.5).setScrollFactor(0);
        leftButton.on('pointerdown', this.control_left);
        leftButton.on('pointerup', this.control_stopX);

        upButton = phasers.physics.add.image(scaleRatio * 200, height - 100, 'up').setInteractive().setScale(scaleRatio + 0.5).setScrollFactor(0);
        upButton.on('pointerdown', this.control_up);
        upButton.on('pointerup', this.control_stopY);
        // upButton.setCollideWorldBounds(true)

        downButton = phasers.add.image(scaleRatio * 200, height - 30, 'down').setInteractive().setScale(scaleRatio + 0.5).setScrollFactor(0);
        downButton.on('pointerdown', this.control_down);
        downButton.on('pointerup', this.control_stopY);

        up_left_Button = phasers.physics.add.image(scaleRatio * 320, height - 100, 'up_right').setInteractive().setScale(scaleRatio + 0.5).setScrollFactor(0);
        up_left_Button.on('pointerdown', this.control_up_right);
        up_left_Button.on('pointerup', this.control_stopXY);
        up_left_Button.setCollideWorldBounds(true)

        up_right_Button = phasers.physics.add.image(scaleRatio * 80, height - 100, 'up_left').setInteractive().setScale(scaleRatio + 0.5).setScrollFactor(0);
        up_right_Button.on('pointerdown', this.control_up_left);
        up_right_Button.on('pointerup', this.control_stopXY);
        up_right_Button.setCollideWorldBounds(true)

        down_left_Button = phasers.add.image(scaleRatio * 80, height - 30, 'down_left').setInteractive().setScale(scaleRatio + 0.5).setScrollFactor(0);
        down_left_Button.on('pointerdown', this.control_down_left);
        down_left_Button.on('pointerup', this.control_stopXY);

        down_right_Button = phasers.add.image(scaleRatio * 320, height - 30, 'down_right').setInteractive().setScale(scaleRatio + 0.5).setScrollFactor(0);
        down_right_Button.on('pointerdown', this.control_down_right);
        down_right_Button.on('pointerup', this.control_stopXY);

        attackButton = phasers.add.image(width - 60, height - 60, 'attack').setInteractive().setScale(scaleRatio + 0.8).setScrollFactor(0);
        attackButton.on('pointerdown', this.control_attack);
        attackButton.on('pointerup', this.control_stopXY);

    }

    update() {


    }

    getPlayer(p) {
        player = p.getPlayer()
        reticle = p.getReticle()
        playerFunction = p
    }

    getReticle(r) {
        reticle = r.getReticle()
    }

    // resize(width, height) {
    //     phasers.cameras.resize(width, height);
    //     this.bg.setDisplaySize(0, 0);
    // }

    //ฟังก์ชั่นของแต่ละปุ่ม
    control_right() {
        player.setVelocityX(150);
        player.setAngle(90);

        reticle.setVelocityX(150);
        reticle.x = player.x + 100
        reticle.y = player.y

    }
    control_left() {
        player.setVelocityX(-150);
        player.setAngle(270)

        reticle.setVelocityX(-150);
        reticle.x = player.x - 100
        reticle.y = player.y
    }
    control_up() {
        player.setVelocityY(-150);
        player.setAngle(0)

        reticle.setVelocityY(-150);
        reticle.x = player.x
        reticle.y = player.y - 100

    }
    control_down() {
        player.setVelocityY(150);
        player.setAngle(180)

        reticle.setVelocityY(150);
        reticle.x = player.x
        reticle.y = player.y + 80;
    }
    control_up_right() {
        player.setVelocityX(150);
        player.setVelocityY(-150);
        player.setAngle(45)

        reticle.setVelocityX(150);
        reticle.setVelocityY(-150);
        reticle.x = player.x + 80;
        reticle.y = player.y - 60;
    }
    control_up_left() {
        player.setVelocityX(-150);
        player.setVelocityY(-150);
        player.setAngle(300)

        reticle.setVelocityX(-150);
        reticle.setVelocityY(-150);
        reticle.x = player.x - 100;
        reticle.y = player.y - 100;
    }
    control_down_left() {
        player.setVelocityX(-150);
        player.setVelocityY(150);
        player.setAngle(225)

        reticle.setVelocityX(-150);
        reticle.setVelocityY(150);
        reticle.x = player.x - 100;
        reticle.y = player.y + 80;
    }
    control_down_right() {
        player.setVelocityX(150);
        player.setVelocityY(150);
        player.setAngle(120)

        reticle.setVelocityX(150);
        reticle.setVelocityY(150);
        reticle.x = player.x + 100;
        reticle.y = player.y + 80;
    }

    //ฟังก์ชั่นหยุดตัวละครเวลาเดินในแกน X และ แกน y
    control_stopX() {
        player.setVelocityX(0);
        reticle.setVelocityX(0);

    }
    control_stopY() {
        player.setVelocityY(0);
        reticle.setVelocityY(0);
    }
    control_stopXY() {
        player.setVelocityX(0);
        player.setVelocityY(0);

        reticle.setVelocityX(0);
        reticle.setVelocityY(0);
    }

    //ฟังก์ชั่นปุ่มยิง 
    control_attack() {        
        playerFunction.fire();
        throws.play({ loop: false });
    }
}

export default move_mobile;


import 'phaser';
import responsive from "./responsive";
import joystick from "./virtualjoystick"

let phasers;
let player;
let up;
let down;
let right;
let left;
let button;
let cursors;
let x;
let y;

let rightButton
let leftButton
let down_right_Button
let up_right_Button
let up_left_Button
let down_left_Button
let upButton
let downButton


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

        this.load.image('player', '../../images/player.png');
        this.load.image('bg', '../../images/bg.png');
    }
    create() {
        let width = phasers.scene.scene.physics.world.bounds.width;
        let height = phasers.scene.scene.physics.world.bounds.height;
        x = width / 3
        y = height / 3
        console.log(height,width)
        let responsives = new responsive(width, height)
        responsives.check(height, width)
        let scaleRatio = responsives.getScale()

        // let bg = phasers.add.image(x, y, 'bg');

        //กำหนดตัวละครเป็น physics
        player = phasers.physics.add.image(x, y, 'player');
        player.setScale(0.8);

        //ไม่ให้ player ออกนอกโลก
        player.setCollideWorldBounds(true);
        phasers.cameras.main.startFollow(player, true, 1, 1);
        // phasers.cam2.startFollow(player, true, 1, 1);

        //ใส่ปุ่มในมือถือ และ ล็อกตัวปุ่มทั้งหมด
        // .setScrollFactor(0) = A sprite, doesn't scroll with the camera (is fixed to camera)  
        phasers.add.image(400, 200, 'hahah')

        rightButton = phasers.add.image(180, 280, 'right').setInteractive().setScale(scaleRatio, scaleRatio).setScrollFactor(0);
        rightButton.on('pointerdown', control_right); //pointerdown คือ เมื่อกด จะให้เกิดอะไรซักอย่าง โดยเรียกใช้ฟังก์ชั่น
        rightButton.on('pointerup', control_stopX); //pointerup คือ เมื่อไม่ได้กดปุ่ม หรือ ปล่อย จะให้เกิดอะไรซักอย่าง โดยเรียกใช้ฟังก์ชั่น

        leftButton = phasers.add.image(60, 280, 'left').setInteractive().setScale(scaleRatio, scaleRatio).setScrollFactor(0);
        leftButton.on('pointerdown', control_left);
        leftButton.on('pointerup', control_stopX);

        upButton = phasers.physics.add.image(120, 240, 'up').setInteractive().setScale(scaleRatio, scaleRatio).setScrollFactor(0);
        upButton.on('pointerdown', control_up);
        upButton.on('pointerup', control_stopY);

        downButton = phasers.add.image(120, 320, 'down').setInteractive().setScale(scaleRatio, scaleRatio).setScrollFactor(0);
        downButton.on('pointerdown', control_down);
        downButton.on('pointerup', control_stopY);

        up_left_Button = phasers.add.image(180, 240, 'up_right').setInteractive().setScale(scaleRatio, scaleRatio).setScrollFactor(0);
        up_left_Button.on('pointerdown', control_up_left);
        up_left_Button.on('pointerup', control_stopXY);

        up_right_Button = phasers.add.image(60, 240, 'up_left').setInteractive().setScale(scaleRatio, scaleRatio).setScrollFactor(0);
        up_right_Button.on('pointerdown', control_up_right);
        up_right_Button.on('pointerup', control_stopXY);

        down_left_Button = phasers.add.image(60, 320, 'down_left').setInteractive().setScale(scaleRatio, scaleRatio).setScrollFactor(0);
        down_left_Button.on('pointerdown', control_down_left);
        down_left_Button.on('pointerup', control_stopXY);

        down_right_Button = phasers.add.image(180, 320, 'down_right').setInteractive().setScale(scaleRatio, scaleRatio).setScrollFactor(0);
        down_right_Button.on('pointerdown', control_down_right);
        down_right_Button.on('pointerup', control_stopXY);

        //ฟังก์ชั่นของแต่ละปุ่ม
        function control_right() {
            player.setVelocityX(150);
        }
        function control_left() {
            player.setVelocityX(-150);
        }
        function control_up() {
            player.setVelocityY(-150);
        }
        function control_down() {
            player.setVelocityY(150);
        }
        function control_up_left() {
            player.setVelocityX(150);
            player.setVelocityY(-150);
        }
        function control_up_right() {
            player.setVelocityX(-150);
            player.setVelocityY(-150);
        }
        function control_down_left() {
            player.setVelocityX(-150);
            player.setVelocityY(150);
        }
        function control_down_right() {
            player.setVelocityX(150);
            player.setVelocityY(150);
        }

        //ฟังก์ชั่นหยุดตัวละครเวลาเดินในแกน X และ แกน y
        function control_stopX() {
            player.setVelocityX(0);
        }
        function control_stopY() {
            player.setVelocityY(0);
        }
        function control_stopXY() {
            player.setVelocityX(0);
            player.setVelocityY(0);
        }

        // var controlConfig = {
        //     camera: phasers.cameras.main,
        //     left: leftButton.left,
        //     right: rightButton.right,
        //     up: upButton.up,
        //     down: downButton.down,
        //     acceleration: 0.06,
        //     drag: 0.0005,
        //     maxSpeed: 1.0
        // };

        // var controls = new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig);



    }

    update() {


    }


}


export default move_mobile;

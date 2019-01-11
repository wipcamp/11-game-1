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
        let x = phasers.scene.scene
        console.log(phasers)

        console.log(height, width)



        let responsives = new responsive(width, height)
        responsives.check(height, width)
        let scaleRatio = responsives.getScale()

        // let bg = phasers.add.image(x, y, 'bg');

        //กำหนดตัวละครเป็น physics
        player = phasers.physics.add.image(400, 600, 'player');
        player.setScale(scaleRatio + 0.4);

        //ไม่ให้ player ออกนอกโลก
        player.setCollideWorldBounds(true);
        // cameras.setCollideWorldBounds(true);

        //กล้องตามตัว player
        phasers.cameras.main.setBounds(0, 0, 900, 900)
        phasers.cameras.main.startFollow(player, true, 1, 1);
        // phasers.cameras.main.setZoom(2);



        //ใส่ปุ่มในมือถือ และ ล็อกตัวปุ่มทั้งหมด
        // .setScrollFactor(0) = A sprite, doesn't scroll with the camera (is fixed to camera)  
        // rightButton = phasers.physics.add.image(scaleRatio * 320, scaleRatio * 520, 'right').setInteractive().setScale(scaleRatio + 0.5).setScrollFactor(0);
        // rightButton.on('pointerdown', control_right); //pointerdown คือ เมื่อกด จะให้เกิดอะไรซักอย่าง โดยเรียกใช้ฟังก์ชั่น
        // rightButton.on('pointerup', control_stopX); //pointerup คือ เมื่อไม่ได้กดปุ่ม หรือ ปล่อย จะให้เกิดอะไรซักอย่าง โดยเรียกใช้ฟังก์ชั่น

        // leftButton = phasers.add.image(scaleRatio * 80, scaleRatio * 520, 'left').setInteractive().setScale(scaleRatio + 0.5).setScrollFactor(0);
        // leftButton.on('pointerdown', control_left);
        // leftButton.on('pointerup', control_stopX);

        // upButton = phasers.physics.add.image(scaleRatio * 200, scaleRatio * 440, 'up').setInteractive().setScale(scaleRatio + 0.5).setScrollFactor(0);
        // upButton.on('pointerdown', control_up);
        // upButton.on('pointerup', control_stopY);
        // upButton.setCollideWorldBounds(true)

        // downButton = phasers.add.image(scaleRatio * 200, (scaleRatio * 590), 'down').setInteractive().setScale(scaleRatio + 0.5).setScrollFactor(0);
        // downButton.on('pointerdown', control_down);
        // downButton.on('pointerup', control_stopY);

        // up_left_Button = phasers.physics.add.image(scaleRatio * 320, scaleRatio * 440, 'up_right').setInteractive().setScale(scaleRatio + 0.5).setScrollFactor(0);
        // up_left_Button.on('pointerdown', control_up_left);
        // up_left_Button.on('pointerup', control_stopXY);
        // up_left_Button.setCollideWorldBounds(true)

        // up_right_Button = phasers.physics.add.image(scaleRatio * 80, scaleRatio * 440, 'up_left').setInteractive().setScale(scaleRatio + 0.5).setScrollFactor(0);
        // up_right_Button.on('pointerdown', control_up_right);
        // up_right_Button.on('pointerup', control_stopXY);
        // up_right_Button.setCollideWorldBounds(true)

        // down_left_Button = phasers.add.image(scaleRatio * 80, scaleRatio * 590, 'down_left').setInteractive().setScale(scaleRatio + 0.5).setScrollFactor(0);
        // down_left_Button.on('pointerdown', control_down_left);
        // down_left_Button.on('pointerup', control_stopXY);

        // down_right_Button = phasers.add.image(scaleRatio * 320, scaleRatio * 590, 'down_right').setInteractive().setScale(scaleRatio + 0.5).setScrollFactor(0);
        // down_right_Button.on('pointerdown', control_down_right);
        // down_right_Button.on('pointerup', control_stopXY);

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

        function resize(width, height) {
            phasers.background.width = width;
            phasers.background.height = height;

            phasers.scaleSprite(phasers.upButton, width, height / 3, 50, 1);
            phasers.upButton.x = phasers.world.centerX;
            phasers.upButton.y = phasers.world.centerY - height / 3;

            phasers.scaleSprite(phasers.downButtonButton, width, height / 3, 50, 1);
            phasers.downButton.x = phasers.world.centerX;
            phasers.downButton.y = phasers.world.centerY;

            phasers.scaleSprite(phasers.leftButtonButton, width, height / 3, 50, 0.5);
            phasers.lefttButtonButton.x = phasers.world.centerX - phasers.leftButtonButton.width / 2;
            phasers.leftButton.y = phasers.world.centerY + height / 3;

            phasers.scaleSprite(phasers.rightButton, width, height / 3, 50, 0.5);
            phasers.rightButton.x = phasers.world.centerX + phasers.rightButton.width / 2;
            phasers.rightButton.y = phasers.world.centerY + height / 3;
        }

    }

    update() {
        if (window.screen.width == 740 && window.screen.height == 360) {
            rightButton = phasers.physics.add.image(180, 280, 'right').setInteractive().setScale(1).setScrollFactor(0);
            rightButton.on('pointerdown', control_right); //pointerdown คือ เมื่อกด จะให้เกิดอะไรซักอย่าง โดยเรียกใช้ฟังก์ชั่น
            rightButton.on('pointerup', control_stopX); //pointerup คือ เมื่อไม่ได้กดปุ่ม หรือ ปล่อย จะให้เกิดอะไรซักอย่าง โดยเรียกใช้ฟังก์ชั่น

            leftButton = phasers.add.image(60, 280, 'left').setInteractive().setScale(1).setScrollFactor(0);
            leftButton.on('pointerdown', control_left);
            leftButton.on('pointerup', control_stopX);

            upButton = phasers.physics.add.image(120, 240, 'up').setInteractive().setScale(1).setScrollFactor(0);
            upButton.on('pointerdown', control_up);
            upButton.on('pointerup', control_stopY);
            upButton.setCollideWorldBounds(true)

            downButton = phasers.add.image(120, 320, 'down').setInteractive().setScale(1).setScrollFactor(0);
            downButton.on('pointerdown', control_down);
            downButton.on('pointerup', control_stopY);

            up_left_Button = phasers.physics.add.image(180, 240, 'up_right').setInteractive().setScale(1).setScrollFactor(0);
            up_left_Button.on('pointerdown', control_up_left);
            up_left_Button.on('pointerup', control_stopXY);
            up_left_Button.setCollideWorldBounds(true)

            up_right_Button = phasers.physics.add.image(60, 240, 'up_left').setInteractive().setScale(1).setScrollFactor(0);
            up_right_Button.on('pointerdown', control_up_right);
            up_right_Button.on('pointerup', control_stopXY);
            up_right_Button.setCollideWorldBounds(true)

            down_left_Button = phasers.add.image(60, 320, 'down_left').setInteractive().setScale(1).setScrollFactor(0);
            down_left_Button.on('pointerdown', control_down_left);
            down_left_Button.on('pointerup', control_stopXY);

            down_right_Button = phasers.add.image(180, 320, 'down_right').setInteractive().setScale(1).setScrollFactor(0);
            down_right_Button.on('pointerdown', control_down_right);
            down_right_Button.on('pointerup', control_stopXY);    
        }
        if (window.screen.width == 640 && window.screen.height == 360) {
            rightButton = phasers.physics.add.image(180, 280, 'right').setInteractive().setScale(1).setScrollFactor(0);
            rightButton.on('pointerdown', control_right); //pointerdown คือ เมื่อกด จะให้เกิดอะไรซักอย่าง โดยเรียกใช้ฟังก์ชั่น
            rightButton.on('pointerup', control_stopX); //pointerup คือ เมื่อไม่ได้กดปุ่ม หรือ ปล่อย จะให้เกิดอะไรซักอย่าง โดยเรียกใช้ฟังก์ชั่น

            leftButton = phasers.add.image(60, 280, 'left').setInteractive().setScale(1).setScrollFactor(0);
            leftButton.on('pointerdown', control_left);
            leftButton.on('pointerup', control_stopX);

            upButton = phasers.physics.add.image(120, 240, 'up').setInteractive().setScale(1).setScrollFactor(0);
            upButton.on('pointerdown', control_up);
            upButton.on('pointerup', control_stopY);
            upButton.setCollideWorldBounds(true)

            downButton = phasers.add.image(120, 320, 'down').setInteractive().setScale(1).setScrollFactor(0);
            downButton.on('pointerdown', control_down);
            downButton.on('pointerup', control_stopY);

            up_left_Button = phasers.physics.add.image(180, 240, 'up_right').setInteractive().setScale(1).setScrollFactor(0);
            up_left_Button.on('pointerdown', control_up_left);
            up_left_Button.on('pointerup', control_stopXY);
            up_left_Button.setCollideWorldBounds(true)

            up_right_Button = phasers.physics.add.image(60, 240, 'up_left').setInteractive().setScale(1).setScrollFactor(0);
            up_right_Button.on('pointerdown', control_up_right);
            up_right_Button.on('pointerup', control_stopXY);
            up_right_Button.setCollideWorldBounds(true)

            down_left_Button = phasers.add.image(60, 320, 'down_left').setInteractive().setScale(1).setScrollFactor(0);
            down_left_Button.on('pointerdown', control_down_left);
            down_left_Button.on('pointerup', control_stopXY);

            down_right_Button = phasers.add.image(180, 320, 'down_right').setInteractive().setScale(1).setScrollFactor(0);
            down_right_Button.on('pointerdown', control_down_right);
            down_right_Button.on('pointerup', control_stopXY);    
        }
        if (window.screen.width == 846 && window.screen.height == 412) {
            rightButton = phasers.physics.add.image(180, 330, 'right').setInteractive().setScale(1).setScrollFactor(0);
            rightButton.on('pointerdown', control_right); //pointerdown คือ เมื่อกด จะให้เกิดอะไรซักอย่าง โดยเรียกใช้ฟังก์ชั่น
            rightButton.on('pointerup', control_stopX); //pointerup คือ เมื่อไม่ได้กดปุ่ม หรือ ปล่อย จะให้เกิดอะไรซักอย่าง โดยเรียกใช้ฟังก์ชั่น

            leftButton = phasers.add.image(60, 330, 'left').setInteractive().setScale(1).setScrollFactor(0);
            leftButton.on('pointerdown', control_left);
            leftButton.on('pointerup', control_stopX);

            upButton = phasers.physics.add.image(120, 290, 'up').setInteractive().setScale(1).setScrollFactor(0);
            upButton.on('pointerdown', control_up);
            upButton.on('pointerup', control_stopY);
            upButton.setCollideWorldBounds(true)

            downButton = phasers.add.image(120, 370, 'down').setInteractive().setScale(1).setScrollFactor(0);
            downButton.on('pointerdown', control_down);
            downButton.on('pointerup', control_stopY);

            up_left_Button = phasers.physics.add.image(180, 290, 'up_right').setInteractive().setScale(1).setScrollFactor(0);
            up_left_Button.on('pointerdown', control_up_left);
            up_left_Button.on('pointerup', control_stopXY);
            up_left_Button.setCollideWorldBounds(true)

            up_right_Button = phasers.physics.add.image(60, 290, 'up_left').setInteractive().setScale(1).setScrollFactor(0);
            up_right_Button.on('pointerdown', control_up_right);
            up_right_Button.on('pointerup', control_stopXY);
            up_right_Button.setCollideWorldBounds(true)

            down_left_Button = phasers.add.image(60, 370, 'down_left').setInteractive().setScale(1).setScrollFactor(0);
            down_left_Button.on('pointerdown', control_down_left);
            down_left_Button.on('pointerup', control_stopXY);

            down_right_Button = phasers.add.image(180, 370, 'down_right').setInteractive().setScale(1).setScrollFactor(0);
            down_right_Button.on('pointerdown', control_down_right);
            down_right_Button.on('pointerup', control_stopXY);    
        }
        if(window.screen.width == 896 && window.screen.height == 414){
            rightButton = phasers.physics.add.image(180, 350, 'right').setInteractive().setScale(1).setScrollFactor(0);
            rightButton.on('pointerdown', control_right); //pointerdown คือ เมื่อกด จะให้เกิดอะไรซักอย่าง โดยเรียกใช้ฟังก์ชั่น
            rightButton.on('pointerup', control_stopX); //pointerup คือ เมื่อไม่ได้กดปุ่ม หรือ ปล่อย จะให้เกิดอะไรซักอย่าง โดยเรียกใช้ฟังก์ชั่น

            leftButton = phasers.add.image(60, 350, 'left').setInteractive().setScale(1).setScrollFactor(0);
            leftButton.on('pointerdown', control_left);
            leftButton.on('pointerup', control_stopX);

            upButton = phasers.physics.add.image(120, 315, 'up').setInteractive().setScale(1).setScrollFactor(0);
            upButton.on('pointerdown', control_up);
            upButton.on('pointerup', control_stopY);
            upButton.setCollideWorldBounds(true)

            downButton = phasers.add.image(120, 385, 'down').setInteractive().setScale(1).setScrollFactor(0);
            downButton.on('pointerdown', control_down);
            downButton.on('pointerup', control_stopY);

            up_left_Button = phasers.physics.add.image(180, 315, 'up_right').setInteractive().setScale(1).setScrollFactor(0);
            up_left_Button.on('pointerdown', control_up_left);
            up_left_Button.on('pointerup', control_stopXY);
            up_left_Button.setCollideWorldBounds(true)

            up_right_Button = phasers.physics.add.image(60, 315, 'up_left').setInteractive().setScale(1).setScrollFactor(0);
            up_right_Button.on('pointerdown', control_up_right);
            up_right_Button.on('pointerup', control_stopXY);
            up_right_Button.setCollideWorldBounds(true)

            down_left_Button = phasers.add.image(60, 385, 'down_left').setInteractive().setScale(1).setScrollFactor(0);
            down_left_Button.on('pointerdown', control_down_left);
            down_left_Button.on('pointerup', control_stopXY);

            down_right_Button = phasers.add.image(180, 385, 'down_right').setInteractive().setScale(1).setScrollFactor(0);
            down_right_Button.on('pointerdown', control_down_right);
            down_right_Button.on('pointerup', control_stopXY);    

        }
        if(window.screen.width == 812 && window.screen.height == 375){
            rightButton = phasers.physics.add.image(180, 305, 'right').setInteractive().setScale(1).setScrollFactor(0);
            rightButton.on('pointerdown', control_right); //pointerdown คือ เมื่อกด จะให้เกิดอะไรซักอย่าง โดยเรียกใช้ฟังก์ชั่น
            rightButton.on('pointerup', control_stopX); //pointerup คือ เมื่อไม่ได้กดปุ่ม หรือ ปล่อย จะให้เกิดอะไรซักอย่าง โดยเรียกใช้ฟังก์ชั่น

            leftButton = phasers.add.image(60, 305, 'left').setInteractive().setScale(1).setScrollFactor(0);
            leftButton.on('pointerdown', control_left);
            leftButton.on('pointerup', control_stopX);

            upButton = phasers.physics.add.image(120, 270, 'up').setInteractive().setScale(1).setScrollFactor(0);
            upButton.on('pointerdown', control_up);
            upButton.on('pointerup', control_stopY);
            upButton.setCollideWorldBounds(true)

            downButton = phasers.add.image(120, 340, 'down').setInteractive().setScale(1).setScrollFactor(0);
            downButton.on('pointerdown', control_down);
            downButton.on('pointerup', control_stopY);

            up_left_Button = phasers.physics.add.image(180, 270, 'up_right').setInteractive().setScale(1).setScrollFactor(0);
            up_left_Button.on('pointerdown', control_up_left);
            up_left_Button.on('pointerup', control_stopXY);
            up_left_Button.setCollideWorldBounds(true)

            up_right_Button = phasers.physics.add.image(60, 270, 'up_left').setInteractive().setScale(1).setScrollFactor(0);
            up_right_Button.on('pointerdown', control_up_right);
            up_right_Button.on('pointerup', control_stopXY);
            up_right_Button.setCollideWorldBounds(true)

            down_left_Button = phasers.add.image(60, 340, 'down_left').setInteractive().setScale(1).setScrollFactor(0);
            down_left_Button.on('pointerdown', control_down_left);
            down_left_Button.on('pointerup', control_stopXY);

            down_right_Button = phasers.add.image(180, 340, 'down_right').setInteractive().setScale(1).setScrollFactor(0);
            down_right_Button.on('pointerdown', control_down_right);
            down_right_Button.on('pointerup', control_stopXY);    

        }
        if(window.screen.width == 731 && window.screen.height == 411){
            rightButton = phasers.physics.add.image(180, 350, 'right').setInteractive().setScale(1).setScrollFactor(0);
            rightButton.on('pointerdown', control_right); //pointerdown คือ เมื่อกด จะให้เกิดอะไรซักอย่าง โดยเรียกใช้ฟังก์ชั่น
            rightButton.on('pointerup', control_stopX); //pointerup คือ เมื่อไม่ได้กดปุ่ม หรือ ปล่อย จะให้เกิดอะไรซักอย่าง โดยเรียกใช้ฟังก์ชั่น

            leftButton = phasers.add.image(60, 350, 'left').setInteractive().setScale(1).setScrollFactor(0);
            leftButton.on('pointerdown', control_left);
            leftButton.on('pointerup', control_stopX);

            upButton = phasers.physics.add.image(120, 315, 'up').setInteractive().setScale(1).setScrollFactor(0);
            upButton.on('pointerdown', control_up);
            upButton.on('pointerup', control_stopY);
            upButton.setCollideWorldBounds(true)

            downButton = phasers.add.image(120, 385, 'down').setInteractive().setScale(1).setScrollFactor(0);
            downButton.on('pointerdown', control_down);
            downButton.on('pointerup', control_stopY);

            up_left_Button = phasers.physics.add.image(180, 315, 'up_right').setInteractive().setScale(1).setScrollFactor(0);
            up_left_Button.on('pointerdown', control_up_left);
            up_left_Button.on('pointerup', control_stopXY);
            up_left_Button.setCollideWorldBounds(true)

            up_right_Button = phasers.physics.add.image(60, 315, 'up_left').setInteractive().setScale(1).setScrollFactor(0);
            up_right_Button.on('pointerdown', control_up_right);
            up_right_Button.on('pointerup', control_stopXY);
            up_right_Button.setCollideWorldBounds(true)

            down_left_Button = phasers.add.image(60, 385, 'down_left').setInteractive().setScale(1).setScrollFactor(0);
            down_left_Button.on('pointerdown', control_down_left);
            down_left_Button.on('pointerup', control_stopXY);

            down_right_Button = phasers.add.image(180, 385, 'down_right').setInteractive().setScale(1).setScrollFactor(0);
            down_right_Button.on('pointerdown', control_down_right);
            down_right_Button.on('pointerup', control_stopXY);    

        }
        if(window.screen.width == 823 && window.screen.height == 411){
            rightButton = phasers.physics.add.image(180, 350, 'right').setInteractive().setScale(1).setScrollFactor(0);
            rightButton.on('pointerdown', control_right); //pointerdown คือ เมื่อกด จะให้เกิดอะไรซักอย่าง โดยเรียกใช้ฟังก์ชั่น
            rightButton.on('pointerup', control_stopX); //pointerup คือ เมื่อไม่ได้กดปุ่ม หรือ ปล่อย จะให้เกิดอะไรซักอย่าง โดยเรียกใช้ฟังก์ชั่น

            leftButton = phasers.add.image(60, 350, 'left').setInteractive().setScale(1).setScrollFactor(0);
            leftButton.on('pointerdown', control_left);
            leftButton.on('pointerup', control_stopX);

            upButton = phasers.physics.add.image(120, 315, 'up').setInteractive().setScale(1).setScrollFactor(0);
            upButton.on('pointerdown', control_up);
            upButton.on('pointerup', control_stopY);
            upButton.setCollideWorldBounds(true)

            downButton = phasers.add.image(120, 385, 'down').setInteractive().setScale(1).setScrollFactor(0);
            downButton.on('pointerdown', control_down);
            downButton.on('pointerup', control_stopY);

            up_left_Button = phasers.physics.add.image(180, 315, 'up_right').setInteractive().setScale(1).setScrollFactor(0);
            up_left_Button.on('pointerdown', control_up_left);
            up_left_Button.on('pointerup', control_stopXY);
            up_left_Button.setCollideWorldBounds(true)

            up_right_Button = phasers.physics.add.image(60, 315, 'up_left').setInteractive().setScale(1).setScrollFactor(0);
            up_right_Button.on('pointerdown', control_up_right);
            up_right_Button.on('pointerup', control_stopXY);
            up_right_Button.setCollideWorldBounds(true)

            down_left_Button = phasers.add.image(60, 385, 'down_left').setInteractive().setScale(1).setScrollFactor(0);
            down_left_Button.on('pointerdown', control_down_left);
            down_left_Button.on('pointerup', control_stopXY);

            down_right_Button = phasers.add.image(180, 385, 'down_right').setInteractive().setScale(1).setScrollFactor(0);
            down_right_Button.on('pointerdown', control_down_right);
            down_right_Button.on('pointerup', control_stopXY);    

        }
        if(window.screen.width == 568 && window.screen.height == 320){
            rightButton = phasers.physics.add.image(180, 255, 'right').setInteractive().setScale(1).setScrollFactor(0);
            rightButton.on('pointerdown', control_right); //pointerdown คือ เมื่อกด จะให้เกิดอะไรซักอย่าง โดยเรียกใช้ฟังก์ชั่น
            rightButton.on('pointerup', control_stopX); //pointerup คือ เมื่อไม่ได้กดปุ่ม หรือ ปล่อย จะให้เกิดอะไรซักอย่าง โดยเรียกใช้ฟังก์ชั่น

            leftButton = phasers.add.image(60, 255, 'left').setInteractive().setScale(1).setScrollFactor(0);
            leftButton.on('pointerdown', control_left);
            leftButton.on('pointerup', control_stopX);

            upButton = phasers.physics.add.image(120, 220, 'up').setInteractive().setScale(1).setScrollFactor(0);
            upButton.on('pointerdown', control_up);
            upButton.on('pointerup', control_stopY);
            upButton.setCollideWorldBounds(true)

            downButton = phasers.add.image(120, 290, 'down').setInteractive().setScale(1).setScrollFactor(0);
            downButton.on('pointerdown', control_down);
            downButton.on('pointerup', control_stopY);

            up_left_Button = phasers.physics.add.image(180, 220, 'up_right').setInteractive().setScale(1).setScrollFactor(0);
            up_left_Button.on('pointerdown', control_up_left);
            up_left_Button.on('pointerup', control_stopXY);
            up_left_Button.setCollideWorldBounds(true)

            up_right_Button = phasers.physics.add.image(60, 220, 'up_left').setInteractive().setScale(1).setScrollFactor(0);
            up_right_Button.on('pointerdown', control_up_right);
            up_right_Button.on('pointerup', control_stopXY);
            up_right_Button.setCollideWorldBounds(true)

            down_left_Button = phasers.add.image(60, 290, 'down_left').setInteractive().setScale(1).setScrollFactor(0);
            down_left_Button.on('pointerdown', control_down_left);
            down_left_Button.on('pointerup', control_stopXY);

            down_right_Button = phasers.add.image(180, 290, 'down_right').setInteractive().setScale(1).setScrollFactor(0);
            down_right_Button.on('pointerdown', control_down_right);
            down_right_Button.on('pointerup', control_stopXY);    

        }
        if(window.screen.width == 667 && window.screen.height == 375){
            rightButton = phasers.physics.add.image(180, 310, 'right').setInteractive().setScale(1).setScrollFactor(0);
            rightButton.on('pointerdown', control_right); //pointerdown คือ เมื่อกด จะให้เกิดอะไรซักอย่าง โดยเรียกใช้ฟังก์ชั่น
            rightButton.on('pointerup', control_stopX); //pointerup คือ เมื่อไม่ได้กดปุ่ม หรือ ปล่อย จะให้เกิดอะไรซักอย่าง โดยเรียกใช้ฟังก์ชั่น

            leftButton = phasers.add.image(60, 310, 'left').setInteractive().setScale(1).setScrollFactor(0);
            leftButton.on('pointerdown', control_left);
            leftButton.on('pointerup', control_stopX);

            upButton = phasers.physics.add.image(120, 275, 'up').setInteractive().setScale(1).setScrollFactor(0);
            upButton.on('pointerdown', control_up);
            upButton.on('pointerup', control_stopY);
            upButton.setCollideWorldBounds(true)

            downButton = phasers.add.image(120, 350, 'down').setInteractive().setScale(1).setScrollFactor(0);
            downButton.on('pointerdown', control_down);
            downButton.on('pointerup', control_stopY);

            up_left_Button = phasers.physics.add.image(180, 275, 'up_right').setInteractive().setScale(1).setScrollFactor(0);
            up_left_Button.on('pointerdown', control_up_left);
            up_left_Button.on('pointerup', control_stopXY);
            up_left_Button.setCollideWorldBounds(true)

            up_right_Button = phasers.physics.add.image(60, 275, 'up_left').setInteractive().setScale(1).setScrollFactor(0);
            up_right_Button.on('pointerdown', control_up_right);
            up_right_Button.on('pointerup', control_stopXY);
            up_right_Button.setCollideWorldBounds(true)

            down_left_Button = phasers.add.image(60, 350, 'down_left').setInteractive().setScale(1).setScrollFactor(0);
            down_left_Button.on('pointerdown', control_down_left);
            down_left_Button.on('pointerup', control_stopXY);

            down_right_Button = phasers.add.image(180, 350, 'down_right').setInteractive().setScale(1).setScrollFactor(0);
            down_right_Button.on('pointerdown', control_down_right);
            down_right_Button.on('pointerup', control_stopXY);    

        }
        if(window.screen.width == 736 && window.screen.height == 414){
            rightButton = phasers.physics.add.image(180, 350, 'right').setInteractive().setScale(1).setScrollFactor(0);
            rightButton.on('pointerdown', control_right); //pointerdown คือ เมื่อกด จะให้เกิดอะไรซักอย่าง โดยเรียกใช้ฟังก์ชั่น
            rightButton.on('pointerup', control_stopX); //pointerup คือ เมื่อไม่ได้กดปุ่ม หรือ ปล่อย จะให้เกิดอะไรซักอย่าง โดยเรียกใช้ฟังก์ชั่น

            leftButton = phasers.add.image(60, 350, 'left').setInteractive().setScale(1).setScrollFactor(0);
            leftButton.on('pointerdown', control_left);
            leftButton.on('pointerup', control_stopX);

            upButton = phasers.physics.add.image(120, 315, 'up').setInteractive().setScale(1).setScrollFactor(0);
            upButton.on('pointerdown', control_up);
            upButton.on('pointerup', control_stopY);
            upButton.setCollideWorldBounds(true)

            downButton = phasers.add.image(120, 385, 'down').setInteractive().setScale(1).setScrollFactor(0);
            downButton.on('pointerdown', control_down);
            downButton.on('pointerup', control_stopY);

            up_left_Button = phasers.physics.add.image(180, 315, 'up_right').setInteractive().setScale(1).setScrollFactor(0);
            up_left_Button.on('pointerdown', control_up_left);
            up_left_Button.on('pointerup', control_stopXY);
            up_left_Button.setCollideWorldBounds(true)

            up_right_Button = phasers.physics.add.image(60, 315, 'up_left').setInteractive().setScale(1).setScrollFactor(0);
            up_right_Button.on('pointerdown', control_up_right);
            up_right_Button.on('pointerup', control_stopXY);
            up_right_Button.setCollideWorldBounds(true)

            down_left_Button = phasers.add.image(60, 385, 'down_left').setInteractive().setScale(1).setScrollFactor(0);
            down_left_Button.on('pointerdown', control_down_left);
            down_left_Button.on('pointerup', control_stopXY);

            down_right_Button = phasers.add.image(180, 385, 'down_right').setInteractive().setScale(1).setScrollFactor(0);
            down_right_Button.on('pointerdown', control_down_right);
            down_right_Button.on('pointerup', control_stopXY);    

        }
        if(window.screen.width == 1024 && window.screen.height == 768){
            rightButton = phasers.physics.add.image(180, 700, 'right').setInteractive().setScale(1).setScrollFactor(0);
            rightButton.on('pointerdown', control_right); //pointerdown คือ เมื่อกด จะให้เกิดอะไรซักอย่าง โดยเรียกใช้ฟังก์ชั่น
            rightButton.on('pointerup', control_stopX); //pointerup คือ เมื่อไม่ได้กดปุ่ม หรือ ปล่อย จะให้เกิดอะไรซักอย่าง โดยเรียกใช้ฟังก์ชั่น

            leftButton = phasers.add.image(60, 700, 'left').setInteractive().setScale(1).setScrollFactor(0);
            leftButton.on('pointerdown', control_left);
            leftButton.on('pointerup', control_stopX);

            upButton = phasers.physics.add.image(120, 665, 'up').setInteractive().setScale(1).setScrollFactor(0);
            upButton.on('pointerdown', control_up);
            upButton.on('pointerup', control_stopY);
            upButton.setCollideWorldBounds(true)

            downButton = phasers.add.image(120, 740, 'down').setInteractive().setScale(1).setScrollFactor(0);
            downButton.on('pointerdown', control_down);
            downButton.on('pointerup', control_stopY);

            up_left_Button = phasers.physics.add.image(180, 665, 'up_right').setInteractive().setScale(1).setScrollFactor(0);
            up_left_Button.on('pointerdown', control_up_left);
            up_left_Button.on('pointerup', control_stopXY);
            up_left_Button.setCollideWorldBounds(true)

            up_right_Button = phasers.physics.add.image(60, 665, 'up_left').setInteractive().setScale(1).setScrollFactor(0);
            up_right_Button.on('pointerdown', control_up_right);
            up_right_Button.on('pointerup', control_stopXY);
            up_right_Button.setCollideWorldBounds(true)

            down_left_Button = phasers.add.image(60, 740, 'down_left').setInteractive().setScale(1).setScrollFactor(0);
            down_left_Button.on('pointerdown', control_down_left);
            down_left_Button.on('pointerup', control_stopXY);

            down_right_Button = phasers.add.image(180, 740, 'down_right').setInteractive().setScale(1).setScrollFactor(0);
            down_right_Button.on('pointerdown', control_down_right);
            down_right_Button.on('pointerup', control_stopXY);    

        }
        if(window.screen.width == 1366 && window.screen.height == 1024){
            rightButton = phasers.physics.add.image(320, 895, 'right').setInteractive().setScale(2).setScrollFactor(0);
            rightButton.on('pointerdown', control_right); //pointerdown คือ เมื่อกด จะให้เกิดอะไรซักอย่าง โดยเรียกใช้ฟังก์ชั่น
            rightButton.on('pointerup', control_stopX); //pointerup คือ เมื่อไม่ได้กดปุ่ม หรือ ปล่อย จะให้เกิดอะไรซักอย่าง โดยเรียกใช้ฟังก์ชั่น

            leftButton = phasers.add.image(60, 895, 'left').setInteractive().setScale(2).setScrollFactor(0);
            leftButton.on('pointerdown', control_left);
            leftButton.on('pointerup', control_stopX);

            upButton = phasers.physics.add.image(190, 810, 'up').setInteractive().setScale(2).setScrollFactor(0);
            upButton.on('pointerdown', control_up);
            upButton.on('pointerup', control_stopY);
            upButton.setCollideWorldBounds(true)

            downButton = phasers.add.image(190, 980, 'down').setInteractive().setScale(2).setScrollFactor(0);
            downButton.on('pointerdown', control_down);
            downButton.on('pointerup', control_stopY);

            up_left_Button = phasers.physics.add.image(320, 810, 'up_right').setInteractive().setScale(2).setScrollFactor(0);
            up_left_Button.on('pointerdown', control_up_left);
            up_left_Button.on('pointerup', control_stopXY);
            up_left_Button.setCollideWorldBounds(true)

            up_right_Button = phasers.physics.add.image(60, 810, 'up_left').setInteractive().setScale(2).setScrollFactor(0);
            up_right_Button.on('pointerdown', control_up_right);
            up_right_Button.on('pointerup', control_stopXY);
            up_right_Button.setCollideWorldBounds(true)

            down_left_Button = phasers.add.image(60, 980, 'down_left').setInteractive().setScale(2).setScrollFactor(0);
            down_left_Button.on('pointerdown', control_down_left);
            down_left_Button.on('pointerup', control_stopXY);

            down_right_Button = phasers.add.image(320, 980, 'down_right').setInteractive().setScale(2).setScrollFactor(0);
            down_right_Button.on('pointerdown', control_down_right);
            down_right_Button.on('pointerup', control_stopXY);    

        }
      

    }

    resize(width, height) {
        phasers.cameras.resize(width, height);
        this.bg.setDisplaySize(0, 0);
    }
    

}
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


export default move_mobile;

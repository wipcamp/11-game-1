import 'phaser';
import responsive from "./responsive";
let phasers;
let player;
let upButton = false;
let up;
let down;
let right;
let left;
let button;
let cursors;
let x;
let y;


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

        let responsives = new responsive(width, height)
        responsives.check(height,width)
        let scaleRatio = responsives.getScale()

        let bg = phasers.add.image(400, 300, 'bg');

        //กำหนดตัวละครเป็น physics
        player = phasers.physics.add.sprite(73, 72, 'player')
        player.setScale(scaleRatio, scaleRatio);

        //ไม่ให้ player ออกนอกโลก
        player.setCollideWorldBounds(true);

        //ใส่ปุ่มในมือถือ
        phasers.rightButton = phasers.add.image(150, 500, 'right').setInteractive().setScale(scaleRatio, scaleRatio);
        phasers.rightButton.on('pointerdown', control_right); //pointerdown คือ เมื่อกด จะให้เกิดอะไรซักอย่าง โดยเรียกใช้ฟังก์ชั่น
        phasers.rightButton.on('pointerup', control_stopX); //pointerup คือ เมื่อไม่ได้กดปุ่ม หรือ ปล่อย จะให้เกิดอะไรซักอย่าง โดยเรียกใช้ฟังก์ชั่น

        phasers.lefttButton = phasers.add.image(50, 500, 'left').setInteractive().setScale(scaleRatio, scaleRatio);
        phasers.lefttButton.on('pointerdown', control_left);
        phasers.lefttButton.on('pointerup', control_stopX);

        phasers.upButton = phasers.add.image(100, 450, 'up').setInteractive().setScale(scaleRatio, scaleRatio);
        phasers.upButton.on('pointerdown', control_up);
        phasers.upButton.on('pointerup', control_stopY);

        phasers.downButton = phasers.add.image(100, 550, 'down').setInteractive().setScale(scaleRatio, scaleRatio);
        phasers.downButton.on('pointerdown', control_down);
        phasers.downButton.on('pointerup', control_stopY);

        phasers.up_left_Button = phasers.add.image(150, 450, 'up_right').setInteractive().setScale(scaleRatio, scaleRatio);
        phasers.up_left_Button.on('pointerdown', control_up_left);
        phasers.up_left_Button.on('pointerup', control_stopXY);

        phasers.up_right_Button = phasers.add.image(50, 450, 'up_left').setInteractive().setScale(scaleRatio, scaleRatio);
        phasers.up_right_Button.on('pointerdown', control_up_right);
        phasers.up_right_Button.on('pointerup', control_stopXY);

        phasers.down_left_Button = phasers.add.image(50, 550, 'down_left').setInteractive().setScale(scaleRatio, scaleRatio);
        phasers.down_left_Button.on('pointerdown', control_down_left);
        phasers.down_left_Button.on('pointerup', control_stopXY);

        phasers.down_right_Button = phasers.add.image(150, 550, 'down_right').setInteractive().setScale(scaleRatio, scaleRatio);
        phasers.down_right_Button.on('pointerdown', control_down_right);
        phasers.down_right_Button.on('pointerup', control_stopXY);


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

        // set bounds so the camera won't go outside the game world
        // phasers.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        // make the camera follow the player
        // phasers.cameras.main.startFollow(player);

        // Set camera properties
        // phasers.cameras.main.zoom = 2;
        // phasers.cameras.main.startFollow(player);

        // phasers.rightButton = phasers.add.button(phasers.world.centerX - TheGame.Params.iconSize / 2 , phasers.world.centerY + phasers.height / 3, "up");
        // phasers.rightButton.anchor.setTo(0.5);
        // phasers.rightButton.frame = 4;
        // phasers.rightButton.clicked = false;
        // phasers.scaleSprite(phasers.rightButton, phasers.width, phasers.height / 3, 50, 0.5);
        // phasers.rightButton.x = phasers.world.centerX - phasers.rightButton.width / 2;

        function scaleSprite(sprite, availableSpaceWidth, availableSpaceHeight, padding, scaleMultiplier) {
            var scale = phasers.getSpriteScale(sprite._frame.width, sprite._frame.height, availableSpaceWidth, availableSpaceHeight, padding);
            sprite.scale.x = scale * scaleMultiplier;
            sprite.scale.y = scale * scaleMultiplier;
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


    }


}


export default move_mobile;

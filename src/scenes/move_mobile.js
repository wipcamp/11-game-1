import 'phaser';

let phasers;
let player;
let upButton = false;
let up;
let down;
let right;
let left;
let button;
let cursors


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

        this.load.image('player', '../../images/player.png');
    }
    create() {
        //กำหนดตัวละครเป็น physics
        player = phasers.physics.add.sprite(73, 72, 'player').setScale(0.5);

        //ไม่ให้ player ออกนอกโลก
        player.setCollideWorldBounds(true);

        //ใส่ปุ่มในมือถือ
        phasers.rightButton = phasers.add.image(150, 500, 'right').setInteractive();
        phasers.rightButton.on('pointerdown', control_right);
        phasers.rightButton.on('pointerup', control_stopX);

        phasers.lefttButton = phasers.add.image(50, 500, 'left').setInteractive();
        phasers.lefttButton.on('pointerdown', control_left);
        phasers.lefttButton.on('pointerup', control_stopX);        

        phasers.upButton = phasers.add.image(100, 450, 'up').setInteractive();
        phasers.upButton.on('pointerdown', control_up);
        phasers.upButton.on('pointerup', control_stopY);   
        
        phasers.downButton = phasers.add.image(100, 550, 'up').setInteractive();
        phasers.downButton.on('pointerdown', control_down);
        phasers.downButton.on('pointerup', control_stopY);   
        
        function control_right(){
            player.setVelocityX(150);
        }
        function control_left(){
            player.setVelocityX(-150);
        }
        function control_up(){
            player.setVelocityY(-150);
        }
        function control_down(){
            player.setVelocityY(150);
        }

        function control_stopX(){
            player.setVelocityX(0);
        }
        function control_stopY(){
            player.setVelocityY(0);
        }
    }

    update() {


    }


}


export default move_mobile;

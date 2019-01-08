import 'phaser';

let phasers;
let player;
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
        this.load.image('right','../../images/button_right.png');
        
        this.load.image('player','../../images/player.png');
    }
    create() {      
        //กำหนดตัวละครเป็น physics
        player = phasers.physics.add.sprite(73, 72, 'player').setScale(0.5);      

        //ไม่ให้ player ออกนอกโลก
        player.setCollideWorldBounds(true);

        const upButton = phasers.add.image(100, 500, 'up');
        upButton.setInteractive();
    
        upButton.on('pointerover', () => { console.log('up'); });

    }

    update() {
        
    }




}


export default move_mobile;

import 'phaser';

let phasers;
let player;
let leftzone
let rightzone
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
        this.load.image('player', '../images/lamp_on.png');
        this.load.image('bg', '../images/bg.jpg');

        this.load.image('button', '../images/left.png');
        this.load.image('c_right', '../images/right.png');
        this.load.image('c_up', '../images/up.png');
        this.load.image('c_down', '../images/down.png');


        // this.load.spritesheet('control', '../../images/button_control.png', { frameWidth: 1195, frameHeight: 240 });

        //fullscreen setup    

    }

    create() {
        player = phasers.physics.add.sprite(150, 120, 'player')
        button = phasers.physics.add.sprite(0, 0, 'button').setVisible(true);
        player.setScale(0.8);

        phasers.input.on('pointerdown', function (pointer) {

            button.x = pointer.x;
            button.y = pointer.y;



        });
        phasers.input.on('pointerdown', this.handleStop);


        player.setCollideWorldBounds(true);
        // phasers.physics.overlap(o1, o2)

        // phasers.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        // phasers.cameras.main.startFollow(player);
        phasers.physics.add.overlap(player, button, this.handleStop);

    }
    handleStop() {
        console.log('handle')
        Phaser.Curves.MoveTo(button.x, button.y)
        player.setVelocityX(0);
        player.setVelocityY(0);

    }

    update() {

    }




}


export default move_mobile;

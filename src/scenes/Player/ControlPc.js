import 'phaser';

let x, y, height, width;
let cursors;
let player;
let bullet, bullets, reticle;
let phaser;

class ControlPc extends Phaser.Scene {
    constructor(config) {
        super(config.scene);
        this.scene = config.scene;
        this.scene.add.existing(this);
        phaser = config.scene
    }


    create() {
        width = phaser.scene.scene.physics.world.bounds.width;
        height = phaser.scene.scene.physics.world.bounds.height;
        x = width * 0.5;
        y = height * 0.5;

        player = phaser.physics.add.image(100, 450, 'player');
        player.setCollideWorldBounds(true);
        
        bullets = phaser.physics.add.image(x, y, 'bullet'); 
        bullets.setCollideWorldBounds(true);

        cursors = phaser.input.keyboard.createCursorKeys();
        this.keyW = phaser.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.keyA = phaser.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyS = phaser.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keyD = phaser.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

    }

    getPlayer() {
        return player
    }

    getBullet() {
        return bullets
    }

    update() {

        if (cursors.left.isDown||this.keyA.isDown) 
        { 
            player.setAngle(-90); 
            player.x -= 2.5; 
        } 
        else if (cursors.right.isDown||this.keyD.isDown) 
        { 
            player.setAngle(90); 
            player.x += 2.5; 
        } 
        if (cursors.up.isDown||this.keyW.isDown) 
        { 
            player.setAngle(0); 
            player.y -= 2.5; 
        } 
        else if (cursors.down.isDown||this.keyS.isDown) 
        { 
            player.setAngle(-180); 
            player.y += 2.5; 
        } 

    }
}



export default ControlPc;

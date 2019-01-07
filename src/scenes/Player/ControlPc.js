import 'phaser';
let cursors;
let player;
let phaser;
class ControlPc extends Phaser.Scene {
    constructor(config) {
        super(config.scene);
        this.scene = config.scene;
        this.scene.add.existing(this);
        phaser = config.scene
    }


    create() {

        player = phaser.physics.add.image(100,450,'player');
         player.body.ColliderWorldBounds=true;
console.log(phaser)
        cursors = phaser.input.keyboard.createCursorKeys();
        this.keyW = phaser.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.keyA = phaser.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyS = phaser.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keyD = phaser.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);        
    }

    update() {

        if(cursors.left.isDown||this.keyA.isDown){
            player.setVelocityX(-100);
        }else if(cursors.right.isDown||this.keyD.isDown){
            player.setVelocityX(100);
        }else if(cursors.up.isDown||this.keyW.isDown){
            player.setVelocityY(-100);
        }else if(cursors.down.isDown||this.keyS.isDown){
            player.setVelocityY(100);
        }else {
            player.setVelocityX(0)
            player.setVelocityY(0)
        }

    }
}

export default ControlPc;

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

        player = phaser.physics.add.image(100, 450, 'player').setScale(0.5);
        player.setCollideWorldBounds(true);

        cursors = phaser.input.keyboard.createCursorKeys();
        this.keyW = phaser.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.keyA = phaser.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyS = phaser.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keyD = phaser.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        phaser.cameras.main.setBounds(0, 0, 1024, 2048);
        phaser.cameras.main.startFollow(player, true, 1, 1);
        phaser.cameras.main.setZoom(2);
    }

   
    getPlayer() {
        return player
    }

    update() {
        player.setVelocity(0)

        if (cursors.left.isDown || this.keyA.isDown) {
            player.setAngle(-90);
            player.setVelocityX(-150);
        } else if (cursors.right.isDown || this.keyD.isDown) {
            player.setAngle(90);
            player.setVelocityX(150);
        } if (cursors.up.isDown || this.keyW.isDown) {
            player.setAngle(0);
            player.setVelocityY(-150);
        } else if (cursors.down.isDown || this.keyS.isDown) {
            player.setAngle(-180);
            player.setVelocityY(150);
        }

    }
}

export default ControlPc;

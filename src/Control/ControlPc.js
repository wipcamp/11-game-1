import 'phaser';
import Bullets from './../core/Bullet'
import Player from './../Player/Player'
let cursors;
let player;
let playerFunction;
let weapon;
let phasers;
let throws;
let holdown;
class ControlPc extends Phaser.Scene {
    constructor(config) {
        super(config.scene);
        this.scene = config.scene;
        this.scene.add.existing(this);
        phasers = config.scene
    }


    create() {

        // player = phaser.physics.add.image(100, 450, 'player').setScale(0.5);
        // player.setCollideWorldBounds(true);
        let Bullet = new Bullets(this)
        Bullet.create()

        throws = phasers.sound.add('throw', { volume: 0.5 });
        throws.setVolume(0.5);

        cursors = phasers.input.keyboard.createCursorKeys();
        phasers.keyW = phasers.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        phasers.keyA = phasers.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        phasers.keyS = phasers.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        phasers.keyD = phasers.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        phasers.keySpacebar = phasers.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        // phasers.cameras.main.setBounds(0, 0, 1024, 2048);
        // phasers.cameras.main.startFollow(player, true, 1, 1);
        // phasers.cameras.main.setZoom(2);
    }


    setPlayer(tempPlayer) {
        player = tempPlayer;
    }

    update() {
        player.setVelocity(0)

        if (cursors.left.isDown || phasers.keyA.isDown) {
            player.setAngle(-90);           
            player.setVelocityX(-150);
        } else if (cursors.right.isDown || phasers.keyD.isDown) {
            player.setAngle(90);

            player.setVelocityX(150);
        }
        if (cursors.up.isDown || phasers.keyW.isDown) {
            player.setAngle(0);

            player.setVelocityY(-150);
        } else if (cursors.down.isDown || phasers.keyS.isDown) {
            player.setAngle(-180);
            player.setVelocityY(150);

        }
        if (holdown == false) {
            if (cursors.space.isDown || phasers.keySpacebar.isDown) {
                holdown = true
                console.log(holdown)
                playerFunction.fire();
                throws.play({ loop: false });
            }
        } else if (cursors.space.isUp || phasers.keySpacebar.isUp) {
            holdown = false
        }
    }

    getPlayer(p) {
        player = p.getPlayer()
            // reticle = p.getReticle()
        playerFunction = p
    }

    getWeapon() {
        return weapon
    }


}

export default ControlPc;
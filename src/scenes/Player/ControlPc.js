import 'phaser';
import Monster from './../Monster'

let x, y, height, width;
let cursors;
let player, weapon;
let bullets;
let phaser;
let monster


class ControlPc extends Phaser.Scene {
    constructor(config) {
        super(config.scene);
        this.scene = config.scene;
        this.scene.add.existing(this);
        phaser = config.scene
    }


    create() {

        // monsters = new Monster({ scene: this, });

        width = phaser.scene.scene.physics.world.bounds.width;
        height = phaser.scene.scene.physics.world.bounds.height;
        x = width * 0.5;
        y = height * 0.5;

        player = phaser.physics.add.image(50, 420, 'player');

        weapon = phaser.physics.add.image(x+320,y+150, 'weapon');
        weapon.setCollideWorldBounds(true);
        
        bullets = phaser.physics.add.image(x, y, 'bullet'); 
        bullets.setCollideWorldBounds(true);

        cursors = phaser.input.keyboard.createCursorKeys();
        phaser.keyW = phaser.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        phaser.keyA = phaser.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        phaser.keyD = phaser.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        phaser.keyS = phaser.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

        // phaser.cameras.main.setBounds(0, 0, 2000, 2048);
        phaser.cameras.main.startFollow(player, true, 1, 1);
        phaser.cameras.main.setZoom(2);

        // phaser.physics.add.colider(player,monster.getMonster())
    }

    getPlayer() {
        return player
    }
    getBullet() {
        return bullets
    }
    getWeapon() {
        return weapon
    }

    update() {
        player.setVelocity(0)

        if (cursors.left.isDown || phaser.keyA.isDown) {
            player.setAngle(-90);
            player.setVelocityX(-150);
            weapon.setAngle(-90);
            
        } else if (cursors.right.isDown || phaser.keyD.isDown) {
            player.setAngle(90);
            player.setVelocityX(150);
            weapon.setAngle(90);
            
        } if (cursors.up.isDown || phaser.keyW.isDown) {
            player.setAngle(0);
            player.setVelocityY(-150);
            weapon.setAngle(0);
            
        } else if (cursors.down.isDown || phaser.keyS.isDown) {
            player.setAngle(-180);
            player.setVelocityY(150);
            weapon.setAngle(-180);
            
        }

    }
}



export default ControlPc;

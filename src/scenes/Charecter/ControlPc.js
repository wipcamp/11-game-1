import 'phaser';

let x, y, height, width;
let cursors;
let player, weapon;
let bullets;
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

        player = phaser.physics.add.image(x, 420, 'player');
        
        bullets = phaser.physics.add.group({
            key: 'bullet',
            frameQuantity: 20,
            collideWorldBounds: true
        });
        Phaser.Actions.RandomRectangle(bullets.getChildren(), new Phaser.Geom.Rectangle(100, 100, 1260, 500));

        cursors = phaser.input.keyboard.createCursorKeys();
        phaser.keyW = phaser.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        phaser.keyA = phaser.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        phaser.keyD = phaser.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        phaser.keyS = phaser.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

        phaser.cameras.main.startFollow(player, true, 1, 1);
        phaser.cameras.main.setZoom(2);
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
            
            
        } else if (cursors.right.isDown || phaser.keyD.isDown) {
            player.setAngle(90);
            player.setVelocityX(150);
            
            
        } if (cursors.up.isDown || phaser.keyW.isDown) {
            player.setAngle(0);
            player.setVelocityY(-150);
            
            
        } else if (cursors.down.isDown || phaser.keyS.isDown) {
            player.setAngle(-180);
            player.setVelocityY(150);
           
            
        }

    }
}



export default ControlPc;

let player;
let x, y, width, height;

class Player extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'Player'
        });
    }

    preload() {
        this.load.image('player', '../../images/player.png');
    }

    create() {
        width = this.scene.scene.physics.world.bounds.width;
        height = this.scene.scene.physics.world.bounds.height;
        x = width * 0.5;
        y = height * 0.5;

        player = this.physics.add.image(x, y, 'player');
    }

    update() {

    }
}

export default Player;
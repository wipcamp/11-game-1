
let x, y, height, width;
let player, platforms;
let monsters;

class Monster extends Phaser.Scene {

    constructor(test) {
        super({
            key: 'Monster'
        });
    }

    preload() {
        this.load.image('monster', '../../images/monster.png');
        this.load.image('player', '../../images/player.png');
        this.load.image('platform', '../../images/platform.png');
    }

    create() {
        width = this.scene.scene.physics.world.bounds.width;
        height = this.scene.scene.physics.world.bounds.height;
        x = width * 0.5;
        y = height * 0.5;

        player = this.physics.add.image(x, y, 'player');
        player.setBounce(0.2);
        player.setCollideWorldBounds(true);

        // this.gameitems = this.physics.add.group();
	    // for (var i = 0; i < 20; i++) {
		//     var x = Phaser.Math.RND.between(0, 1260);
		//     var y = Phaser.Math.RND.between(0, 560);
        //     var newobj = this.gameitems.create(x, y, 'monster');
        // }

        platforms = this.physics.add.staticGroup({
            key: 'platform',
            frameQuantity: 20,
            
        });
        Phaser.Actions.PlaceOnRectangle(platforms.getChildren(), new Phaser.Geom.Rectangle(100, 100, 600, 400));
        platforms = this.physics.world.bounds;

        
        monsters = this.physics.add.group({
            key: 'monster',
            frameQuantity: 20,
            collideWorldBounds: true,
            bounceX: 1,
            bounceY: 1,
            velocityX: 40,
            velocityY: 40
        });
        Phaser.Actions.RandomRectangle(monsters.getChildren(), this.physics.world.bounds);

        this.physics.add.collider(monsters);
        this.physics.add.collider(monsters, player);
        this.physics.add.collider(monsters, platforms);
        this.physics.add.collider(player, platforms);

    }

    update() {
        
    }
}

export default Monster;
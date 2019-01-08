let x, y, height, width;
let mons, gameitems;

class Monster extends Phaser.Scene {

    constructor(test) {
        super({
            key: 'Monster'
        });
    }

    preload() {
        this.load.image('monster', '../../images/monster.png');
    }

    create() {
        width = this.scene.scene.physics.world.bounds.width;
        height = this.scene.scene.physics.world.bounds.height;
        x = width * 0.5;
        y = height * 0.5;

        // mons = this.physics.add.group({
        //     key: 'monster',
        //     repeat: 20,
        //     setXY: { x: Phaser.Math.RND.between(0, 1260), y: Phaser.Math.RND.between(0, 560), stepX: 70 }
        // });
        // mons.children.iterate(function (child) {
        //     child.setBounce(1);
        //     child.setVelocity(200, 100);
        // });

        // this.gameitems = this.physics.add.group();
	    // for (var i = 0; i < 20; i++) {
		//     var x = Phaser.Math.RND.between(0, 1260);
		//     var y = Phaser.Math.RND.between(0, 560);
        //     var newobj = this.gameitems.create(x, y, 'monster');
        // }
        
        gameitems = this.physics.add.group({
            key: 'monster',
            frameQuantity: 20,
            collideWorldBounds: true,
            bounceX: 1,
            bounceY: 1,
            velocityX: 40,
            velocityY: 40
        });
        Phaser.Actions.RandomRectangle(gameitems.getChildren(), this.physics.world.bounds);
        this.physics.add.collider(gameitems);

    }

    update() {
        
    }
}

export default Monster;
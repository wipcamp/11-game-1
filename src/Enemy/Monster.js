
let x, y, height, width;
let player, platforms;
let monsters, bullets;
let phaser;

class Monster extends Phaser.Scene {

    constructor(config) {
        super(config.scene);
        this.scene = config.scene;
        this.scene.add.existing(this);
        phaser = config.scene
    }


    preload() {

    }

    create() {
        width = phaser.scene.scene.physics.world.bounds.width;
        height = phaser.scene.scene.physics.world.bounds.height;
        x = width * 0.5;
        y = height * 0.5;

        // player = phaser.physics.add.image(x, y, 'player');
        // player.setBounce(0.2);
        // player.setCollideWorldBounds(true);

        // this.gameitems = this.physics.add.group();
        // for (var i = 0; i < 20; i++) {
        //     var x = Phaser.Math.RND.between(0, 1260);
        //     var y = Phaser.Math.RND.between(0, 560);
        //     var newobj = this.gameitems.create(x, y, 'monster');
        // }

        monsters = phaser.physics.add.group({
            key: 'monster',
            frameQuantity: 20,
            collideWorldBounds: true,
            bounceX: 1,
            bounceY: 1,
            velocityX: 40,
            velocityY: 40
        });

        monsters.children.iterate(function (child) {
            child.hpMonsR=100
        });

        Phaser.Actions.RandomRectangle(monsters.getChildren(), new Phaser.Geom.Rectangle(100, 100, 1260, 500));
        phaser.physics.add.collider(monsters.getChildren());

    }
    getMonster() {
        return monsters
    }
    
    update() {
    

    }
}

export default Monster;
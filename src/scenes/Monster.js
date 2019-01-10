
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

        // this.gameitems = this.physics.add.group();
        // for (var i = 0; i < 20; i++) {
        //     var x = Phaser.Math.RND.between(0, 1260);
        //     var y = Phaser.Math.RND.between(0, 560);
        //     var newobj = this.gameitems.create(x, y, 'monster');
        // }

        // platforms = phaser.physics.add.staticGroup({
        //     key: 'platform',
        //     frameQuantity: 20,
        //     collideWorldBounds: true,

        // });
        // Phaser.Actions.PlaceOnRectangle(platforms.getChildren(), new Phaser.Geom.Rectangle(100, 100, 600, 400));
        // platforms.refresh();

        monsters = phaser.physics.add.group({
            key: 'monster',
            frameQuantity: 20,
            collideWorldBounds: true,
            bounceX: 1,
            bounceY: 1,
            velocityX: 40,
            velocityY: 40
        });

        //Phaser.Actions.RandomRectangle(monsters.getChildren(), phaser.physics.world.bounds);
        Phaser.Actions.RandomRectangle(monsters.getChildren(), new Phaser.Geom.Rectangle(100, 100, 1260, 500));
        phaser.physics.add.collider(monsters);

    }
    getMonster() {
        return monsters
    }
    getPlatforms() {
        return platforms
    }
    
    update() {
    

    }
}

export default Monster;
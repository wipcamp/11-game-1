
let x, y, height, width;
let monsters;
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

        monsters = phaser.physics.add.group({
            key: 'monster',
            frameQuantity: 100,
            collideWorldBounds: true,
            bounceX: 1,
            bounceY: 1,
            velocityX: 40,
            velocityY: 40,
        });
        console.log(monsters)
        Phaser.Actions.RandomRectangle(monsters.getChildren(), new Phaser.Geom.Rectangle(100, 100, 1260, 500));
        phaser.physics.add.collider(monsters);

    }
    getMonster() {
        return monsters
    }
    
    update() {
        

    }

    // collectMons (bullets, monsters) {
    //     bullets.disableBody(true, true);
    //     score += 1;
    //     monsterText.setText(monster.collectMons + ' /100 ');
    
    //     if (monsters.countActive(true) === 0) {
    //         Phaser.Actions.RandomRectangle(monsters.getChildren(), new Phaser.Geom.Rectangle(50, 50, 1260, 500));
           
    //     }

    //     return;
    // }
}

export default Monster;
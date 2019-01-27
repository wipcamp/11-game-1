
let x, y, height, width;
let monsters;
let hpMons = 100
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

        // monsters = phaser.physics.add.image(100, 400, 'monster')
        // // monsters.setColliderWorldBounds(true);
        // monsters.setBounce(1)
        // monsters.setVelocity(Phaser.Math.Between(10, 40), Phaser.Math.Between(10, 40))


        // this.gameitems = this.physics.add.group();
        // for (var i = 0; i < 20; i++) {
        //     var x = Phaser.Math.RND.between(0, 1260);
        //     var y = Phaser.Math.RND.between(0, 560);
        //     var newobj = this.gameitems.create(x, y, 'monster');
        // }

        monsters = phaser.physics.add.group({
            key: 'monster',
            frameQuantity: 10,
            // collideWorldBounds: true,
            bounceX: 1,
            bounceY: 1,
            velocityX: 40,
            velocityY: 40,
        });
        monsters.children.iterate(function (child) {
            child.hpMonsR=100
        });
        Phaser.Actions.RandomRectangle(monsters.getChildren(), new Phaser.Geom.Rectangle(100, 100, 1260, 500));
        // for (let index = 0; index < monsters.children.entries.length; index++) {
        //     monsters.children.entries[index] = {
        //         ...monsters.children.entries[index],
        //         hpMonsR: 100,
        //     }            
        // }
       
       
        
        phaser.physics.add.collider(monsters.getChildren());
        //     console.log(monsters)

    }

    // getMonster() {
    //     return monsters
    // }
    // checkHpRed () {
    //     hpMonsR -= 10;
    //     console.log(hpMonsR)

    //     if(hpMonsR == 20){
    //         monsters.setTint(0xff0000);   
    //     }else if(hpMonsR <= 0){
    //         monsters.disableBody(true,true)
    //         hpMonsR = 100
    //     }
    // }

    getMonster() {
        return monsters
    }

    // checkHpRed() {
    //     hpMons -= 10;
    //     console.log(hpMons)

    //     if (hpMons == 20) {
    //         monsters.setTint(0xff0000);
    //     } else if (hpMons <= 0) {
    //         monsters.disableBody(true, true)
    //         hpMons = 100
    //     }
    // }
    getColider(player) {
        phaser.physics.add.collider(monsters, player.getPlayer(), monsters.checkHpRed)
        // phaser.physics.add.collider(monsters, player.getPlayer(), hp.checkHeart);
        // this.physics.add.collider(monster, player.getBullet(), hp.checkHp);
    }




    update() {


    }

}

export default Monster;
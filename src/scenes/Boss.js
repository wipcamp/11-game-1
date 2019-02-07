
let x, y, height, width;
let bosses, weaponBoss;
let phaser;
let hpMonsB

class Boss extends Phaser.Scene {

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

        bosses = phaser.physics.add.staticGroup({
            key: 'boss',
            frameQuantity: 1,
            collideWorldBounds: true,
            bounceX: 1,
            bounceY: 1
        });
        bosses.children.iterate(function (child) {
            child.hpMonsB=100
        });
        // Phaser.Actions.RandomRectangle(monsters.getChildren(), new Phaser.Geom.Rectangle(100, 100, 1260, 500));
        Phaser.Actions.PlaceOnLine(bosses.getChildren(), new Phaser.Geom.Line(x+320,y+150));
        bosses.refresh();

        weaponBoss = phaser.physics.add.staticGroup({
            key: 'weaponBoss',
            frameQuantity: 100,
            collideWorldBounds: true,
            visible: true
        });
        Phaser.Actions.PlaceOnRectangle(weaponBoss.getChildren(), new Phaser.Geom.Rectangle(x+270,y+120,100,50));
        weaponBoss.refresh();

        phaser.physics.add.collider(bosses.getChildren());
        

    }
    getBoss() {
        return bosses
    }
    getWeaponBoss() {
        return weaponBoss
    }
    
    update() {
    

    }
}

export default Boss;
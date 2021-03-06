import 'phaser';
let zone;
let phaser;
class SafeZone extends Phaser.Scene {
    constructor(config) {
        super(config.scene);
        this.scene = config.scene;
        this.scene.add.existing(this);
        phaser = config.scene
    }


    create() {

        
        // zone = phaser.physics.add.image(100, 450, 'safezone').setScale(0.25, 0.25)
        // zone.setCollideWorldBounds(true);
        zone = phaser.physics.add.staticGroup({
            key: 'safezone',
            frameQuantity: 1,
            collideWorldBounds: true
            // setScale:{
            //     x:0.25,y:0.25
            // }
        });
        Phaser.Actions.PlaceOnRectangle(zone.getChildren(), new Phaser.Geom.Rectangle(100, 450, 50, 50));
        zone.refresh();


    }
    getSafeZone() {
        return zone
    }


    update() {


    }
}

export default SafeZone;
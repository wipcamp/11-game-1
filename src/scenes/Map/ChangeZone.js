import 'phaser';
let phaser
let door
class ChangeZone extends Phaser.Scene {
    constructor(config) {
        super(config.scene);
        this.scene = config.scene;
        this.scene.add.existing(this);
        phaser = config.scene
    }


    create() {
        // door = phaser.phaser.add.sprite(700,450,'door');
        door = phaser.physics.add.staticGroup({
            key: 'door',
            repeat: 0,
            collideWorldBounds: true,
            setXY:{
                stepX:10,stepY:10
            }
            // setScale:{
            //     x:1,y:1
            // }
        });
        // Phaser.Actions.SetVisible(door, true,    index, direction);
        Phaser.Actions.PlaceOnRectangle(door.getChildren(), new Phaser.Geom.Rectangle(700, 450, 50, 50));
        door.refresh();
    }
    getDoor() {
        return door
    }

    

    update() {

    }
}

export default ChangeZone;
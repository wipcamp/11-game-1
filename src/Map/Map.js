import 'phaser';
let map;
let phaser
export default class Map extends Phaser.Scene {
    constructor(config) {
        super(config.scene);
        this.scene = config.scene;
        this.scene.add.existing(this);
        phaser = config.scene
    }
    
    
    create() {
        map = phaser.physics.add.image(0, 0, 'map').setScale(2, 2).setOrigin(0).setScrollFactor(1);
    }
    
    update() {
        
    }
}


import responsive from "./../core/responsive";

let graphics, levelText, nameText, nameText2;
let phaser;
let width, height;
let x,y;
export default class Map extends Phaser.Scene {
    constructor(config) {
        super(config.scene);
        this.scene = config.scene;
        this.scene.add.existing(this);
        phaser = config.scene
    }
    
    
    create() {
        width = phaser.scene.scene.physics.world.bounds.width;
        height = phaser.scene.scene.physics.world.bounds.height;
        x = width * 0.5;
        y = height * 0.5;

        let responsives = new responsive(width, height)
        responsives.check(height, width)
        let scaleRatio = responsives.getScale()

        graphics = phaser.make.graphics().fillStyle(0xF0FFFF).fillRect(0, 0, 700, 25);
        graphics.generateTexture('hudbar', 700, 25);
        graphics.destroy();
        phaser.add.image(window.screen.width-900, window.screen.height-800, 'hudbar').setScrollFactor(0).setAlpha(0.3).setScale(scaleRatio + 2);
        
        // levelText = phaser.add.text(window.screen.width-1220, window.screen.height-810, 'Lv.1', { fontSize: '16px', fill: '#00FFFF' }).setScrollFactor(0).setShadow(1, 1, '#000000', 1).setScale(scaleRatio + 1);
        nameText = phaser.add.text(scaleRatio + 20, y-380, 'แป้งมาเยือน อิอิ', { fontSize: '16px', fill: '#FF1493' }).setScrollFactor(0).setShadow(1, 1, '#000000', 1).setScale(scaleRatio + 1);
        nameText2 = phaser.add.text(x-5, y-50, 'O', { fontSize: '16px', fill: '#FF1493' }).setScrollFactor(0).setShadow(1, 1, '#000000', 1).setScale(scaleRatio + 0.4);
    }
    
    update() {
        
    }
}


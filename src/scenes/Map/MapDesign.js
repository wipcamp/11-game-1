
let x, y, height, width;
let graphics, exp, graphicRank;
let heart, part, bg, flower, wall, safezone;
let levelText, nameText;
let phaser;

class MapDesign extends Phaser.Scene {

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

        bg = phaser.add.image(1890, 630, 'bg');
        safezone = phaser.physics.add.staticGroup({
            key: 'safezone',
            frameQuantity: 1,
            collideWorldBounds: true,
            visible: true
        });
        Phaser.Actions.PlaceOnRectangle(safezone.getChildren(), new Phaser.Geom.Rectangle(50, 210, x, 10));
        safezone.refresh();

        // wall = phaser.physics.add.staticGroup({
        //     key: 'wall',
        //     frameQuantity: 130,
        //     collideWorldBounds: true,

        // });
        // Phaser.Actions.PlaceOnRectangle(wall.getChildren(), new Phaser.Geom.Rectangle(20, 20, 1910, 860));
        // wall.refresh();

        heart = phaser.physics.add.image(120, 22.5, 'heart');

        part = phaser.physics.add.staticGroup({
            key: 'part',
            frameQuantity: 1,
            collideWorldBounds: true,
            visible: false
        });
        Phaser.Actions.PlaceOnRectangle(part.getChildren(), new Phaser.Geom.Rectangle(x, 35, x, 10));
        part.refresh();

        graphics = phaser.make.graphics().fillStyle(0xF0FFFF).fillRect(0, 0, 1300, 50);
        graphics.generateTexture('hudbar', 1300, 50);
        graphics.destroy();
        phaser.add.image(x, 15, 'hudbar').setAlpha(0.3);
        
        graphicRank = phaser.make.graphics().fillStyle(0xF0FFFF).fillRect(0, 0, 200, 100);
        graphicRank.generateTexture('bgRank', 200, 100);
        graphicRank.destroy();
        phaser.add.image(1155, 95, 'bgRank').setAlpha(0.3);

        exp = phaser.make.graphics().fillStyle(0x00FF00).fillRect(0, 0, 1200, 5);
        exp.generateTexture('exp', 1200, 5);
        exp.destroy();
        phaser.add.image(x, 550, 'exp');

        levelText = phaser.add.text(10, 5, 'Lv.1', { fontSize: '12px', fill: '#00FFFF' });
        nameText = phaser.add.text(10, 20, 'แป้งมาเยือน อิอิ', { fontSize: '12px', fill: '#FF1493' });
        
        
    }

    getPart() {
        return part
    }

    getSafeZone() {
        return safezone
    }
    
    update() {
    

    }
}

export default MapDesign;
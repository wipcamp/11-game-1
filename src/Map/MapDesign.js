import responsive from "./../core/responsive";

let x, y, height, width;
let graphics, exp, graphicRank;
let heart, bg, wall, safezone;
let flower, flower2;
let part, part2, part3, part4;
let levelText;
let nameText, nameText2;
let phaser;
let longlog

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

        bg = phaser.add.image(0, 0, 'bg').setOrigin(0).setScrollFactor(1);

        let responsives = new responsive(width, height)
        responsives.check(height, width)
        let scaleRatio = responsives.getScale()


        safezone = phaser.physics.add.staticGroup({
            key: 'safezone',
            frameQuantity: 1,
            collideWorldBounds: true,
            visible: true
        });
        Phaser.Actions.PlaceOnRectangle(safezone.getChildren(), new Phaser.Geom.Rectangle(50, 600));
        safezone.refresh();

        longlog = phaser.physics.add.staticGroup({
            key: 'longlog',
            frameQuantity: 3,
            collideWorldBounds: true,
            visible: true
        });
        Phaser.Actions.PlaceOnRectangle(longlog.getChildren(), new Phaser.Geom.Rectangle(35, 200));
        longlog.refresh();

        part2 = phaser.physics.add.staticGroup({
            key: 'part2',
            frameQuantity: 1,
            collideWorldBounds: true,
            visible: true
        });
        Phaser.Actions.PlaceOnRectangle(part2.getChildren(), new Phaser.Geom.Rectangle(x - 595, y, x, 10));
        part2.refresh();

        part3 = phaser.physics.add.staticGroup({
            key: 'part2',
            frameQuantity: 1,
            collideWorldBounds: true,
            visible: true
        });
        Phaser.Actions.PlaceOnRectangle(part3.getChildren(), new Phaser.Geom.Rectangle(x + 1225, y, x, 10));
        part3.refresh();

        part4 = phaser.physics.add.staticGroup({
            key: 'part',
            frameQuantity: 1,
            collideWorldBounds: true,
            visible: true
        });
        Phaser.Actions.PlaceOnRectangle(part4.getChildren(), new Phaser.Geom.Rectangle(x, y + 523, x, 10));
        part4.refresh();

        flower = phaser.physics.add.staticGroup({
            key: 'flower',
            frameQuantity: 3,
            collideWorldBounds: true,
            visible: true
        });
        Phaser.Actions.PlaceOnLine(flower.getChildren(), new Phaser.Geom.Line(630, 300, 630, 420));
        flower.refresh();

        flower2 = phaser.physics.add.staticGroup({
            key: 'flower',
            frameQuantity: 3,
            collideWorldBounds: true,
            visible: true
        });
        Phaser.Actions.PlaceOnLine(flower2.getChildren(), new Phaser.Geom.Line(300, 700, 420, 700));
        flower2.refresh();

        graphics = phaser.make.graphics().fillStyle(0xF0FFFF).fillRect(0, 0, 700, 25);
        graphics.generateTexture('hudbar', 700, 25);
        graphics.destroy();
        phaser.add.image(x, y - 170, 'hudbar').setScrollFactor(0).setAlpha(0.3).setScale(scaleRatio + 0.8);

        graphicRank = phaser.make.graphics().fillStyle(0xF0FFFF).fillRect(0, 0, 100, 70);
        graphicRank.generateTexture('bgRank', 100, 70);
        graphicRank.destroy();
        phaser.add.image(x + 263, y - 81, 'bgRank').setScrollFactor(0).setAlpha(0.3);

        exp = phaser.make.graphics().fillStyle(0x00FF00).fillRect(0, 0, 600, 2);
        exp.generateTexture('exp', 600, 2);
        exp.destroy();
        phaser.add.image(x, y + 133, 'exp').setScrollFactor(0);

        levelText = phaser.add.text(x - 380, y - 175, 'Lv.1', { fontSize: '16px', fill: '#00FFFF' }).setScrollFactor(0).setShadow(1, 1, '#000000', 1).setScale(scaleRatio + 0.4);
        nameText = phaser.add.text(x - 320, y - 175, 'แป้งมาเยือน อิอิ', { fontSize: '16px', fill: '#FF1493' }).setScrollFactor(0).setShadow(1, 1, '#000000', 1).setScale(scaleRatio + 0.4);
        nameText2 = phaser.add.text(x - 47, y - 30, 'แป้งมาเยือน อิอิ', { fontSize: '16px', fill: '#FF1493' }).setScrollFactor(0).setShadow(1, 1, '#000000', 1).setScale(scaleRatio + 0.4);

        // phaser.cameras.main.startFollow(nextText, true, 1,1)

    }
    getLonglog() {
        return longlog
    }

    getPart() {
        return part
    }
    getPart2() {
        return part2
    }
    getPart3() {
        return part3
    }
    getPart4() {
        return part4
    }
    getSafeZone() {
        return safezone
    }
    getWall() {
        return wall
    }
    getFlower() {
        return flower
    }
    getFlower2() {
        return flower2
    }

    update() {


    }
}

export default MapDesign;
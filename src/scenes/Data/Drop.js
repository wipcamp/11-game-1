let x, y, height, width;
let phaser;
let count=0;
let dropexp, dropgold, dropheart;
let startIndex = 0, length = 2, randomIndex;
let randomText;


class Drop extends Phaser.Scene {

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
        dropexp = phaser.physics.add.group({
            key: 'dropExp',
            frameQuantity: 100,
            collideWorldBounds: true,
            setXY: { x: 100, y: 420 },
        });
        
       

    }

    update() {

    }

    GetRandom(bosses, weapon) {
        weapon.disableBody(true, true);
        randomIndex = startIndex + Math.floor(Math.random() * length);
        randomText = phaser.add.text(x - 100, y - 135, randomIndex, { font: '10px Arial', fill: '#000000' }).setScrollFactor(0);
        // dropexp = phaser.physics.add.staticGroup({
        //     key: 'dropExp',
        //     frameQuantity: 2,
        //     collideWorldBounds: true,
        //     visible: true
        // });
        // Phaser.Actions.PlaceOnLine(dropexp.getChildren(), new Phaser.Geom.Line(bosses.x,bosses.y,bosses.x+10,bosses.y+10));
        // dropexp.refresh();

        if (randomIndex == 0) {
            dropgold = phaser.physics.add.image(bosses.x + 10, bosses.y + 10, 'dropGold');
            return randomIndex;
        } if (randomIndex == 1) {
            dropheart = phaser.physics.add.image(bosses.x + 10, bosses.y + 10, 'heart').setScale(0.5);
            return randomIndex;
        } else {
            // dropexp = phaser.physics.add.image(bosses.x+10, bosses.y+10, 'dropExp');
            // dropexp.setCollideWorldBounds(true);
        }

        return randomIndex;
    }

    dropExp(monsters, bullets) {
        count--;
        if (count <= 0) {
            monsters.disableBody(true, true);
            for (let index = 0; index != dropexp.children.entries.length; index++) {
                if (!dropexp.children.entries[index].body.enable) {
                    dropexp.children.entries[index].x = monsters.x
                    dropexp.children.entries[index].y = monsters.y
                    dropexp.children.entries[index].body.enable=true
                    dropexp.children.entries[index].visible=true
                    return;
                }
            }


        }
        return count;
    }

    getDropExp() {
        return dropexp;
    }
    getDropGold() {
        return dropgold;
    }
    getDropHeart() {
        return dropheart;
    }

}


export default Drop;
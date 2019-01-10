
let x, y, height, width;
let phaser;
let playButOption, playButSound;
let music;
let bgOption;

class Option extends Phaser.Scene {

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

        playButOption = phaser.add.image(x+303, y-129, 'butOption').setScrollFactor(0).setScale(0.6);
        playButOption.setInteractive();
        playButOption.input.useHandCursor = true;
        playButOption.on ('pointerup', () => { 
            bgOption = phaser.make.graphics().fillStyle(0xFFFFFF).fillRect(0, 0, 300, 240);
            bgOption.generateTexture('bgOp', 300, 240);
            bgOption.destroy();
            phaser.add.image(x, y+5, 'bgOp').setAlpha(0.7).setScrollFactor(0);

            playButSound = phaser.add.image(x-50, y, 'butSound');
            playButSound.setInteractive();
            // playButSound.on ('pointerup', () => {
            //     phaser.input.on('gameobjectup',changeVolume, phaser);
            // });  
        });

    }
    
    update() {
    

    }
}

// function changeVolume(pointer) {
//     music.pause();
// }

export default Option;
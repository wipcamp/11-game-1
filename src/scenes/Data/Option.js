
let x, y, height, width;
let phaser;
let playButOption, playButSound, playButSoundNo, playButLogOut, playButFull;
let music;
let bgOption;
let hit = 0;

class Option extends Phaser.Scene {

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

        music = phaser.sound.add('bg');
        music.play();
        
        
        playButOption = phaser.add.image(x+303, y-129, 'butOption').setScrollFactor(0).setScale(0.6);
        playButOption.setInteractive();
        playButOption.input.useHandCursor = true;
        playButOption.on ('pointerup', () => { 
            bgOption = phaser.make.graphics().fillStyle(0xFFFFFF).fillRect(0, 0, 300, 240);
            bgOption.generateTexture('bgOp', 300, 240);
            bgOption.destroy();
            phaser.add.image(x, y+5, 'bgOp').setAlpha(0.7).setScrollFactor(0);

            playButSound = phaser.add.image(x-50, y, 'butSound').setScrollFactor(0);
            playButSound.setInteractive();
            playButSound.on ('pointerup', () => {
                phaser.input.on('gameobjectup',playVolume, this);
            }); 

            playButSoundNo = phaser.add.image(x+50, y, 'butSoundNo').setScrollFactor(0);
            playButSoundNo.setInteractive();
            playButSoundNo.on ('pointerup', () => {
                phaser.input.on('gameobjectup',stopVolume, this);
            }); 

            playButLogOut = phaser.add.image(x, y+50, 'butLogOut').setScrollFactor(0);
            playButLogOut.setInteractive();
            playButLogOut.on ('pointerup', () => {
                phaser.scene.start('MainMenu');
            });

            playButFull = phaser.add.image(x, y+100, 'butFull').setScrollFactor(0);
            playButFull.setInteractive();
            playButFull.on ('pointerup', () => {
                phaser.input.on('gameobjectup',fullScreen, this);
            }); 

              
        });

    }
    
    update() {
    
    }

}

function playVolume(pointer) {
        music.play();
        return music
}

function stopVolume(pointer) {
        music.stop();
        return music
}




export default Option;
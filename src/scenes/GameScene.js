import hpPlus from './hp/hpPlus'
let hp


class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('hp','../../images/hp.png')
        
    }

    create() {
        hp = new hpPlus({scene:this,})
        hp.create()
    }

    update() {
        hp.update()
    }
}

export default GameScene;

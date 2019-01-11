import HpPlus from './hp/HpPlus'
import hpPotion from './hp/hpPotion'
let hpplus
let hppotions
let gethp

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('hp','../../images/hp.png')
        this.load.image('potion','../../images/potion.png')
        
    }

    create() {
        hpplus = new HpPlus({scene:this,})
        hpplus.create()
        hppotions = new hpPotion({scene:this,})
        hppotions.create()
        gethp  = this.physics.add.collider(hpplus.getHpPer5Level(), hppotions.getHpPotion(),this.heal,null,this);
    }

    update() {
        hpplus.update()
        hppotions.update()
    }
    
    heal(hpplus,hppotion){
        
        hppotions.createNewHp()
        hppotion.disableBody(true,true)
        
    }
}

export default GameScene;


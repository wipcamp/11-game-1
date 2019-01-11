import 'phaser';
let hpPer5level;
let hp2
let num=1   
let x=100
let y=100
let phaser;
class hpPlus extends Phaser.Scene {
    constructor(config) {
        super(config.scene);
        this.scene = config.scene;
        this.scene.add.existing(this);
        phaser = config.scene
    }


    create() {
        hpPer5level = phaser.physics.add.image(x,y,'hp').setScale(5,5)
        
        this.keyC = phaser.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
        
        
        

    }
    


    update() {
        
        hpPer5level.setMaxVelocity(0)

        if(this.keyC.isDown){

            num++
            console.log(num)
        }
        if(num==5){
            if(x<=1000){
                hpPer5level = phaser.physics.add.image(x+50,y,'hp').setScale(5,5)
                x += 50
            }else if(x>1000){
                hpPer5level = phaser.physics.add.image(x,y+50,'hp').setScale(5,5)
                x = 100
                y += 50
            
            }
            num = 0
        }


    }
    getHpPer5Level() {
        return hpPer5level
    }
}


export default hpPlus;
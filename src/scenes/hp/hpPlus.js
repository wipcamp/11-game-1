import 'phaser';
let hp;
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
        hp = phaser.physics.add.image(x,y,'hp').setScale(5,5)
        
        this.keyC = phaser.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
        
        
        

    }
    


    update() {
        if(this.keyC.isDown){

            num++
            console.log(num)
        }
        if(num==5){
            if(x<=1000){
                hp = phaser.physics.add.image(x+50,y,'hp').setScale(5,5)
                x += 50
            }else if(x>1000){
                hp = phaser.physics.add.image(x,y+50,'hp').setScale(5,5)
                x = 100
                y += 50
            
            }
            num = 0
        }


    }
}


export default hpPlus;
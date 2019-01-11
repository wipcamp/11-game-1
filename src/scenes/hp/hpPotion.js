import 'phaser';
let hppotion;
let hp
let num=1   
let x=700
let y=100
let xHP=100
let yHP=100
let phaser;
let cursors
class hpPotion extends Phaser.Scene {
    constructor(config) {
        super(config.scene);
        this.scene = config.scene;
        this.scene.add.existing(this);
        phaser = config.scene
    }


    create() {
        hppotion = phaser.physics.add.image(x,y,'potion').setScale(5,5)
        
        cursors = phaser.input.keyboard.createCursorKeys();
        
        
        
        

    }
    


    update() {
        hppotion.setVelocity(0)

        if(cursors.left.isDown){
            hppotion.setVelocityX(-150);
        }else if(cursors.right.isDown){
            hppotion.setVelocityX(150);
        }if(cursors.up.isDown){
            hppotion.setVelocityY(-150);
        }else if(cursors.down.isDown){
            hppotion.setVelocityY(150);
        }

        
    }

    getHpPotion() {
        return hppotion
    }
    createNewHp(){
        if(x<=1000){
            hp = phaser.physics.add.image(xHP+50,yHP,'hp').setScale(5,5)
            xHP += 50
        }else if(x>1000){
            hp = phaser.physics.add.image(xHP,yHP+50,'hp').setScale(5,5)
            xHP = 100
            yHP += 50
        }
        num = 0
    }
}


export default hpPotion;
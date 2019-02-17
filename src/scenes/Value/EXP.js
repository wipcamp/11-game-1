
let x, y, height, width;
let phaser;
let exp=0, maxExp = 100;
let expText, exp1Text;
let dropexp, player, level=1;

class EXP extends Phaser.Scene {

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

        expText = phaser.add.text(x - 70, y - 135, exp, { font: '10px Arial', fill: '#000000' }).setScrollFactor(0);       
        exp1Text  = phaser.add.text(x - 40, y - 135, maxExp, { font: '10px Arial', fill: '#000000' }).setScrollFactor(0); 
    }
    
    
    update() {
    

    }

    expMons (player, dropexp) {
        exp+=10;
        dropexp.disableBody(true, true);
        expText.setText(exp);
        exp1Text.setText(Math.floor(maxExp));

        if (exp >= maxExp) {
            level++;
            maxExp*=1.25;
            exp=0;
            return ;
        }

        return dropexp;
    }

}

export default EXP;
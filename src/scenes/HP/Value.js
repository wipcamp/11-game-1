
let x, y, height, width;
let maxText, currentText;
let playimage1, playimage2;
let heart1_2, heart1, heart2_2, heart2, heart3_2, heart3;
let currentHeart = 3;
let hpMons = 100;
let phaser;

class Value extends Phaser.Scene {

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

        heart1_2 = phaser.physics.add.image(x-230, y-128, 'halfheart').setScrollFactor(0).setScale(0.7);
        heart1_2.setVisible(false);
        heart1 = phaser.physics.add.image(x-230, y-128, 'heart').setScrollFactor(0).setScale(0.7);
        heart1.setVisible(true);

        heart2_2 = phaser.physics.add.image(x-210, y-128, 'halfheart').setScrollFactor(0).setScale(0.7);
        heart2_2.setVisible(false);
        heart2 = phaser.physics.add.image(x-210, y-128, 'heart').setScrollFactor(0).setScale(0.7);
        heart2.setVisible(true);


        heart3_2 = phaser.physics.add.image(x-190, y-128, 'halfheart').setScrollFactor(0).setScale(0.7);
        heart3_2.setVisible(false);
        heart3 = phaser.physics.add.image(x-190, y-128, 'heart').setScrollFactor(0).setScale(0.7);
        heart3.setVisible(true);

        //test ว่าถ้าทำเงื่อนไข แล้วลดเปล่า
        playimage1 = phaser.add.image(x, y, 'heart');
        playimage1.setInteractive();
        playimage1.input.useHandCursor = true;
        phaser.input.on('gameobjectup', this.checkHeart, this);
        currentText = phaser.add.text(x, y-135, 'manyheart: '+ currentHeart, { font: '10px Arial', fill: '#000000' }).setScrollFactor(0);
        
        playimage2 = phaser.add.image(x-20, y-20, 'heart');
        playimage2.setInteractive();
        playimage2.input.useHandCursor = true;
        phaser.input.on('gameobjectup', this.checkHp, this);
        maxText = phaser.add.text(x+70, y-135, 'HP Monster: '+ hpMons, { font: '10px Arial', fill: '#000000' }).setScrollFactor(0);

    }

    update() {
        

    }

    checkHeart () {
        currentHeart -= 0.5;
        currentText.setText('Score: ' + currentHeart);

        if (currentHeart >= 2.5 && currentHeart < 3) {
            heart3.setVisible(false);
            heart3_2.setVisible(true);
            return currentHeart;
         } if (currentHeart >= 2 && currentHeart < 2.5) {
            heart3.setVisible(false);
            heart3_2.setVisible(false);
            return currentHeart;
         } if (currentHeart >= 1.5 && currentHeart < 2) {
            heart2.setVisible(false);
            heart2_2.setVisible(true);
            return currentHeart;
         } if (currentHeart >= 1 && currentHeart < 1.5) {
            heart2_2.setVisible(false);
            return currentHeart;
         } if (currentHeart >= 0.5 && currentHeart < 1) {
            heart1_2.setVisible(true);
            heart1.setVisible(false);
            return currentHeart;
        } else {
            heart1_2.setVisible(false);
            heart1.setVisible(true);
            heart2.setVisible(true);
            heart3.setVisible(true);
            currentHeart = 3;
        }
        return currentHeart;
    }

    checkHp () {
        hpMons -= 10;
        maxText.setText('Score: ' + hpMons);

        if (hpMons <= 0 ) {
            playimage2.setVisible(false);
            hpMons =100;
            return hpMons;
        } else {
            return hpMons;
        }
    }
}





export default Value;

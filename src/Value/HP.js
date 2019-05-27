import responsive from "./../core/responsive";
let x, y, height, width;
let maxText, currentText, bossText, monsterText;
let playimage1, playimage2, playimage3;
let heart1_2, heart1, heart2_2, heart2, heart3_2, heart3;
let score=0;
let currentHeart = 3;
let hpMons = 100;
let hpBoss = 1000;
let phaser;

class HP extends Phaser.Scene {

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

        let responsives = new responsive(width, height)
        responsives.check(height, width)
        let scaleRatio = responsives.getScale()

        heart1_2 = phaser.physics.add.image(scaleRatio + 320, y-365, 'halfheart').setScrollFactor(0).setScale(1.5);
        heart1_2.setVisible(false);
        heart1 = phaser.physics.add.image(scaleRatio + 320, y-365, 'heart').setScrollFactor(0).setScale(1.5);
        heart1.setVisible(true);

        heart2_2 = phaser.physics.add.image(scaleRatio + 360, y-365, 'halfheart').setScrollFactor(0).setScale(1.5);
        heart2_2.setVisible(false);
        heart2 = phaser.physics.add.image(scaleRatio + 360, y-365, 'heart').setScrollFactor(0).setScale(1.5);
        heart2.setVisible(true);


        heart3_2 = phaser.physics.add.image(scaleRatio + 400, y-365, 'halfheart').setScrollFactor(0).setScale(1.5);
        heart3_2.setVisible(false);
        heart3 = phaser.physics.add.image(scaleRatio + 400, y-365, 'heart').setScrollFactor(0).setScale(1.5);
        heart3.setVisible(true);

        
        // bossText = phaser.add.text(x+290, y-380, 'HP Boss: '+ hpBoss, { font: '12px Arial', fill: '#000000' }).setScrollFactor(0).setScale(scaleRatio + 1);
        
        // monsterText = phaser.add.text(x+480, y-380, score + ' /100 ', { font: '12px Arial', fill: '#000000' }).setScrollFactor(0).setScale(scaleRatio + 1);

    }

    update() {
        

    }

    getHP() {
        return HP
    }

    checkHeart () {
        currentHeart -= 0.5;
        // currentText.setText('HP Player: ' + currentHeart);

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

    checkHp() {
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

    checkHpBoss () {
        hpBoss -= 10;
        bossText.setText('Score: ' + hpBoss);

        if (hpBoss <= 0 ) {
            playimage3.setVisible(false);
            hpBoss =1000;
            return hpBoss;
        } else {
            return hpBoss;
        }
    }

}





export default HP;

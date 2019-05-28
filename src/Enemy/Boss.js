import responsive from "./../core/responsive";
import Bullets from './../core/Bullet'
import Player from '../Player/Player'
import MapDesign from '../Map/MapDesign'


let phasers;
let x, y, height, width;
let boss;
let player;
let blanker;
let bossBullets;
let bossText;
let hp;
let hp3;
let time = 0;

class Boss extends Phaser.Scene {

    constructor(config) {
        super(config.scene);
        this.scene = config.scene;
        this.scene.add.existing(this);
        phasers = config.scene
    }


    preload() {


    }

    create() {

        let Bullet = new Bullets(this)
        Bullet.create()

        

        let width = phasers.scene.scene.game.config.width;
        let height = phasers.scene.scene.game.config.height;
        console.log(width, height)
        x = width * 0.5;
        y = height * 0.5;

        let responsives = new responsive(width, height)
        responsives.check(height, width)
        let scaleRatio = responsives.getScale()

        // ตัวละคร boss
        boss = phasers.physics.add.sprite(1000, 500, 'boss').setScale(scaleRatio + 0.2)

        // Add groups for Bullet objects
        bossBullets = phasers.physics.add.group({ classType: Bullet.getBullet(), runChildUpdate: true });

        // Set sprite variables
        boss.health = 270000;
        boss.lastFired = 0;

        // gameObject.physics.add.collider(player.getPlayer(), boss, player.playerHitCallback);

        bossText = phasers.add.text(x+290, y-380, 'HP Boss: '+  boss.health, { font: '12px Arial', fill: '#000000' }).setScrollFactor(0).setScale(scaleRatio + 1);

    }

    update() {
        
        this.enemyFire(boss, player, phasers,blanker);

    }

    resize(width, height) {
        phasers.cameras.resize(width, height);
        this.bg.setDisplaySize(0, 0);
    }

    getPlayer(p) {
        player = p
    }
    getBlanker(bk){
        blanker = bk     
    }

    getHP(hpp){
        hp = hpp
    }

    getBoss(){
        return boss
    }

    getBossBullet() {
        return Bullet
    }


    enemyHitCallback(bossHit, bulletHit) {
        // Reduce health of boss

        if (bulletHit.active && bossHit.active) {
            bossHit.health = bossHit.health - 10;
            console.log("Boss hp: ", bossHit.health);

            // Kill enemy if health <= 0
            if (bossHit.health == 0) {
                bossHit.setActive(false).setVisible(false);
            }

            // Destroy bullet
            bulletHit.setActive(false).setVisible(false);
        }

        bossText.setText('HP Boss: '+  boss.health);
    }

    enemyFire(boss, player, gameObject, blanker) {
        boss.lastFired += 10
        if (boss.active === false) {
            return;
        } else {
            if ((time + boss.lastFired) >= 350) {
                boss.lastFired = time;

                // Get bullet from bullets group
                var bullet = bossBullets.get().setActive(true).setVisible(true);

                if (bullet) {

                    bullet.bossfire(boss.x, boss.y, Phaser.Math.Between(0, 360));

                    // Add collider between bullet and player
                   gameObject.physics.add.collider(player.getPlayer(), bullet,player.playerHitCallback)
                    // gameObject.physics.add.collider(player.getPlayer(), bullet, hp.checkHp);
                    // gameObject.physics.add.collider(player.getPlayer(), bullet, hp.checkHeart())
                    gameObject.physics.add.collider(bullet, blanker.getBlanker(), (bullet, blanker) => {
                        bullet.setActive(false).setVisible(false);
                    });
                    gameObject.physics.add.collider(bullet, blanker.getBlanker2(), (bullet, blanker) => {
                        bullet.setActive(false).setVisible(false);
                    });
                    
                    gameObject.physics.add.collider(bullet, blanker.getBlanker3(), (bullet, blanker) => {
                        bullet.setActive(false).setVisible(false);
                    });
                    gameObject.physics.add.collider(bullet, blanker.getBlanker4(), (bullet, blanker) => {
                        bullet.setActive(false).setVisible(false);
                    });
                    gameObject.physics.add.collider(bullet, blanker.getBlanker5(), (bullet, blanker) => {
                        bullet.setActive(false).setVisible(false);
                    });
                    gameObject.physics.add.collider(bullet, blanker.getBlanker6(), (bullet, blanker) => {
                        bullet.setActive(false).setVisible(false);
                    });
                    gameObject.physics.add.collider(bullet, blanker.getBlanker7(), (bullet, blanker) => {
                        bullet.setActive(false).setVisible(false);
                    });
                    gameObject.physics.add.collider(bullet, blanker.getBlanker8(), (bullet, blanker) => {
                        bullet.setActive(false).setVisible(false);
                    });
                    gameObject.physics.add.collider(bullet, blanker.getBlanker9(), (bullet, blanker) => {
                        bullet.setActive(false).setVisible(false);
                    });
                    gameObject.physics.add.collider(bullet, blanker.getBlanker10(), (bullet, blanker) => {
                        bullet.setActive(false).setVisible(false);
                    });
                    gameObject.physics.add.collider(bullet, blanker.getBlanker11(), (bullet, blanker) => {
                        bullet.setActive(false).setVisible(false);
                    });
                    gameObject.physics.add.collider(bullet, blanker.getBlanker12(), (bullet, blanker) => {
                        bullet.setActive(false).setVisible(false);
                    });
                    gameObject.physics.add.collider(bullet, blanker.getBlanker13(), (bullet, blanker) => {
                        bullet.setActive(false).setVisible(false);
                    });
                    gameObject.physics.add.collider(bullet, blanker.getBlanker14(), (bullet, blanker) => {
                        bullet.setActive(false).setVisible(false);
                    });
                    gameObject.physics.add.collider(bullet, blanker.getBlanker15(), (bullet, blanker) => {
                        bullet.setActive(false).setVisible(false);
                    });
                    
                }
            }
        }

    }
}


export default Boss;
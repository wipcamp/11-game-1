import responsive from "./responsive";
import Bullets from './Bullet'
import Player from './Player'

let phasers;
let x, y, height, width;
let boss;
let player;
let bossBullets;
let hp1;
let hp2;
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

        this.load.image('boss', '../../images/boss.gif');

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
        boss = phasers.physics.add.sprite(400, 200, 'boss').setScale(scaleRatio + 0.2)

        // Add groups for Bullet objects
        bossBullets = phasers.physics.add.group({ classType: Bullet.getBullet(), runChildUpdate: true });

        // Set sprite variables
        boss.health = 3;
        boss.lastFired = 0;

    }

    update() {

        this.enemyFire(boss, player, phasers);

    }

    resize(width, height) {
        phasers.cameras.resize(width, height);
        this.bg.setDisplaySize(0, 0);
    }

    getPlayer(p) {
        player = p
        console.log(player.getPlayer())
    }

    getBoss(){
        return boss
    }

    enemyHitCallback(bossHit, bulletHit) {
        // Reduce health of boss

        if (bulletHit.active && bossHit.active) {
            bossHit.health = bossHit.health - 1;
            console.log("Boss hp: ", bossHit.health);

            // Kill enemy if health <= 0
            if (bossHit.health <= 0) {
                bossHit.setActive(false).setVisible(false);
            }

            // Destroy bullet
            bulletHit.setActive(false).setVisible(false);
        }
    }

    enemyFire(boss, player, gameObject) {
        boss.lastFired += 50
        if (boss.active === false) {
            return;
        } else {
            if ((time + boss.lastFired) >= 1000) {
                boss.lastFired = time;

                // Get bullet from bullets group
                var bullet = bossBullets.get().setActive(true).setVisible(true);

                if (bullet) {

                    bullet.fire(boss.x, boss.y, boss.rotation + Phaser.Math.Between(0, 300));

                    // Add collider between bullet and player
                    gameObject.physics.add.collider(player.getPlayer(), bullet, player.playerHitCallback);
                }
            }
        }

    }
}


export default Boss;
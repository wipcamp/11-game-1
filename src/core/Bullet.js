import responsive from "./responsive";


let phasers;


let bullet;

class Bullet extends Phaser.Scene {
    constructor(config) {
        super(config.scene);
        this.scene = config.scene;
        this.scene.add.existing(this);
        phasers = config.scene
    }

    preload() {

        // this.load.image('reticle', '../../images/target.png');
        // this.load.image('bullet', '../../images/weapon.png');
        // // this.load.image('bomb', '../../images/bomb.png');
    }

    create() {
        bullet = new Phaser.Class({

            Extends: Phaser.GameObjects.Image,

            initialize:

                function Bullet(scene) {
                    Phaser.GameObjects.Image.call(this, scene, 0, 0, 'bullet');
                    this.speed = Phaser.Math.GetSpeed(400, 1);
                    this.velocity = new Phaser.Geom.Point(0, 0);
                },

            fire: function(x, y, direction) {
                this.setPosition(x, y);
                this.setAngle(-direction*2000)
                this.setActive(true);
                this.setVisible(true);

                this.velocity.setTo(0, -this.speed)
                Phaser.Math.Rotate(this.velocity, direction)
            },

            bossfire: function (x, y, direction) {
                this.setPosition(x, y);
                this.setRotation(direction);
                
                this.setActive(true);
                this.setVisible(true);

                this.velocity.setTo(0, -this.speed)
                Phaser.Math.Rotate(this.velocity, direction)
            },


            update: function (time, delta) {
                this.x += this.velocity.x * delta;
                this.y += this.velocity.y * delta;

                if (this.y < -50) {
                    this.setActive(false);
                    this.setVisible(false);
                }
            }

        });


    }

    getBullet() {
        return bullet;
    }
}

export default Bullet;
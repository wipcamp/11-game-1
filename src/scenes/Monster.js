import Bullets from './../core/Bullet'
let x, y, height, width;
let monsters;
let phaser;
let monstersBullets;

class Monster extends Phaser.Scene {

    constructor(config) {
        super(config.scene);
        this.scene = config.scene;
        this.scene.add.existing(this);
        phaser = config.scene
    }


    preload() {

    }

    create() {
        width = phaser.scene.scene.physics.world.bounds.width;
        height = phaser.scene.scene.physics.world.bounds.height;
        x = width * 0.5;
        y = height * 0.5;

        let Bullet = new Bullets(this)
        Bullet.create()

        // this.gameitems = this.physics.add.group();
        // for (var i = 0; i < 20; i++) {
        //     var x = Phaser.Math.RND.between(0, 1260);
        //     var y = Phaser.Math.RND.between(0, 560);
        //     var newobj = this.gameitems.create(x, y, 'monster');
        // }

        // monsters = phaser.physics.add.group({
        //     key: 'monster',
        //     frameQuantity: 100,
        //     collideWorldBounds: true,
        //     bounceX: 1,
        //     bounceY: 1,
        //     velocityX: 40,
        //     velocityY: 40,
        // });
        // monsters.children.iterate(function (child) {
        //     child.hpMonsR=100
        // });
        // Phaser.Actions.RandomRectangle(monsters.getChildren(), new Phaser.Geom.Rectangle(100, 100, 1260, 500));
        // // phaser.physics.add.collider(monsters);

        // key: 'left',
        // frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        // frameRate: 10,
        // repeat: -1

        monsters = phaser.anims.create({
            key: 'walk',
            frames: phaser.anims.generateFrameNumbers('monster', { start: 0, end: 1 }),
            frameRate: 10,
            repeat: -1,
            bounceX: 1,
            bounceY: 1,
            velocityX: 40,
            velocityY: 40,
        });



        monsters = phaser.physics.add.group({
            key: 'monster',
            frameQuantity: 10,
            // collideWorldBounds: true,
            bounceX: 1,
            bounceY: 1,
            velocityX: 40,
            velocityY: 40,
        });
        Phaser.Actions.RandomRectangle(monsters.getChildren(), new Phaser.Geom.Rectangle(100, 100, 1260, 500));
        for (let index = 0; index < monsters.children.entries.length; index++) {
            monsters.children.entries[index] = {
                ...monsters.children.entries[index],
                hpMonsR: 100,
            }
        }

          
        // Add groups for Bullet objects
        monstersBullets = phaser.physics.add.group({ classType: Bullet.getBullet(), runChildUpdate: true });

        monsters.health = 1;

        // phaser.physics.add.collider(monsters.getChildren());

    }
    getMonster() {
        return monsters
    }

    update() {

        // monsters.anims.play('walk', true);
    }

    monstersHitCallBack(monsterHit, bulletHit){
        // Reduce health of boss
  
        if (bulletHit.active && monsterHit.active) {
          monsterHit.health = monsterHit.health - 1;
          console.log("Monster hp: ", monsterHit.health);
  
          // Kill enemy if health <= 0
          if (monsterHit.health == 0) {
              monsterHit.setActive(false).setVisible(false);
          }
  
          // Destroy bullet
          bulletHit.setActive(false).setVisible(false);
      }
    }   
}

export default Monster;
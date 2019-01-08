import ControlPc from './Player/ControlPc'
import Monster from './Monster'

let player, monster, bullets;
class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('player', '../../images/player.png')
        this.load.image('monster', '../../images/monster.png');
        this.load.image('platform', '../../images/platform.png');
        this.load.image('bullet', '../../images/bullet.png');
    }

    create() {
        player = new ControlPc({ scene: this, });
        player.create();
        monster = new Monster({ scene: this, });
        monster.create();

        

        this.physics.add.collider(monster.getMonster(), player.getPlayer(), () => {
            player.getPlayer().setTint(0xff0000);
        });
        this.physics.add.collider(monster.getMonster(), player.getBullet(), collect);
        this.physics.add.collider(monster.getMonster(), monster.getPlatforms());
        this.physics.add.collider(player.getPlayer(), monster.getPlatforms());
    }
    
    update() {
        player.update();
        monster.update();

    }
}

function collect(monster, bullets) {
    bullets.disableBody(true, true);
}

export default GameScene;

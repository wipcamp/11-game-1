import move_mobile from './move_mobile'
import responsive from './responsive'
import Map from './Map/Map'
import Boss from './Boss'
import Bullet from './Bullet'
import Player from './Player'

let map
let mobile
let respon
let player
let boss

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });

    }

    preload() {
        this.load.image('player', '../../images/player.png');
        this.load.image('bg', '../../images/bg.jpg');

        this.load.image('up', './../../images/button_up.png');
        this.load.image('down', '../../images/button_down.png');
        this.load.image('left', '../../images/button_left.png');
        this.load.image('right', '../../images/button_right.png');

        this.load.image('up_left', '../../images/button_up_left.png');
        this.load.image('up_right', '../../images/button_up_right.png');

        this.load.image('down_left', '../../images/button_down_left.png');
        this.load.image('down_right', '../../images/button_down_right.png');

        this.load.image('player', '../../images/iconalive.png')
        this.load.image('map', '../../images/Background_long.jpg')
        this.load.image('safezone', '../../images/zone.jpg')
        this.load.image('attack','../../images/button_atk.png')

        this.load.image('reticle','../../images/target.png')
        this.load.image('bullet','../../images/bomb.png')

        this.load.image('boss','../../images/boss.gif')

        this.load.image('over','../../images/game_over.png')        
    }

    create() {
        console.log(this.scene)

        let width = this.scene.scene.game.config.width;
        let height = this.scene.scene.game.config.height;


        map = new Map({ scene: this, });
        map.create();

        mobile = new move_mobile({ scene: this })
        mobile.create()
        
        respon = new responsive({ width, height })
        respon.check(width, height)
        
        
        boss = new Boss({ scene: this });
        boss.create();  
        
        player = new Player({ scene: this})
        player.create();
        player.getBoss(boss);
        boss.getPlayer(player)
        mobile.getPlayer(player)
        // mobile.test_control_right(player)

        function setupStage() {
            phasers.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
            if (!isMobile) phasers.scale.setResizeCallback(phasers.scaleGame);
            phasers.scaleGame();
        }
        function scaleGame() {
            const padding = isMobile ? 0 : 80; // include padding around the canvas frame for desktop
            const yScale = (window.innerHeight - padding) / phasers.game.height;
            const scale = Math.min(yScale, 1);
            phasers.scale.setUserScale(scale, scale);
        };

        function scaleSprite(sprite, availableSpaceWidth, availableSpaceHeight, padding, scaleMultiplier) {
            var scale = this.getSpriteScale(sprite._frame.width, sprite._frame.height, availableSpaceWidth, availableSpaceHeight, padding);
            sprite.scale.x = scale * scaleMultiplier;
            sprite.scale.y = scale * scaleMultiplier;
        }

        function resize() {
            this.scaleSprite(phasers.upButton, width, height / 3, 50, 1);
            this.upButton.x = phasers.world.centerX;
            this.upButton.y = phasers.world.centerY - height / 3;

            this.scaleSprite(phasers.downButtonButton, width, height / 3, 50, 1);
            this.downButton.x = phasers.world.centerX;
            this.downButton.y = phasers.world.centerY;

            this.scaleSprite(phasers.leftButtonButton, width, height / 3, 50, 0.5);
            this.lefttButtonButton.x = phasers.world.centerX - phasers.leftButtonButton.width / 2;
            this.leftButton.y = phasers.world.centerY + height / 3;

            this.scaleSprite(phasers.rightButton, width, height / 3, 50, 0.5);
            this.rightButton.x = phasers.world.centerX + phasers.rightButton.width / 2;
            this.rightButton.y = phasers.world.centerY + height / 3;
        }

    }

    update() {
        player.update();
        boss.update();
    }

}



export default GameScene;

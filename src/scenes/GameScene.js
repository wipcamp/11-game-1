import move_mobile from './move_mobile'
import responsive from './responsive'

let mobile
let respon

import ControlPc from './Player/ControlPc'
import Map from './Map/Camera Player'
import SafeZone from './Map/SafeZone'
let player;
let map;
let zone
let gameover = false;
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
    }

    create() {
        this.gameHeight = this.sys.canvas.height;
        this.gameWidth = this.sys.canvas.width;
        mobile = new move_mobile({ scene: this })
        mobile.create()


        let width = this.scene.scene.physics.world.bounds.width;
        let height = this.scene.scene.physics.world.bounds.height;

        respon = new responsive({ width, height })
        respon.check(width, height)



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
            var scale = phasers.getSpriteScale(sprite._frame.width, sprite._frame.height, availableSpaceWidth, availableSpaceHeight, padding);
            sprite.scale.x = scale * scaleMultiplier;
            sprite.scale.y = scale * scaleMultiplier;
        }

        function resize() {
            var canvas = document.querySelector("canvas");
            var windowWidth = window.innerWidth;
            var windowHeight = window.innerHeight;
            var windowRatio = windowWidth / windowHeight;
            var gameRatio = game.config.width / game.config.height;

            if (windowRatio < gameRatio) {
                canvas.style.width = windowWidth + "px";
                canvas.style.height = (windowWidth / gameRatio) + "px";
            }
            else {
                canvas.style.width = (windowHeight * gameRatio) + "px";
                canvas.style.height = windowHeight + "px";
            }
        }

        map = new Map({ scene: this, });
        map.create();
        zone = new SafeZone({ scene: this, });
        zone.create();
        player = new ControlPc({ scene: this, });
        player.create();
        this.physics.add.collider(player.getPlayer(), zone.getSafeZone());
        
        
    }

    update() {
        mobile.update()
        player.update();
        // player.updateDirect();
        

    }

}



export default GameScene;

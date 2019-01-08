import 'phaser'

let scale;
let sceneheight;
let scenewidth;

class responsive extends Phaser.Scene {
    constructor({ sceneheight, scenewidth }) {
        super({});
        this.sceneheight = sceneheight;
        this.scenewidth = scenewidth;
    }

    create(){






        //?????????????????
        function scaleSprite (sprite, availableSpaceWidth, availableSpaceHeight, padding, scaleMultiplier) {
            var scale = phasers.getSpriteScale(sprite._frame.width, sprite._frame.height, availableSpaceWidth, availableSpaceHeight, padding);
            sprite.scale.x = scale * scaleMultiplier;
            sprite.scale.y = scale * scaleMultiplier;
        }

        //ฟังก์ชั่นย่อส่วน object เวลาเปิดบนโทรศัพท์ หรือ คอม 
        // function resize(width, height) {
        //     phasers.background.width = width;
        //     phasers.background.height = height;

        //     phasers.scaleSprite(phasers.upButton, width, height / 3, 50, 1);
        //     phasers.upButton.x = phasers.world.centerX;
        //     phasers.upButton.y = phasers.world.centerY - height / 3;

        //     phasers.scaleSprite(phasers.downButtonButton, width, height / 3, 50, 1);
        //     phasers.downButton.x = phasers.world.centerX;
        //     phasers.downButton.y = phasers.world.centerY;

        //     phasers.scaleSprite(phasers.leftButtonButton, width, height / 3, 50, 0.5);
        //     phasers.lefttButtonButton.x = phasers.world.centerX - phasers.leftButtonButton.width / 2;
        //     phasers.leftButton.y = phasers.world.centerY + height / 3;

        //     phasers.scaleSprite(phasers.rightButton, width, height / 3, 50, 0.5);
        //     phasers.rightButton.x = phasers.world.centerX + phasers.rightButton.width / 2;
        //     phasers.rightButton.y = phasers.world.centerY + height / 3;
        // }

        //ฟังก์ชั่นย่อส่วน object
        function resize() {
            var canvas = document.querySelector("canvas");
            var windowWidth = window.innerWidth;
            var windowHeight = window.innerHeight;
            var windowRatio = windowWidth / windowHeight;
            var gameRatio = game.config.width / game.config.height;
            if(windowRatio < gameRatio){
                canvas.style.width = windowWidth + "px";
                canvas.style.height = (windowWidth / gameRatio) + "px";
            }
            else{
                canvas.style.width = (windowHeight * gameRatio) + "px";
                canvas.style.height = windowHeight + "px";
            }
        }
    }

    check(sceneheight, scenewidth) {
        console.log('sceneheight = ' + sceneheight);
        console.log('scenewidth = ' + scenewidth);
        if (sceneheight <= 450) {
            this.scale = 0.5;
        }
        else if (sceneheight <= 490) {
            this.scale = 0.6;
        }
        else if (sceneheight <= 580) {
            this.scale = 0.65;
        }
        else if (sceneheight <= 650) {
            this.scale = 0.75;
        }
        else if (sceneheight <= 680) {
            this.scale = 0.8;
        }
        else if (sceneheight <= 750) {
            this.scale = 0.85;
        }
        else if (sceneheight <= 850) {
            this.scale = 0.9;
        }
        else if (sceneheight <= 1024) {
            this.scale = 1;
        }
        else {
            this.scale = 1.2;
        }
    }
    
    getScale ()
    {
        return this.scale;
    }

}

export default responsive;
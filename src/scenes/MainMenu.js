

let playButLogIn;
let x, y, width, height;
let user;

class MainMenu extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'MainMenu'
        });
    }

    preload() {
        this.load.image('butLogIn', '../../images/button/logIn.png');

    }

    create() {
        width = this.scene.scene.physics.world.bounds.width;
        height = this.scene.scene.physics.world.bounds.height;
        x = width * 0.5;
        y = height * 0.5;

        playButLogIn = this.add.image(x, y - 100, 'butLogIn').setScrollFactor(0);
        playButLogIn.setInteractive();
        playButLogIn.on('pointerup', () => {
            this.input.on('gameobjectup', this.logIn, this);
        });

        

    }

    logIn() {
        FB.login(res => {
            console.log(res)
            user = res;
            if (user.status==='connected') {
                this.scene.start ('GameScene'); 
            }
    
        })
    }





    update() {
        
    }
}


export default MainMenu;

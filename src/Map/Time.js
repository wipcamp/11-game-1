// import responsive from "./responsive";


let phasers;


let time,time2;

class Time extends Phaser.Scene {
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
        time = new Phaser.Class({

            Extends: Phaser.Scene,
        
            initialize:
        
            function SceneA ()
            {
                Phaser.Scene.call(this, { key: 'sceneA' });
        
                this.score = 0;
            },
        
            create: function ()
            {
                //  Store the score in the Registry
                this.registry.set('score', this.score);
        
                //  Update the score every 500ms
                this.time.addEvent({ delay: 500, callback: this.onEvent, callbackScope: this, loop: true });
            },
        
            onEvent: function ()
            {
                this.score++;
        
                this.registry.set('score', this.score);
            }
        
        });

        time2 = new Phaser.Class({

            Extends: Phaser.Scene,
        
            initialize:
        
            function SceneB ()
            {
                Phaser.Scene.call(this, { key: 'sceneB', active: true });
        
                this.text;
            },
        
            create: function ()
            {
                this.text = this.add.text(100, 100, 'Monitoring Registry');
        
                //  Check the Registry and hit our callback every time the 'score' value is updated
                this.registry.events.on('changedata', this.updateScore, this);
            },
        
            updateScore: function (parent, key, data)
            {
                this.text.setText('Score: ' + data);
            }
        
        });


    }

   
}

export default Time;
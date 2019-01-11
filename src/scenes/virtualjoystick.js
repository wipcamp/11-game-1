import VirtualJoyStickPlugin from '../../plugins/virtualjoystick-plugin.js';

class virtualjoystick extends Phaser.Scene {
    constructor() {
        super({
            key: 'examples'
        })
        plugins: {
            global: [{
                key: 'rexVirtualJoyStick',
                plugin: VirtualJoyStickPlugin,
                start: true
            }]
        }
    }

    preload() {}

    create() {
        this.joyStick = this.plugins.get('rexVirtualJoyStick').add(this, {
                x: 400,
                y: 300,
                radius: 100,
                // base: this.add.circle(0, 0, 100, 0x888888),
                // thumb: this.add.circle(0, 0, 50, 0xcccccc),
                // dir: '8dir',   // 'up&down'|0|'left&right'|1|'4dir'|2|'8dir'|3
                // forceMin: 16,
                // enable: true
            })
            .on('update', this.dumpJoyStickState, this);

        this.text = this.add.text(0, 0);
        this.dumpJoyStickState();
    }

    dumpJoyStickState() {
        var cursorKeys = this.joyStick.createCursorKeys();
        var s = 'Key down: ';
        for (var name in cursorKeys) {
            if (cursorKeys[name].isDown) {
                s += name + ' ';
            }
        }
        s += '\n';
        s += ('Force: ' + Math.floor(this.joyStick.force * 100) / 100 + '\n');
        s += ('Angle: ' + Math.floor(this.joyStick.angle * 100) / 100 + '\n');
        this.text.setText(s);
    }
}

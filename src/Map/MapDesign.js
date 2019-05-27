import responsive from "./../core/responsive";

let x, y, height, width;
let graphics, exp, graphicRank;
let heart, bg, wall, safezone;
let flower, flower2;
let part, part2, part3, part4;
let levelText;
let nameText, nameText2;
let phaser;
let longlog, longlog2, longlog3, longlog4;
let ontablog, ontablog2, ontablog3, ontablog4, ontablog5, ontablog6;
let downtablog, downtablog2, downtablog3, downtablog4, downtablog5, downtablog6;
let righttablog, righttablog2,righttablog3, righttablog4;
let blanker, blanker2, blanker3, blanker4, blanker5, blanker6, blanker7, blanker8, blanker9, blanker10, blanker11, blanker12, blanker13, blanker14, blanker15;
let slidelog;

class MapDesign extends Phaser.Scene {

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

        bg = phaser.add.image(0, 0, 'bg').setOrigin(0).setScrollFactor(1);

        let responsives = new responsive(width, height)
        responsives.check(height, width)
        let scaleRatio = responsives.getScale()


        safezone = phaser.physics.add.staticGroup({
            key: 'safezone',
            frameQuantity: 1,
            collideWorldBounds: true,
            visible: true
        });
        Phaser.Actions.PlaceOnRectangle(safezone.getChildren(), new Phaser.Geom.Rectangle(50, 600));
        safezone.refresh();
        
        //ส่วนขอบข้างซ้าย
        longlog = phaser.physics.add.staticGroup({
            key: 'longlog',
            frameQuantity: 3,
            collideWorldBounds: true,
            visible: true
        });
        Phaser.Actions.PlaceOnRectangle(longlog.getChildren(), new Phaser.Geom.Rectangle(40, 145));
        longlog.refresh();

        longlog2 = phaser.physics.add.staticGroup({
            key: 'longlog',
            frameQuantity: 3,
            collideWorldBounds: true,
            visible: true
        });
        Phaser.Actions.PlaceOnRectangle(longlog2.getChildren(), new Phaser.Geom.Rectangle(35, 380));
        longlog2.refresh();

        longlog3 = phaser.physics.add.staticGroup({
            key: 'longlog',
            frameQuantity: 3,
            collideWorldBounds: true,
            visible: true
        });
        Phaser.Actions.PlaceOnRectangle(longlog3.getChildren(), new Phaser.Geom.Rectangle(35, 820));
        longlog3.refresh();

        longlog4 = phaser.physics.add.staticGroup({
            key: 'longlog',
            frameQuantity: 3,
            collideWorldBounds: true,
            visible: true
        });
        Phaser.Actions.PlaceOnRectangle(longlog4.getChildren(), new Phaser.Geom.Rectangle(35, 1000));
        longlog4.refresh();

        //ส่วนขอบบน
        ontablog = phaser.physics.add.staticGroup({
            key: 'ontablog',
            frameQuantity: 3,
            collideWorldBounds: true,
            visible: true
        });
        Phaser.Actions.PlaceOnRectangle(ontablog.getChildren(), new Phaser.Geom.Rectangle(210, 35));
        ontablog.refresh();

        ontablog2 = phaser.physics.add.staticGroup({
            key: 'ontablog',
            frameQuantity: 3,
            collideWorldBounds: true,
            visible: true
        });
        Phaser.Actions.PlaceOnRectangle(ontablog2.getChildren(), new Phaser.Geom.Rectangle(380, 35));
        ontablog2.refresh();

        ontablog3 = phaser.physics.add.staticGroup({
            key: 'ontablog',
            frameQuantity: 3,
            collideWorldBounds: true,
            visible: true
        });
        Phaser.Actions.PlaceOnRectangle(ontablog3.getChildren(), new Phaser.Geom.Rectangle(650, 35));
        ontablog3.refresh();

        ontablog4 = phaser.physics.add.staticGroup({
            key: 'ontablog',
            frameQuantity: 3,
            collideWorldBounds: true,
            visible: true
        });
        Phaser.Actions.PlaceOnRectangle(ontablog4.getChildren(), new Phaser.Geom.Rectangle(920, 35));
        ontablog4.refresh();

        ontablog5 = phaser.physics.add.staticGroup({
            key: 'ontablog',
            frameQuantity: 3,
            collideWorldBounds: true,
            visible: true
        });
        Phaser.Actions.PlaceOnRectangle(ontablog5.getChildren(), new Phaser.Geom.Rectangle(1190, 35));
        ontablog5.refresh();

        ontablog6 = phaser.physics.add.staticGroup({
            key: 'ontablog',
            frameQuantity: 3,
            collideWorldBounds: true,
            visible: true
        });
        Phaser.Actions.PlaceOnRectangle(ontablog6.getChildren(), new Phaser.Geom.Rectangle(1460, 35));
        ontablog6.refresh();

        //ส่วนขอบด้านล่าง
        downtablog = phaser.physics.add.staticGroup({
            key: 'ontablog',
            frameQuantity: 3,
            collideWorldBounds: true,
            visible: true
        });
        Phaser.Actions.PlaceOnRectangle(downtablog.getChildren(), new Phaser.Geom.Rectangle(130, 1175));
        downtablog.refresh();

        downtablog2 = phaser.physics.add.staticGroup({
            key: 'ontablog',
            frameQuantity: 3,
            collideWorldBounds: true,
            visible: true
        });
        Phaser.Actions.PlaceOnRectangle(downtablog2.getChildren(), new Phaser.Geom.Rectangle(400, 1175));
        downtablog2.refresh();

        downtablog3 = phaser.physics.add.staticGroup({
            key: 'ontablog',
            frameQuantity: 3,
            collideWorldBounds: true,
            visible: true
        });
        Phaser.Actions.PlaceOnRectangle(downtablog3.getChildren(), new Phaser.Geom.Rectangle(670, 1175));
        downtablog3.refresh();

        downtablog4 = phaser.physics.add.staticGroup({
            key: 'ontablog',
            frameQuantity: 3,
            collideWorldBounds: true,
            visible: true
        });
        Phaser.Actions.PlaceOnRectangle(downtablog4.getChildren(), new Phaser.Geom.Rectangle(940, 1175));
        downtablog4.refresh();

        downtablog5 = phaser.physics.add.staticGroup({
            key: 'ontablog',
            frameQuantity: 3,
            collideWorldBounds: true,
            visible: true
        });
        Phaser.Actions.PlaceOnRectangle(downtablog5.getChildren(), new Phaser.Geom.Rectangle(1210, 1175));
        downtablog5.refresh();

        downtablog6 = phaser.physics.add.staticGroup({
            key: 'ontablog',
            frameQuantity: 3,
            collideWorldBounds: true,
            visible: true
        });
        Phaser.Actions.PlaceOnRectangle(downtablog6.getChildren(), new Phaser.Geom.Rectangle(1480, 1175));
        downtablog6.refresh();

        //ส่วนขอบด้านขวา
        righttablog = phaser.physics.add.staticGroup({
            key: 'longlog',
            frameQuantity: 3,
            collideWorldBounds: true,
            visible: true
        });
        Phaser.Actions.PlaceOnRectangle(righttablog.getChildren(), new Phaser.Geom.Rectangle(1590, 160));
        righttablog.refresh();

        righttablog2 = phaser.physics.add.staticGroup({
            key: 'longlog',
            frameQuantity: 3,
            collideWorldBounds: true,
            visible: true
        });
        Phaser.Actions.PlaceOnRectangle(righttablog2.getChildren(), new Phaser.Geom.Rectangle(1590, 440));
        righttablog2.refresh();

        righttablog3 = phaser.physics.add.staticGroup({
            key: 'longlog',
            frameQuantity: 3,
            collideWorldBounds: true,
            visible: true
        });
        Phaser.Actions.PlaceOnRectangle(righttablog3.getChildren(), new Phaser.Geom.Rectangle(1590, 730));
        righttablog3.refresh();

        righttablog4 = phaser.physics.add.staticGroup({
            key: 'longlog',
            frameQuantity: 3,
            collideWorldBounds: true,
            visible: true
        });
        Phaser.Actions.PlaceOnRectangle(righttablog4.getChildren(), new Phaser.Geom.Rectangle(1590, 1000));
        righttablog4.refresh();

        //ของภายใน map สิ่งกีดขวาง     
        blanker = phaser.physics.add.staticGroup({
            key: 'blanker',
            frameQuantity: 3,
            collideWorldBounds: true,
            visible: true
        });
        Phaser.Actions.PlaceOnRectangle(blanker.getChildren(), new Phaser.Geom.Rectangle(545, 900));
        blanker.refresh();  

        blanker2 = phaser.physics.add.staticGroup({
            key: 'blanker',
            frameQuantity: 3,
            collideWorldBounds: true,
            visible: true
        });
        Phaser.Actions.PlaceOnRectangle(blanker2.getChildren(), new Phaser.Geom.Rectangle(494, 900));
        blanker2.refresh();

        blanker3 = phaser.physics.add.staticGroup({
            key: 'blanker',
            frameQuantity: 3,
            collideWorldBounds: true,
            visible: true
        });
        Phaser.Actions.PlaceOnRectangle(blanker3.getChildren(), new Phaser.Geom.Rectangle(443, 900));
        blanker3.refresh();   

        blanker4 = phaser.physics.add.staticGroup({
            key: 'blanker',
            frameQuantity: 3,
            collideWorldBounds: true,
            visible: true
        });
        Phaser.Actions.PlaceOnRectangle(blanker4.getChildren(), new Phaser.Geom.Rectangle(650, 500));
        blanker4.refresh();  

        blanker5 = phaser.physics.add.staticGroup({
            key: 'blanker',
            frameQuantity: 3,
            collideWorldBounds: true,
            visible: true
        });
        Phaser.Actions.PlaceOnRectangle(blanker5.getChildren(), new Phaser.Geom.Rectangle(650, 437));
        blanker5.refresh();  

        blanker6 = phaser.physics.add.staticGroup({
            key: 'blanker',
            frameQuantity: 3,
            collideWorldBounds: true,
            visible: true
        });
        Phaser.Actions.PlaceOnRectangle(blanker6.getChildren(), new Phaser.Geom.Rectangle(650, 374));
        blanker6.refresh(); 

        blanker7 = phaser.physics.add.staticGroup({
            key: 'blanker',
            frameQuantity: 3,
            collideWorldBounds: true,
            visible: true
        });
        Phaser.Actions.PlaceOnRectangle(blanker7.getChildren(), new Phaser.Geom.Rectangle(650, 311));
        blanker7.refresh();
        
        blanker8 = phaser.physics.add.staticGroup({
            key: 'longlog',
            frameQuantity: 3,
            collideWorldBounds: true,
            visible: true
        });
        Phaser.Actions.PlaceOnRectangle(blanker8.getChildren(), new Phaser.Geom.Rectangle(410, 220));
        blanker8.refresh();

        blanker9 = phaser.physics.add.staticGroup({
            key: 'type2blanker',
            frameQuantity: 3,
            collideWorldBounds: true,
            visible: true
        });
        Phaser.Actions.PlaceOnRectangle(blanker9.getChildren(), new Phaser.Geom.Rectangle(1200, 220));
        blanker9.refresh();

        blanker10 = phaser.physics.add.staticGroup({
            key: 'type3blanker',
            frameQuantity: 3,
            collideWorldBounds: true,
            visible: true
        });
        Phaser.Actions.PlaceOnRectangle(blanker10.getChildren(), new Phaser.Geom.Rectangle(1400, 400));
        blanker10.refresh();

        blanker11 = phaser.physics.add.staticGroup({
            key: 'type4blanker',
            frameQuantity: 3,
            collideWorldBounds: true,
            visible: true
        });
        Phaser.Actions.PlaceOnRectangle(blanker11.getChildren(), new Phaser.Geom.Rectangle(890, 900));
        blanker11.refresh();
        
        blanker12 = phaser.physics.add.staticGroup({
            key: 'type5blanker',
            frameQuantity: 3,
            collideWorldBounds: true,
            visible: true
        });
        Phaser.Actions.PlaceOnRectangle(blanker12.getChildren(), new Phaser.Geom.Rectangle(1200, 655));
        blanker12.refresh();  

        blanker13 = phaser.physics.add.staticGroup({
            key: 'type6blanker',
            frameQuantity: 3,
            collideWorldBounds: true,
            visible: true
        });
        Phaser.Actions.PlaceOnRectangle(blanker13.getChildren(), new Phaser.Geom.Rectangle(1330, 920));
        blanker13.refresh();

        blanker14 = phaser.physics.add.staticGroup({
            key: 'blanker',
            frameQuantity: 3,
            collideWorldBounds: true,
            visible: true
        });
        Phaser.Actions.PlaceOnRectangle(blanker14.getChildren(), new Phaser.Geom.Rectangle(392, 900));
        blanker14.refresh();   

        blanker15 = phaser.physics.add.staticGroup({
            key: 'blanker',
            frameQuantity: 3,
            collideWorldBounds: true,
            visible: true
        });
        Phaser.Actions.PlaceOnRectangle(blanker15.getChildren(), new Phaser.Geom.Rectangle(341, 900));
        blanker15.refresh();   
        
        //Tab status player
        graphics = phaser.make.graphics().fillStyle(0xF0FFFF).fillRect(0, 0, 700, 25);
        graphics.generateTexture('hudbar', 700, 25);
        graphics.destroy();
        phaser.add.image(window.screen.width-900, window.screen.height-800, 'hudbar').setScrollFactor(0).setAlpha(0.3).setScale(scaleRatio + 2);
        
        graphicRank = phaser.make.graphics().fillStyle(0xF0FFFF).fillRect(0, 0, 100, 70);
        graphicRank.generateTexture('bgRank', 100, 70);
        graphicRank.destroy();
        phaser.add.image(x+263, y-81, 'bgRank').setScrollFactor(0).setAlpha(0.3);
        
        exp = phaser.make.graphics().fillStyle(0x00FF00).fillRect(0, 0, 600, 2);
        exp.generateTexture('exp', 600, 2);
        exp.destroy();
        phaser.add.image(x, y+133, 'exp').setScrollFactor(0);
        
        levelText = phaser.add.text(window.screen.width-1400, window.screen.height-800, 'Lv.1', { fontSize: '16px', fill: '#00FFFF' }).setScrollFactor(0).setShadow(1, 1, '#000000', 1);
        nameText = phaser.add.text(scaleRatio + 20, y-320, 'แป้งมาเยือน อิอิ', { fontSize: '16px', fill: '#FF1493' }).setScrollFactor(0).setShadow(1, 1, '#000000', 1).setScale(scaleRatio + 0.4);
        nameText2 = phaser.add.text(x-47, y-30, 'แป้งมาเยือน อิอิ', { fontSize: '16px', fill: '#FF1493' }).setScrollFactor(0).setShadow(1, 1, '#000000', 1).setScale(scaleRatio + 0.4);
        
    }

    getSlidelog(){
        return slidelog
    }

    getBlanker(){
        return blanker
    }

    getBlanker2(){
        return blanker2
    }

    getBlanker3(){
        return blanker3
    }
    
    getBlanker4(){
        return blanker4
    }

    getBlanker5(){
        return blanker5
    }

    getBlanker6(){
        return blanker6
    }

    getBlanker7(){
        return blanker7
    }

    getBlanker8(){
        return blanker8
    }

    getBlanker9(){
        return blanker9
    }

    getBlanker10(){
        return blanker10
    }

    getBlanker11(){
        return blanker11
    }

    getBlanker12(){
        return blanker12
    }

    getBlanker13(){
        return blanker13
    }

    getBlanker14(){
        return blanker14
    }

    getBlanker15(){
        return blanker15
    }

    getLonglog(){
        return longlog
    }

    getLonglog2(){
        return longlog2
    }

    getLonglog3(){
        return longlog3
    }

    getLonglog4(){
        return longlog4
    }

    getOntablog(){
        return ontablog
    }

    getOntablog2(){
        return ontablog2
    }

    getOntablog3(){
        return ontablog3
    }

    getOntablog4(){
        return ontablog4
    }

    getOntablog5(){
        return ontablog5
    }

    getOntablog6(){
        return ontablog6
    }

    getDowntablog(){
        return downtablog
    }

    getDowntablog2(){
        return downtablog2
    }

    getDowntablog3(){
        return downtablog3
    }

    getDowntablog4(){
        return downtablog4
    }

    getDowntablog5(){
        return downtablog5
    }

    getDowntablog6(){
        return downtablog6
    }

    getRighttablog(){
        return righttablog
    }

    getRighttablog2(){
        return righttablog2
    }

    getRighttablog3(){
        return righttablog3
    }

    getRighttablog4(){
        return righttablog4
    }

    getPart() {
        return part
    }
    getPart2() {
        return part2
    }
    getPart3() {
        return part3
    }
    getPart4() {
        return part4
    }
    getSafeZone() {
        return safezone
    }
    getWall() {
        return wall
    }
    getFlower() {
        return flower
    }
    getFlower2() {
        return flower2
    }
    
    update() {
    

    }
}

export default MapDesign;
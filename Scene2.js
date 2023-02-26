class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    create() {
        this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
        this.background.setOrigin(0, 0);

        this.ship1 = this.add.image(config.width/2 - 50, config.height/2, "ship1");
        this.ship2 = this.add.image(config.width/2, config.height/2, "ship2");
        this.ship3 = this.add.image(config.width/2 + 50, config.height/2, "ship3");


        this.add.text(20, 20, "Playing game", {
            font: "25px Arial",
             fill: "yellow"
        });
    }

    moveShip(ship, speed) {
        ship.y += speed;

        if(ship.y > config.height) {
            this.resetShipPos(ship);
        }
    }

    update() {
        this.moveShip(this.ship1, 1);
        this.moveShip(this.ship2, 3);
        this.moveShip(this.ship3, 2);

        this.background.tilePositionY -= 0.5;

    }

    resetShipPos(ship) {
        ship.y = 0;
        var randomX = Phaser.Math.Between(0, config.width);
        ship.x = randomX;
    }
}

// Enemies our player must avoid
class Enemy {
        constructor(sprite, x, y, speed) {
            // Variables applied to each of our instances go here,
            // we've provided one for you to get started
            // The image/sprite for our enemies, this uses
            // a helper we've provided to easily load images
           
        this.sprite = 'images/enemy-bug.png'; //enemy imagem
        this.x =x; // coordinate
        this.y =y; // coordinate
        this.speed = speed; //moving speed
    };
      

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
update(dt) {

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.x = this.x + (this.speed*dt);
    if( this.x > 500) {
        this.x = -100;
    };
 }

checkCollision() {
    // checks if the player entes in collision with enemy
    if (this.x === player.x & this.y === player.y) {
        // moves the player back to it's start position
        player.x = 250;
        player.y = 498;
         };
}

// Draw the enemy on the screen, required method for game
render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
};
// Now write your own player class

class Player {
    constructor (sprite, x, y) {
        this.sprite = sprite;
        this.x = x;
        this.y = y;
    }

// This class requires an update(), render() and
// a handleInput() method.
update(dt) {
        // checks if the player reaches the mountain
    if (this.y <= 83) {
    }
};

 //draws the player on the screen
render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

handleInput() {
    // checks which key was pressed moves the player 
    switch ( allowedKeys [e.keyCode]) {
        case 37: if (this.x >=101) {
                    this.x = this.x -101;
                     } // moves the player to the left if it doesn't cross the canvas margin 
         break; 
           
        case 38: if (this.x <= 83) {
                this.x = this.y -83;
                    } // moves the player up if it doesn't cross the canvas margin
        break;
        case 39: if (this.x <= 404) {
            this.x = this.x + 101;
                } // moves the player to the right if it doesn't cross the canvas margin
        break;
        case 40: if (this.x <= 415) {
            this.y = this.y -83;
                } // moves the player down if it doesn't cross the canvas margin     
        }
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies

let enemy1 = new Enemy(-90, 60);
let enemy2 = new Enemy(-190, 140);
let enemy3 = new Enemy(-290, 230);
let allEnemies = [enemy1, enemy2, enemy3];


// Place the player object in a variable called player

let player = new Player('images/char-boy.png', 200, 300);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

// Enemies our player must avoid
var Enemy = function() {
    constructor (sprite,x,y, speed) {
        this.x =x; // coordinate
        this.y =y; // coordinate
        this.speed = speed; //moving speed
        this.sprite = 'images/enemy-bug.png'; //enemy image
    }
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    
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
        // deletes one life
        life --;
        livesCount();
    };
}

// Draw the enemy on the screen, required method for game
render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class

class Player {
    constructor (sprite,x,y) {
        this.sprite = sprite;
        this.x = x;
        this.y = y;
    }
}
// This class requires an update(), render() and
// a handleInput() method.
update(dt) {
    // if the player enters in collision with the colectable item
    if (this.x === colectable.x & this.y === colectable.y) {
        this.sprite = 'Gem Blue.png'; 
        //moves the colectable item outside of the canvas
        colectable.x = -101;
        colectable.y = -83;
    };
    // checks if the player reaches the mountain
    if (this.y <= 83) {
        //checks if the player has the colectable item
        if (this.sprite ==='Gem Blue.png') {
            achornCount(); // calls the colectable counter
            this.sprite = 'images/enemy-bug.png';
        };
        this.y = 498; 
        colectable.randomPosition();
    };
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



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

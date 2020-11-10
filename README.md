# blasterboy

## Description
>The game is ran by using most of the functions in the repaint function. The game updates position of the hero and enemies as well as giving them images everytime it is ran. It constantly checks for collision on objects that the collision functions apply to. And I believe that technically at all times the enemies are created when the page is loaded. However to prevent there being invisible enemies after they are created their alive value is set to false and only set to true if certain conditions are met. Functions like the activate enemies function cannot be ran inside of the repaint function because it will constantly set enemies to alive even after they are killed. So in this case it is ran whenever collision is made with the flag pole. Issues include a flicker that I believe is due to the repaint function waiting for the images from the img functions that give images to the objects. This does not occur if the objects were just made using javascript rectangles.



#### Live website
https://coreywilson319.github.io/
___

## heroImg
This function gives the hero.png I made to the hero object

## grassImg
This function give the image that the enemies and player walk on to the floor object

## enemyImg
This function give the enemy.png to the enemy objects

## Humanoid
Hero and enemies are defined using this class the hero uses more of the attributes defined such as win and gravity since enemies cannot jump

## Obstacles

The flagpole, bullets and floor are defined using this Obstacle class. The bullets use the speedX attribute to travel from the player

## levelUpdate

Changes the innerText of the level element in the html to display the current level. Before adding the background image in css the level displayed there. I believe that this is being covered up by the background image however.

## floorCollision
This function is checking if an objects y position is greater than that of 330 and if it is equal to it then the gravity of that object is set to 0 so they don't fly away.

## repaint
rePaint is running all of our major functions that make the game run such as collision detection and rendering enemies and the hero.

## moveEnemy

This function make the enemy objects move closer to the hero's x position and if they get behind the hero they move slower toward the player. If they moved faster the they would make the game more difficult

## momentum
Still working on this one the goal is to have the player carry momentum while in the air. As of now the player must repress a key to continue movement after jumping.

## flagCollision

This checks if the player has made contact with the flag. If so the players position is reset and enemies and level are increased. If the player reaches level 5 then the player wins and a "YOU WIN" message shows. The game also stops running.

## renderEenemy

This checks what level the player is on as well as if an enemy on that level is alive. If both are true then the enemy is rendered

### line 216
This gives the player movement, space to jump a to move left and d to move right

## randomNumber
This lets us put in two numbers and the function picks a random number between the two.

### lines 229 through 239
Here objects are defined

### lines 240 to 243
For the first time through the first enemy is set to alive and the others are set to false.

### line 244
array containing the objects of the enemies

## activateEnemeies
This function checks the level and sets the value of enemy.alive to true

### line 276 through 282
This gives the player the ability to shoot. The bullet obstacle is defined, rendered and set to alive on every keypress of f.

## playerHit
This checks if the heros position conflicts with the position of an enemy. If there are conflicting positions the  hero.alive is set to false the game stops running as well. console.log is just to tell me if a player was hit by an enemy that should not have been there.

## enemyHit
This checks the position of bullets and enemies if there is a conflict in positions the enemy is killed and alive is set to false on. Also the bullet is set to false. console.log is here to see if there are invisible enemies that should not be have a value of alive being true.

## bulletRender
If the bullet is alive then it should be rendered

## lose
This function checks if the hero is not alive and hero.alive is equal to false then You Lose is printed

## gameOn
if the variable gameLive is true then repaint should happen every 16.6 ms. if game is not live and hero is not alive then the you lose message prints. (This function may be redundant to the lose function)

### lines 339 to 349
On the click of the reset button the level is set to 1. hero is set to alive and the gameLive variable is set to true. We also reposition the hero and enemy. Lastly game is set to live and and the gameOn function is ran

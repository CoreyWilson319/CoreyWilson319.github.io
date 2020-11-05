let gameArea = document.getElementById('game-area')
const computedStyle = getComputedStyle(gameArea)
const height = computedStyle.height
const width = computedStyle.width
gameArea.height = height.replace('px', '')
gameArea.width = width.replace('px', '')
let level = 1


const ctx = gameArea.getContext('2d')
ctx.fillStyle = 'white';
ctx.strokeStyle = 'red';
ctx.lineWidth = 5;
class Humanoid {
    constructor(name, x, y, color, width, height) {
        this.name = name
        this.x = x
        this.y = y
        this.color = color
        this.width = width
        this.height = height
        this.gravity = 2.5
        this.gravitySpeed = 0
        this.speedX = 2
        this.alive = true
        this.win = false
        // this.level = 0
    }

    render() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height, this.gravitySpeed += this.gravity)
    }
}

class Obstacle {
    constructor(x, y, color, width, height) {
        this.x = x
        this.y = y
        this.color = color
        this.width = width
        this.height = height
        this.solid = true
        this.speedX = 2
        this.alive = true
    }
    render() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height, this.gravitySpeed += this.gravity)
    }
}

function floorCollision(obj) {
    if (obj.y > 330) {
        obj.y = 330;
        obj.gravity = 0;
    } else {
        obj.gravity = 2.5;}      
    } 

function rePaint(){
    ctx.clearRect(0,0, gameArea.width, gameArea.height)
    ctx.font = "30px Arial";
    ctx.textAlign = "center";
    ctx.fillText(`Level: ${level}`, 800, 50)
    hero.render()
    floor.render()
    // enemy.render()
    flag.render()
    hero.y += hero.gravity
    bullet.x += bullet.speedX
    floorCollision(hero)
    flagCollision(hero)
    xVelocity(hero)
    renderEnemy()
    enemyHit(enemy)
    enemyHit(enemy1)
    enemyHit(enemy2)
    enemyHit(enemy3)
    enemyHit(enemy4)
    playerHit(enemy)
    playerHit(enemy1)
    playerHit(enemy2)
    playerHit(enemy3)
    playerHit(enemy4)
    // enemyHit(enemy5)
    bulletRender()
    lose()
    // kill()

    
}
function xVelocity(obj) {
    if (obj.y > 330) {
        obj.x += obj.speedX
    }
}
function flagCollision() {
    if (hero.x < flag.x + flag.width &&
        hero.x + hero.width > flag.x && 
        hero.y < flag.y + flag.height && 
        hero.y + hero.y > flag.y) {
        let gameWin = true
        if (gameWin === true) {
            hero = new Humanoid('hero', 50, 330, "red", 40, 80)
            level = level + 1;
            if (gameWin === true && level === 5) {
                ctx.font = "30px Arial";
                ctx.textAlign = "center";
                ctx.fillText("YOU WIN!", 800, 100)
                clearInterval(running)
            }
        } 
    }}

function renderEnemy(){
    if (level === 1) {
        if (enemy.alive === true){
        enemy.render()
    }}
    if (level === 2) {
        if (enemy1.alive === true){
        enemy1.render()}
        if (enemy2.alive === true){
        enemy2.render()
    }}
    if (level === 3) {
        if (enemy1.alive === true){
            enemy1.render()}
            if (enemy2.alive === true){
            enemy2.render()}
            if (enemy3.alive === true){
            enemy3.render()
            }
    }
    if (level === 4) {
        if (enemy1.alive === true){
            enemy1.render()}
            if (enemy2.alive === true){
            enemy2.render()}
            if (enemy3.alive === true){
            enemy3.render()
            }
            if (enemy4.alive === true){
            enemy4.render()
            }
    }
}
document.addEventListener('keydown', function(evt) {
    if (evt.key === ' ') {
        hero.y -= 250
    } else if (evt.key === 'a') {
        hero.x -= 10
    } else if (evt.key === 'd') {
        hero.x += 10
    }
})

function randomNumber(min, max) {
    return Math.random() * (max - min) + min
}
const floor = new Obstacle(0, 400, "green", 1600, 100)
let hero = new Humanoid('hero', 50, 280, "red", 40, 80)
let enemy = new Humanoid('enemy', randomNumber(60, 1400), 350, "blue", 40, 50)
let enemy1 = new Humanoid('enemy1', randomNumber(60, 1400), 350, "blue", 40, 50)
let enemy2 = new Humanoid('enemy2', randomNumber(60, 1400), 350, "blue", 40, 50)
let enemy3 = new Humanoid('enemy3', randomNumber(60, 1400), 350, "blue", 40, 50)
let enemy4 = new Humanoid('enemy4', randomNumber(60, 1400), 350, "blue", 40, 50)
let enemy5 = new Humanoid('enemy5', randomNumber(60, 1400), 350, "blue", 40, 50)
const flag = new Obstacle(1400, 0, "gold", 10, 500)
let bullet = new Obstacle(hero.x, hero.y+30, "orange", 20, 3)
enemy.alive = false
enemy1.alive = false
enemy2.alive = false
enemy3.alive = false
enemy4.alive = false
enemy5.alive = false

function activateEnemies(){ // HOW CAN I MAKE THIS RUN WHEN LEVEL CHANGES
if (level === 1) {
    enemy.alive = true
}
if (level === 2) {
    enemy1.alive = true
    enemy2.alive = true
}
if (level === 3) {
    enemy3.alive = true
    enemy4.alive = true
    enemy5.alive = true
}
}
let running = setInterval(rePaint, 1000/60)

document.getElementById("reset").addEventListener('click', function(hero, enemy) {
    clearInterval(running)
    level = 1
    hero = new Humanoid('hero', 50, 330, "red", 40, 80)
    enemy = new Humanoid('enemy', randomNumber(60, 1400), 350, "blue", 40, 50)
    running = setInterval(rePaint, 1000/60)
})

document.addEventListener('keyup', function(evt) {
    if (evt.key === 'f') {
        bullet = new Obstacle(hero.x, (hero.y+30), "orange", 20, 3)
        bullet.render()
    }
})

// Make it so that each level adds an enemy game ends after 5 levels completed
// Maybe get a gun after beating a level


//NOTES

// Add collision to those bullets to kill enememies bullet should die after hitting an enemy too
function playerHit(enemynum){ // See if I can pass in a list of enemies as the parameter
    if (enemynum.alive === true){
    if (hero.x < enemynum.x + enemynum.width &&
        hero.x + hero.width > enemynum.x &&
        hero.y < enemynum.y + enemynum.height &&
        hero.y + hero.height > enemynum.y) {
         hero.alive = false
         enemynum.alive = false
         console.log(`Player Hit by ${enemynum.name} Game Over`)
        }
    }}

function enemyHit(enemynum){
if (bullet.x < enemynum.x + enemynum.width &&
    bullet.x + bullet.width > enemynum.x &&
    bullet.y < enemynum.y + enemynum.height &&
    bullet.y + bullet.height > enemynum.y &&
    enemynum.alive === true ){
        console.log(`${enemynum.name} has been hit`)
     bullet.alive = false
     enemynum.alive = false
    }
}

function bulletRender(){
    if (bullet.alive === true) {
        bullet.render()
    }
}

function lose() {
    if (hero.alive === false) {
        ctx.font = "30px Arial";
        ctx.textAlign = "center";
        ctx.fillText("YOU LOSE!", 800, 100)
        clearInterval(running)
    }
}
// function kill(obj) {
//     if (obj.alive === false) {
//         delete obj
//     }
// }
// Add collision to enemies so that when you walk into them you die
// Maybe use an if loop in the repaint function if enemyi.alive === true then render() else don't render anymore
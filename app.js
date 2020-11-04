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
    constructor(x, y, color, width, height) {
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
    enemyHit(enemy1)
    enemyHit(enemy2)
    enemyHit(enemy3)
    // enemyHit(enemy4)
    // enemyHit(enemy5)
    bulletRender()

    
}
function xVelocity(obj) {
    if (obj.y > 330) {
        obj.x += obj.speedX
    }
}
function flagCollision(obj) {
    if (hero.x < flag.x + flag.width &&
        hero.x + hero.width > flag.x && 
        hero.y < flag.y + flag.height && 
        hero.y + hero.y > flag.y) {
    // if (obj.x === flag.x) {
        let gameWin = true
        if (gameWin === true) {
            hero = new Humanoid(50, 330, "red", 40, 80)
            level = level + 1;
            if (gameWin === true && level === 5) {
                ctx.font = "30px Arial";
                ctx.textAlign = "center";
                ctx.fillText("YOU WIN!", 800, 100)
                clearInterval(running)
            }
        } 
    }}
    // if (enemy.alive === true){
        // enemy.render()
    // }
function renderEnemy(){
    if (level === 1) {
        if (enemy1.alive === true){
        enemy1.render()
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
let hero = new Humanoid(50, 330, "red", 40, 80)
let enemy = new Humanoid(randomNumber(60, 1400), 350, "blue", 40, 50)
let enemy1 = new Humanoid(randomNumber(60, 1400), 350, "blue", 40, 50)
let enemy2 = new Humanoid(randomNumber(60, 1400), 350, "blue", 40, 50)
let enemy3 = new Humanoid(randomNumber(60, 1400), 350, "blue", 40, 50)
let enemy4 = new Humanoid(randomNumber(60, 1400), 350, "blue", 40, 50)
const flag = new Obstacle(1400, 0, "gold", 10, 500)
let bullet = new Obstacle(hero.x, hero.y+30, "orange", 20, 3)




let running = setInterval(rePaint, 1000/60)

document.getElementById("reset").addEventListener('click', function(hero, enemy) {
    clearInterval(running)
    level = 1
    hero = new Humanoid(50, 330, "red", 40, 80)
    enemy = new Humanoid(randomNumber(60, 1400), 350, "blue", 40, 50)
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
function enemyHit(enemynum){
if (bullet.x < enemynum.x + enemynum.width &&
    bullet.x + bullet.width > enemynum.x &&
    bullet.y < enemynum.y + enemynum.height &&
    bullet.y + bullet.height > enemynum.y) {
        console.log('hi')
     bullet.alive = false
     enemynum.alive = false
    }
}

function bulletRender(){
    if (bullet.alive === true) {
        bullet.render()
    }
}
// Add collision to enemies so that when you walk into them you die
// Maybe use an if loop in the repaint function if enemyi.alive === true then render() else don't render anymore


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
    enemy.render()
    flag.render()
    hero.y += hero.gravity
    bullet.x += bullet.speedX
    floorCollision(hero)
    flagCollision(hero)
    xVelocity(hero)
    renderEnemy()
    bullet.render()
    
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
        console.log("win")
        let gameWin = true
        if (gameWin === true) {
            hero = new Humanoid(50, 330, "red", 40, 80)
            level = level + 1;
            console.log(level)
            if (gameWin === true && level === 5) {
                console.log("clear")
                ctx.font = "30px Arial";
                ctx.textAlign = "center";
                ctx.fillText("YOU WIN!", 800, 100)
                // document.getElementById("game-area").innerText = "You Win!"
                // ctx.clearRect(0, 0, ctx.width/2, ctx.height)/2;
                clearInterval(running)
            }
        } 
    }}

function renderEnemy(){
    if (level === 1) {
        enemy1.render()
    }
    if (level === 2) {
        enemy1.render()
        enemy2.render()
    }
    if (level === 3) {
        enemy1.render()
        enemy2.render()
        enemy3.render()
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
        let bullet = new Obstacle(hero.x, (hero.y+30), "orange", 20, 3)
        bullet.render()
    }
})

// Make it so that each level adds an enemy game ends after 5 levels completed
// Maybe get a gun after beating a level


//NOTES
// let bullet = new Obstacle(hero.x, hero.y+30, "orange", 20, 3) GOOD BULLET HEIGHT
// Set F to a function that make a projectile shoot from the hero's position
// Add something to make the bullet travel

// Add collision to those bullets to kill enememies


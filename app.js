let gameArea = document.getElementById('game-area')
const computedStyle = getComputedStyle(gameArea)
const height = computedStyle.height
const width = computedStyle.width
gameArea.height = height.replace('px', '')
gameArea.width = width.replace('px', '')
let level = 0


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
    hero.render()
    floor.render()
    enemy.render()
    flag.render()
    hero.y += hero.gravity
    floorCollision(hero)
    flagCollision(hero)
    xVelocity(hero)
    renderEnemy()

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
        obj.win = true
        if (obj.win === true) {
            hero = new Humanoid(50, 330, "red", 40, 80)
            level = level + 1;
            console.log(level)
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
function levelIncrease() {
    if (levelComplete === true) {
       return level = level + 1;
    } else {
        return level
    }
}}
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


hero.render()
floor.render()
enemy.render()
flag.render()

setInterval(rePaint, 1000/60)


// Make it so that each level adds an enemy game ends after 5 levels completed
// Maybe get a gun after beating a level
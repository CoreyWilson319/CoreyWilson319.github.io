let gameArea = document.getElementById('game-area')
const computedStyle = getComputedStyle(gameArea)
const height = computedStyle.height
const width = computedStyle.width
gameArea.height = height.replace('px', '')
gameArea.width = width.replace('px', '')


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
        this.level = 1
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
    levelComplete(hero)
    if (levelComplete === true) {
        const enemy2 = new Humanoid(500, 350, "blue", 40, 50)
    }
    // bullet.render()
    // document.addEventListener('keypress', function(evt) {
    //     if (evt.key === 'f') {
    //         const bullet = new projectile(hero.x, hero.y, "orange", 40, 50)
    //         bullet.render()
    //         console.log("pew")
    //     }
    // })
}

function xVelocity(obj) {
    if (obj.y > 330) {
        obj.x += obj.speedX
    }
}
function flagCollision(obj) {
    if (obj.x === flag.x) {
        console.log("win")
        obj.level += 1
        obj.win = true
        console.log(obj)
    }
}
function levelComplete(obj) {
    if (obj.win === true) {
        hero = new Humanoid(50, 330, "red", 40, 80)
        obj.win === false
        // This needs to increment the level by 1
    }
    return true
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

const floor = new Obstacle(0, 400, "green", 1600, 100)
let hero = new Humanoid(50, 330, "red", 40, 80)
let enemy = new Humanoid(800, 350, "blue", 40, 50)
const flag = new Obstacle(1400, 0, "gold", 10, 500)


hero.render()
floor.render()
enemy.render()
flag.render()
// rePaint()
// const bullet = new projectile(hero.x, 50, "orange", 40, 50)

setInterval(rePaint, 1000/60)


// Make it so that each level adds an enemy game ends after 5 levels completed
// Maybe get a gun after beating a level
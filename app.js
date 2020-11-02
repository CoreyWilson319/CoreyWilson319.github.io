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
        this.gravity = 0.55
        this.gravitySpeed = 1
        this.alive = true
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

const floor = new Obstacle(0, 480, "green", 1600, 25)


document.addEventListener('keydown', function(evt) {
    if (evt.key === ' ') {
        hero.y -= 200
    } else if (evt.key === 'a') {
        hero.x -= 10
    } else if (evt.key === 'd') {
        hero.x += 10
    }
})

function rePaint(){
    let gravity = 2.5;
    // clear off the entire canva
    ctx.clearRect(0,0, gameArea.width, gameArea.height)
    // hero.y += gravity;
    // render the hero and the enemy
    hero.render()
    floor.render()
    enemy.render()
    floorCollision(hero)
    hero.y += gravity
    // if (enemy.alive)
    // {enemy.render()
    // }
    // collision()
}

setInterval(rePaint, 1000/60)

const hero = new Humanoid(50, 400, "red", 40, 80)
const enemy = new Humanoid(800, 400, "blue", 40, 80)


function floorCollision(obj) {
    if (obj.y < floor.y) {
        obj.y = 401
        // gravity = 2.5
    // } else if (obj.y = floor.y){
    //     gravity = 0;
    }
}


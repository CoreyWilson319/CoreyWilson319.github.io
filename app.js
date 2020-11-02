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
        hero.y -= 10
    } else if (evt.key === 'a') {
        hero.x -= 10
    } else if (evt.key === 'd') {
        hero.x += 10
    }
})

let gravity = 2.5;
function rePaint(){
    // clear off the entire canva
    ctx.clearRect(0,0, gameArea.width, gameArea.height)
    hero.y += gravity;
    // render the hero and the enemy
    hero.render()
    floor.render()
    floorCollision(hero)
    // if (enemy.alive)
    // {enemy.render()
    // }
    // collision()
}

setInterval(rePaint, 1000/60)

const hero = new Humanoid(50, 400, "orange", 40, 80)


function floorCollision(obj) {
    if (obj.y < floor.y) {
        obj.y += floor.y
    }
}


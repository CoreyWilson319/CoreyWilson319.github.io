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
        // this.gravitySpeed = 0
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



document.addEventListener('keydown', function(evt) {
    if (evt.key === ' ') {
        hero.y -= 200
    } else if (evt.key === 'a') {
        hero.x -= 10
    } else if (evt.key === 'd') {
        hero.x += 10
    }
})

function floorCollision(obj) {
    console.log('floor')
    console.log(obj.y)
    console.log(floor.y)
    if (obj.y > 330) {
        obj.y = 330;
        obj.gravity = 0;
    } else {
        obj.gravity = 2.5;
    }
        // console.log('floor')
        
    } 
    // if (obj.y > 400) {
    //     hero.gravity = 2.5
    //     obj.y += hero.gravity
    // }
        // gravity = 2.5
    // } else if (obj.y = floor.y){
    //     gravity = 0;
    
function rePaint(){
    // let gravity = 2.5;
    // clear off the entire canvas
    ctx.clearRect(0,0, gameArea.width, gameArea.height)
    // hero.y += gravity;
    // render the hero and the enemy
    // hero.y = 401
    hero.render()
    floor.render()
    enemy.render()
    // floorCollision(hero)
    hero.y += hero.gravity
    floorCollision(hero)
    // if (enemy.alive)
    // }
    // collision()
}



const floor = new Obstacle(0, 400, "green", 1600, 100)
const hero = new Humanoid(50, 300, "red", 40, 80)
const enemy = new Humanoid(800, 400, "blue", 40, 80)

// setInterval(rePaint, 1000/60)



    setInterval(rePaint, 1000/60)
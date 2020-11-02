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
class Thing {
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


document.addEventListener('keydown', function(evt) {
    if (evt.key === ' ') {
        hero.y -= 10
    } else if (evt.key === 'a') {
        hero.x -= 10
    } else if (evt.key === 'd') {
        hero.x += 10
    }

    // console.log(hero)
    // movementDisplay.textContent = `X: ${hero.x}, Y: ${hero.y}`
})

let gravity = 2.5;
function rePaint(){
    // clera off the entire canvas
    ctx.clearRect(0,0, gameArea.width, gameArea.height)
    hero.y += gravity;
    // render the hero and the ogre
    hero.render()
    floor.render()
    // if (ogre.alive)
    // {ogre.render()
    // }
    // collision()
}

setInterval(rePaint, 1000/60)

const hero = new Thing(50, 400, "orange", 40, 80)
const floor = new Thing(0, 480, "green", 1600, 25)


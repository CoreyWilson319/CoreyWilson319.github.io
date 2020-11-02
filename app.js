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
        this.alive = true
    }

    render() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

const hero = new Humanoid(10, 10, "orange", 40, 80)

document.getElementById('play').addEventListener('click', hero.render())
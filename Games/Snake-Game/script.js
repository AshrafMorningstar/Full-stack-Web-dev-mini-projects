
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const gridSize = 20;
const tileCount = canvas.width / gridSize;

let snake = [{x: 10, y: 10}];
let food = {x: 15, y: 15};
let dx = 0;
let dy = 0;
let score = 0;
let gameLoop;
let highScore = localStorage.getItem('snakeHighScore') || 0;

document.getElementById('high-score').textContent = highScore;

document.addEventListener('keydown', changeDirection);

function changeDirection(e) {
    const LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;
    
    if (e.keyCode === LEFT && dx === 0) { dx = -1; dy = 0; }
    if (e.keyCode === UP && dy === 0) { dx = 0; dy = -1; }
    if (e.keyCode === RIGHT && dx === 0) { dx = 1; dy = 0; }
    if (e.keyCode === DOWN && dy === 0) { dx = 0; dy = 1; }
}

function startGame() {
    snake = [{x: 10, y: 10}];
    dx = 0;
    dy = 0;
    score = 0;
    document.getElementById('score').textContent = score;
    placeFood();
    
    if (gameLoop) clearInterval(gameLoop);
    gameLoop = setInterval(update, 100);
}

function update() {
    moveSnake();
    if (checkCollision()) {
        clearInterval(gameLoop);
        alert('Game Over! Score: ' + score);
        if (score > highScore) {
            highScore = score;
            localStorage.setItem('snakeHighScore', highScore);
            document.getElementById('high-score').textContent = highScore;
        }
        return;
    }
    if (checkFood()) {
        score++;
        document.getElementById('score').textContent = score;
        placeFood();
    } else {
        snake.pop();
    }
    draw();
}

function moveSnake() {
    const head = {x: snake[0].x + dx, y: snake[0].y + dy};
    snake.unshift(head);
}

function checkCollision() {
    const head = snake[0];
    if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) return true;
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) return true;
    }
    return false;
}

function checkFood() {
    return snake[0].x === food.x && snake[0].y === food.y;
}

function placeFood() {
    food.x = Math.floor(Math.random() * tileCount);
    food.y = Math.floor(Math.random() * tileCount);
}

function draw() {
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw snake
    ctx.fillStyle = '#667eea';
    snake.forEach((segment, index) => {
        ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize - 2, gridSize - 2);
    });
    
    // Draw food
    ctx.fillStyle = '#ef4444';
    ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize - 2, gridSize - 2);
}

draw();

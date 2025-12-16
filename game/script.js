


const canvas = document.querySelector('.game-canvas');       
const ctx = canvas.getContext('2d');                        
const scoreDisplay = document.querySelector('.score-display');  
const gameOverScreen = document.querySelector('.game-over-screen'); 
const finalScoreDisplay = document.querySelector('.final-score'); 
const GAME_HEIGHT = canvas.height;                           
const GROUND_Y = GAME_HEIGHT - 20;                           
const DINO_SIZE = 30;                                          
const OBSTACLE_SIZE = 35;                                    
let gameSpeed = 3;                                             
let score = 0;                                                
let isGameOver = true;                                       
let animationFrameId;                                         
const obstacleSpawnInterval = 150;                            

class Dino {
    constructor() {
        this.x = 50;                                     
        this.y = GROUND_Y - DINO_SIZE;                  
        this.width = DINO_SIZE;                           
        this.height = DINO_SIZE;                         
        this.velocityY = 0;                               
        this.isJumping = false;                       
        this.gravity = 0.5;                             
        this.jumpForce = -10;                             
    }
    draw() {
        ctx.fillStyle = '#535353';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    update() {
        if (this.isJumping) {
            this.velocityY += this.gravity;
            this.y += this.velocityY;
            if (this.y >= GROUND_Y - this.height) {
                this.y = GROUND_Y - this.height;
                this.isJumping = false;
                this.velocityY = 0;
            }
        }
    }
    jump() {
        if (!this.isJumping) {
            this.isJumping = true;
            this.velocityY = this.jumpForce;
        }
    }
}

class Obstacle {
    constructor(x, size) {
        this.x = x;
        this.y = GROUND_Y - size;
        this.width = size;
        this.height = size;
    }
    draw() {
        ctx.fillStyle = '#77b255';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    update() {
        this.x -= gameSpeed;                         
    }
}

const dino = new Dino();                               
let obstacles = [];                                     
let obstacleSpawnTimer = 0;                              

function checkCollision(dino, obstacle) {
    return dino.x < obstacle.x + obstacle.width &&
           dino.x + dino.width > obstacle.x &&
           dino.y < obstacle.y + obstacle.height &&
           dino.y + dino.height > obstacle.y;
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);   

    ctx.strokeStyle = '#535353';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, GROUND_Y);
    ctx.lineTo(canvas.width, GROUND_Y);
    ctx.stroke();

    dino.update();
    dino.draw();

    obstacleSpawnTimer++;                                   
    if (obstacleSpawnTimer >= obstacleSpawnInterval) {     
        const size = OBSTACLE_SIZE;                        
        obstacles.push(new Obstacle(canvas.width, size));   
        obstacleSpawnTimer = 0; 
    }
    
    // Цикл обробки перешкод
    for (let i = 0; i < obstacles.length; i++) {
        const obs = obstacles[i];
        obs.update();                                     
        obs.draw();                                        

        if (checkCollision(dino, obs)) {                  
            gameOver();
            return;
        }

        if (obs.x + obs.width < 0) {                     
            obstacles.splice(i, 1);
            i--;
        }
    }
    
    score += 0.05;                                
    scoreDisplay.textContent = `Рахунок: ${Math.floor(score)}`;
    
    animationFrameId = requestAnimationFrame(update);
}


function startGame() {
    if (!isGameOver) return;
    isGameOver = false;
    score = 0;
    gameSpeed = 3;                                     
    obstacles = [];
    obstacleSpawnTimer = 0;
    dino.y = GROUND_Y - DINO_SIZE;
    dino.isJumping = false;
    gameOverScreen.style.display = 'none';
    update();
}

function gameOver() {
    isGameOver = true;
    cancelAnimationFrame(animationFrameId);
    finalScoreDisplay.textContent = Math.floor(score);
    gameOverScreen.style.display = 'flex';
}

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' || e.code === 'KeyW') {
        if (isGameOver) {
            startGame();
        } else {
            dino.jump();
        }
    }
});

gameOverScreen.style.display = 'flex';
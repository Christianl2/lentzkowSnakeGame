var snakeArray;
var direction;
var score;
var bestScore;
var gamePlaying;
var appleX;
var appleY;

function setup() {
    noloop();
    gamePlaying = false;
    createCanvas(400, 480);
    frameRate(5);
    score=0;
    bestScore = loadBestScore();

    snakeArray = [];
    makeSnakePiece(60,200)
    makeSnakePiece(40,200)
    makeSnakePiece(20,200)

    appleX=200;
    appleY=200;

    direction = "RIGHT"

    textSize(18);
}
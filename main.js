var ball, ballImage, bg;
var paddle, paddleImage;
var edges;


function preload(){
    
    ballImage = loadImage("ball.png");
    bg = loadImage("bg.jpg");
    paddleImage = loadImage("paddle.png");
     
}

function setup() {
    createCanvas(400,400);
    ball = createSprite(200,200,40,40);
    ball.addImage("ball",ballImage);
    ball.scale = 0.04;    
   
    
    
    paddle = createSprite(200,380,120,10);
    paddle.addImage("paddle",paddleImage);
    paddle.scale = 0.1;
    
    edges = createEdgeSprites();
}

function draw(){
    background(bg);
    
    textSize(15);
    fill("black");
    text ("PRESSIONE A TECLA ESPAÇO PARA COMEÇAR",30,100);
    
    
    ball.bounceOff(edges[1]);
    ball.bounceOff(edges[0]);
    ball.bounceOff(edges[3]);
    ball.bounceOff(edges[2]);
    ball.bounceOff (paddle);
    
    paddle.x = mouseX;
    
    if (keyDown("space")){
        ball.velocityX = 6;
        ball.velocityY = -6;
    }
    
    drawSprites();
}



const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, ground2;

var ball, sling;

var B1x, Y2x, R3x, B4x, Y5x, R6x, Y7x, B8x, R9x, Y10x, B11x;
var Y12x, R13x, B14x, Y15x, R16x, B17x, R18x, Y19x, B20x, Y21x;
var R22x, Y23x, B24x, Y25x, R26x, B27x, Y28x;
var B29x, R30x, Y31x, B32x, R33x;

var Rx1, Rx2, Rx3, Rx4, Rx5, Rx6;
var Yx1, Yx2, Yx3, Yx4, Yx5;
var Bx1, Bx2, Bx3, Bx4;
var X1y, X2y, X3y, XR1;

var score = 0;

var backGround;

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

// floating grounds    
    ground = new Ground(800,385,400,20);
    ground2 = new Ground(550,160,200,20);

// shoting objects    
    ball = new Ball(100,460,50,15);
    sling = new SlingShot(ball.body,{x:200, y:300});

// stack 1    
    B1x = new BlueBox(700,360,20,30);
    Y2x = new YellowBox(720,360,20,30);
    R3x = new RedBox(740,360,20,30);
    B4x = new BlueBox(760,360,20,30);
    Y5x = new YellowBox(780,360,20,30);
    R6x = new RedBox(800,360,20,30);
    Y7x = new YellowBox(820,360,20,30);
    B8x = new BlueBox(840,360,20,30);
    R9x = new RedBox(860,360,20,30);
    Y10x = new YellowBox(880,360,20,30);
    B11x = new BlueBox(900,360,20,30);

    Y12x = new YellowBox(710,330,20,30);
    R13x = new RedBox(730,330,20,30);
    B14x = new BlueBox(750,330,20,30);
    Y15x = new YellowBox(770,330,20,30);
    R16x = new RedBox(790,330,20,30);
    B17x = new BlueBox(810,330,20,30);
    R18x = new RedBox(830,330,20,30);
    Y19x = new YellowBox(850,330,20,30);
    B20x = new BlueBox(870,330,20,30);
    Y21x = new YellowBox(890,330,20,30);

    R22x = new RedBox(740,300,20,30);
    Y23x = new YellowBox(760,300,20,30);
    B24x = new BlueBox(780,300,20,30);
    Y25x = new YellowBox(800,300,20,30);
    R26x = new RedBox(820,300,20,30);
    B27x = new BlueBox(840,300,20,30);
    Y28x = new YellowBox(860,300,20,30);

    B29x = new BlueBox(770,270,20,30);
    R30x = new RedBox(790,270,20,30);
    Y31x = new YellowBox(810,270,20,30);
    B32x = new BlueBox(830,270,20,30);
    R33x = new RedBox(800,240,20,30);


// stack 2    
    Rx1 = new RedBox(500,135,20,30);
    Rx2 = new RedBox(520,135,20,30);
    Rx3 = new RedBox(540,135,20,30);
    Rx4 = new RedBox(560,135,20,30);
    Rx5 = new RedBox(580,135,20,30);
    Rx6 = new RedBox(600,135,20,30);

    Yx1 = new YellowBox(510,105,20,30);
    Yx2 = new YellowBox(530,105,20,30);
    Yx3 = new YellowBox(550,105,20,30);
    Yx4 = new YellowBox(570,105,20,30);
    Yx5 = new YellowBox(590,105,20,30);

    Bx1 = new BlueBox(520,75,20,30);
    Bx2 = new BlueBox(540,75,20,30);
    Bx3 = new BlueBox(560,75,20,30);
    Bx4 = new BlueBox(580,75,20,30);

    X1y = new YellowBox(530,45,20,30);
    X2y = new YellowBox(550,45,20,30);
    X3y = new YellowBox(570,45,20,30);

    XR1 = new RedBox(550,15,20,30);

    

    Engine.run(engine);
  
}

function draw(){

   if(backGround)
    background(backGround);
    
    getTime();

    textSize(20);
    fill(255,255,255);
    text("Press space bar to get another chance.",400,450);
    text ("SCORE : "+score, 750, 40);

    Engine.update(engine);

    ground.display();
    ground2.display();

    ball.display();
    sling.display();

    B1x.display();
    B1x.Score();
    Y2x.display();
    Y2x.Score();
    R3x.display();
    R3x.Score();
    B4x.display();
    B4x.Score();
    Y5x.display();
    Y5x.Score();
    R6x.display();
    R6x.Score();
    Y7x.display();
    Y7x.Score();
    B8x.display();
    B8x.Score();
    R9x.display();
    R9x.Score();
    Y10x.display();
    Y10x.Score();
    B11x.display();
    B11x.Score();

    Y12x.display();
    Y12x.Score();
    R13x.display();
    R13x.Score();
    B14x.display();
    B14x.Score();
    Y15x.display();
    Y15x.Score();
    R16x.display();
    R16x.Score();
    B17x.display();
    B17x.Score();
    R18x.display();
    R18x.Score();
    Y19x.display();
    Y19x.Score();
    B20x.display();
    B20x.Score();
    Y21x.display();
    Y21x.Score();

    R22x.display();
    R22x.Score();
    Y23x.display();
    Y23x.Score();
    B24x.display();
    B24x.Score();
    Y25x.display();
    Y25x.Score();
    R26x.display();
    R26x.Score();
    B27x.display();
    B27x.Score();
    Y28x.display();
    Y28x.Score();

    B29x.display();
    B29x.Score();
    R30x.display();
    R30x.Score();
    Y31x.display();
    Y31x.Score();
    B32x.display();
    B32x.Score();
    R33x.display();
    R33x.Score();


    Rx1.display();
    Rx1.Score();
    Rx2.display();
    Rx2.Score();
    Rx3.display();
    Rx3.Score();
    Rx4.display();
    Rx4.Score();
    Rx5.display();
    Rx5.Score();
    Rx6.display();
    Rx6.Score();
    
    Yx1.display();
    Yx1.Score();
    Yx2.display();
    Yx2.Score();
    Yx3.display();
    Yx3.Score();
    Yx4.display();
    Yx4.Score();
    Yx5.display(); 
    Yx5.Score(); 

    Bx1.display();
    Bx1.Score();
    Bx2.display();
    Bx2.Score();
    Bx3.display();
    Bx3.Score();
    Bx4.display();
    Bx4.Score();

    X1y.display();
    X1y.Score();
    X2y.display();
    X2y.Score();
    X3y.display();
    X3y.Score();
    
    XR1.display();
    XR1.Score();


}

// creating function for mouse dragged
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY});
}

// creating function for mouse Relseased
function mouseReleased(){
    sling.fly();
}

function keyPressed(){

    if(keyCode === 32){
        sling.attach(ball.body);
    }
}

async function getTime(){
    var web = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var webJson = await web.json();
    console.log(webJson);
    var dateTime = webJson.datetime;
    console.log(dateTime);
    var hour = dateTime.slice(11,13);
    console.log(hour);

    if(hour >= 06 && hour <= 19){
        bg = color(242, 255, 150);
    }
    else{
        bg = color(23, 37, 149);
    }
    backGround = (bg);
    console.log(backGround);

}
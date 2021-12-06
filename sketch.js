const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world,backgroundimg,man,manimg;

var  manAnima,zombie,zombieImg1,ZombieG,manMove,bullet,bulletImg,bulletGroup;
var zombie2,zombie2G,zombie3,zombie3G,zombie4,zombie4G,zombie5,zombie5G,rand;



function preload() {
    backgroundimg=loadImage("images/background.png");
    manAn=loadImage("images/man.png");
 manAnima=loadAnimation("images/man1.png","images/man3.png")
 zombieImg1=loadAnimation("images/zombie1.png.png","images/zombie4.png.png","images/zombie8.png.png");
 bulletImg=loadImage("images/bullet.png.png");
 manMove=loadAnimation("images/man1.png","images/man11.png","images/man21.png");
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight-200);
    man=createSprite(displayWidth-100,displayHeight-300,10,30);
    //man=createSprite(600,600,10,30);
    man.addImage("man",manAn)

    console.log(man.x)
    console.log(man.y)

    /* bullet=createSprite(man.x-40,man.y+15)
        bullet.addImage(bulletImg);
        bullet.scale=0.15
        bullet.visible=false;*/
        
     zombieG=new Group ()
     zombie2G=new Group ()
     zombie4G=new Group ()
     zombie3G=new Group ()
     zombie5G=new Group ()
    bulletGroup=new Group()
   
   //bullet.debug();
}

function draw(){
    background(backgroundimg);

    if(keyWentDown("space")){
      // man.addAnimation("man",manAnima)
        createBullet();
        //bullet.visible=true;
       // bullet.velocityX=-9
    }
//call different zombies group
    if (frameCount % 90 === 0){
        //generate random obstacles
        rand = Math.round(random(1,5));
        switch(rand) {
          case 1: zombieSpawn1();
                  break;
          case 2: zombieSpawn2();
                  break;
          case 3: zombieSpawn3();
                  break;
          case 4: zombieSpawn4();
                  break;
          case 5: zombieSpawn5();
                  break;
          default: break; 
        }}


    if(bulletGroup.isTouching(zombieG)){
        destroyZombie();
    }
    if(bulletGroup.isTouching(zombie2G)){
        destroyZombie2();
    }
    if(bulletGroup.isTouching(zombie3G)){
        destroyZombie3();
    }
    if(bulletGroup.isTouching(zombie4G)){
        destroyZombie4();
    }
    if(bulletGroup.isTouching(zombie5G)){
        destroyZombie5();
    }

man.y=World.mouseY

  
  // manMoving();
     

    drawSprites();
 

  

        }
 
        function zombieSpawn1(){
        zombie=createSprite(random(0,400),random(400,height-70),20,20);
        zombie.addAnimation("zombie",zombieImg1);
        zombie.scale=0.6
        zombie.velocityX=3;
        zombieG.add(zombie)
        }
        function zombieSpawn2(){
            zombie2=createSprite(random(0,400),random(400,height-70),20,20);
            zombie2.addAnimation("zombie",zombieImg1);
            zombie2.scale=0.6
            zombie2.velocityX=3;
            zombie2G.add(zombie)
            }

        function zombieSpawn3(){
                zombie3=createSprite(random(0,400),random(400,height-70),20,20);
                zombie3.addAnimation("zombie",zombieImg1);
                zombie3.scale=0.6
                zombie3.velocityX=3;
                zombie3G.add(zombie)
                }
        function zombieSpawn4(){        
                    zombie4=createSprite(random(0,400),random(400,height-70),20,20);
                    zombie4.addAnimation("zombie",zombieImg1);
                    zombie4.scale=0.6
                    zombie4.velocityX=3;
                    zombie4G.add(zombie)
                    }

        function zombieSpawn5(){
                        zombie5=createSprite(random(0,400),random(400,height-70),20,20);
                        zombie5.addAnimation("zombie",zombieImg1);
                        zombie5.scale=0.6
                        zombie5.velocityX=3;
                        zombie5G.add(zombie)
                        }

        
        





function manMoving(){
    //bullet.x = man.x;
   // bullet.y = man.y;

    
    if(keyWentUp("space")){
        man.addAnimation("man",manAn)
        bulletGroup.remove(bullet);
    }
    if(keyWentDown(UP_ARROW)){
        man.addAnimation("man",manMove)   
           man.velocityY=-2;
           bulletGroup.x=man.x;
           bulletGroup.y=man.y;
       }
       if(keyWentUp(UP_ARROW)){
           man.addAnimation("man",manAn); 
              man.velocityY=0;
              bulletGroup.x=man.x;
           bulletGroup.y=man.y;
          }
    if(keyWentDown(DOWN_ARROW)){
        man.addAnimation("man",manMove)   
           man.velocityY=2;
           bullet.x=man.x;
           bullet.y=man.y;
       }
       if(keyWentUp(DOWN_ARROW)){
           man.addAnimation("man",manAn); 
              man.velocityY=0;
              bullet.x=man.x;
           bullet.y=man.y;
          }

          if(keyWentDown(LEFT_ARROW)){
            man.addAnimation("man",manMove)   
               man.velocityX=-2;
               bullet.x=man.x;
           bullet.y=man.y;
           }
           if(keyWentUp(LEFT_ARROW)){
               man.addAnimation("man",manAn); 
                  man.velocityX=0;
                  bullet.x=man.x;
           bullet.y=man.y;
              }
       
              if(keyWentDown(RIGHT_ARROW)){
               man.addAnimation("man",manMove)   
                  man.velocityX=2;
                  bullet.x=man.x;
           bullet.y=man.y;
              }
              if(keyWentUp(RIGHT_ARROW)){
                  man.addAnimation("man",manAn); 
                     man.velocityX=0;
                     bullet.x=man.x;
           bullet.y=man.y;
                 }

}

function destroyZombie (){
    zombieG.destroyEach();


}
function destroyZombie2 (){
    zombie2G.destroyEach();


}
function destroyZombie3 (){
    zombie3G.destroyEach();


}
function destroyZombie4 (){
    zombie4G.destroyEach();


}
function destroyZombie5 (){
    zombie5G.destroyEach();


}

// Creating  bullet for bow
function createBullet() {
    var bullet= createSprite(100, 100, 60, 10);
    bullet.addImage(bulletImg);
    bullet.x = 360;
    bullet.y=man.y;
    bullet.velocityX = -4;
    bullet.lifetime = 100;
    bullet.scale = 0.3;
    bulletGroup.add(bullet);
     
  }
  
    
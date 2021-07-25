var bg
var bg1
 
var iss
var issImg

var sc1
var sc1Img



function preload(){
bg=loadImage("spacebg.jpg")
issImg=loadImage("iss.png")
sc1Img=loadImage("spacecraft1.png")
}





function setup() {
  createCanvas(windowWidth,windowHeight);
 

  

 bg1=createSprite(windowWidth/2,windowHeight/2)
 bg1.addImage("bg1",bg)
 bg1.scale=2

 iss=createSprite(windowWidth/2,windowHeight/2-100)
 iss.addImage("iss",issImg)

 sc1=createSprite(windowWidth/2+300,windowHeight/2+200)
 sc1.addImage("sc1",sc1Img)
 sc1.scale=0.4


}

function draw() {
  background("white");  
 
 if(keyDown("right")){
  sc1.x=sc1.x+5
 }
 if(keyDown("left")){
  sc1.x=sc1.x-5
 }
 if(keyDown("up")){
  sc1.y=sc1.y-5
 }
 if(keyDown("down")){
  sc1.y=sc1.y+5
 }


 iss.depth=sc1.depth+1






















 
  drawSprites();
}     


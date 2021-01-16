var form,formimg
var input,button,start,button2,van,vanimg
var bgimage,bg
var marketimg,market
var manfall,manfallimg
var manrun,manrunimg,house,houseimg,hinside,hinsideimg
var gamestate="start"

function preload(){
formimg=loadImage("images/form.png")
bgimage=loadImage("images/story.png")
marketimg=loadImage("images/background.png")
vanimg=loadImage("images/van.png")
manfallimg=loadImage("images/falling man.png")
manrunimg=loadAnimation("images/run1.png","images/run2.png","images/run3.png")
houseimg=loadImage("images/house.png")

}


function setup() {
  createCanvas(displayWidth,displayHeight);
  form=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
  form.addImage(formimg)
  button2=createButton('press to countinue')
  button2.position(850,700)
  button2.hide()
  
  form.scale=5
  input=createInput("NAME")
  button=createButton('start')
 
}

function draw() {
  background(255,255,255);  
    start=input.value()
    input.position(650,250)
    button.position(800,250)
    
    
    button.mousePressed(()=>{
      gamestate="play"
      form.visible=false
      input.hide()
      button.hide()
      bg=createSprite(800,450)
      bg.addImage(bgimage)
      bg.scale=6
      button2=createButton('press to countinue')
      button2.position(850,700)
    })
    button2.mousePressed(()=>{
     
      market=createSprite(500,300,10,10)
      market.addImage(marketimg)
      van=createSprite(1200,550,10,10)
      van.addImage(vanimg)
      van.velocityX=-7
      manfall=createSprite(van.x,600,10,10)
      manfall.addImage(manfallimg)
      market.scale=6
      button2.hide()
      bg.visible=false
      gamestate="run"
      
     
     

     
    })
    
    if(gamestate=="run"){
      house=createSprite(500,300,10,10)
      house.addImage(houseimg)
      house.scale=7
     manrun=createSprite(150,800,10,10)
     manrun.velocityX=6
     manrun.scale=2
    // manrun.addAnimation("running",manrunimg)
    

     
     market.visible=false
     van.visible=false
     bg.visible=false
     manfall.visible=false
     
     
   }




  drawSprites();
  if(gamestate=="start"){
    textSize(30)
    stroke("red")
    fill("red")
    text("WELCOME TO VILLAGE BATTLE GROUND ",550,150)
    
  }
  
 if(gamestate=="play"){
    stroke("blue")
    fill("blue")
  text(" THIS IS A STORY OF A MAN WHO HAS BEEN KIDNAPPED AND HAS BEEN THROWN ",650,450)
  text("OUT IN A VILLAGE WITH NOTHING IN HIS HANDS.",700,500)
  text("THEN RAN INTO A HOUSE AND HE DEVOLOPED HIM AND AN ISLAND AND ALSO BECAME THE KING.",650,550)
  text("[THE KEYS WILL BE DISPLAYING AT THAT MOMENT IT'S NEED]",750,600)
 

 }

}
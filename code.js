var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["4fb8fd10-6362-407d-85db-c8fb7e363b45","945789ad-ed47-49c5-9c71-04aee4850865","a4ccbad7-034b-4026-9ff1-902df5cec79e","3e01f054-ebab-4328-b35e-9a7ab942bcda","3ae6c481-6dd2-474f-99d8-13e559629233"],"propsByKey":{"4fb8fd10-6362-407d-85db-c8fb7e363b45":{"name":"virus1","sourceUrl":"assets/api/v1/animation-library/gamelab/K9IIpH4zuNP8nrKUdHAWrMAoOxOoRo5F/category_retro/retrocreature_16.png","frameSize":{"x":365,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"K9IIpH4zuNP8nrKUdHAWrMAoOxOoRo5F","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":365,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/K9IIpH4zuNP8nrKUdHAWrMAoOxOoRo5F/category_retro/retrocreature_16.png"},"945789ad-ed47-49c5-9c71-04aee4850865":{"name":"virus2","sourceUrl":"assets/api/v1/animation-library/gamelab/EwmTcHfXSWckxh8lnt67ueK2VKQHkNP7/category_retro/retrocreature_18.png","frameSize":{"x":332,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"EwmTcHfXSWckxh8lnt67ueK2VKQHkNP7","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/EwmTcHfXSWckxh8lnt67ueK2VKQHkNP7/category_retro/retrocreature_18.png"},"a4ccbad7-034b-4026-9ff1-902df5cec79e":{"name":"virus3","sourceUrl":"assets/api/v1/animation-library/gamelab/18DuQPEWssd3B8Nv7IAu2RYv1d92wMFq/category_retro/retrocreature_09.png","frameSize":{"x":332,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"18DuQPEWssd3B8Nv7IAu2RYv1d92wMFq","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/18DuQPEWssd3B8Nv7IAu2RYv1d92wMFq/category_retro/retrocreature_09.png"},"3e01f054-ebab-4328-b35e-9a7ab942bcda":{"name":"virus4","sourceUrl":"assets/api/v1/animation-library/gamelab/3OPR7fNp2GuC01rgoimtapzXeAYybc.O/category_retro/retrocreature_03.png","frameSize":{"x":398,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"3OPR7fNp2GuC01rgoimtapzXeAYybc.O","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/3OPR7fNp2GuC01rgoimtapzXeAYybc.O/category_retro/retrocreature_03.png"},"3ae6c481-6dd2-474f-99d8-13e559629233":{"name":"sam","sourceUrl":"assets/api/v1/animation-library/gamelab/8AmDG487lonn5isbI5elQ3ee8xDHqDsZ/category_fantasy/rpgcharacter_11.png","frameSize":{"x":252,"y":332},"frameCount":1,"looping":true,"frameDelay":2,"version":"8AmDG487lonn5isbI5elQ3ee8xDHqDsZ","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":252,"y":332},"rootRelativePath":"assets/api/v1/animation-library/gamelab/8AmDG487lonn5isbI5elQ3ee8xDHqDsZ/category_fantasy/rpgcharacter_11.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

calle1=createSprite(190,120,420,3);
calle1.shapeColor="black";
calle2=createSprite(190,260,420,3);
calle2.shapeColor="black";

//characters
virus1=createSprite(100,150,10,10);
virus1.setAnimation("virus1");
virus1.scale=0.06;

virus2=createSprite(215,150,10,10);
virus2.setAnimation("virus2");
virus2.scale=0.06;

virus3=createSprite(165,230,10,10);
virus3.setAnimation("virus3");
virus3.scale=0.06;

virus4=createSprite(270,230,10,10);
virus4.setAnimation("virus4");
virus4.scale=0.06;

sam=createSprite(20,190,13,13);
sam.setAnimation("sam");
sam.scale=0.13

//velocidad
virus1.velocityY=7;
virus2.velocityY=7;
virus3.velocityY=-7;
virus4.velocityY=-7;

//contador
vidas=3;

function draw() {
  background("white")
  fill("pink"); 
  rect(0,120,52,140);
  fill("pink");
  rect(345,120,52,140);
  
  virus1.bounceOff(calle1);
  virus1.bounceOff(calle2);
  virus2.bounceOff(calle1);
  virus2.bounceOff(calle2);
  virus3.bounceOff(calle1);
  virus3.bounceOff(calle2);
  virus4.bounceOff(calle1);
  virus4.bounceOff(calle2);
  
  textSize("30");
  text("vidas:"+vidas,10,25)
  
  if (keyDown("right")){
      sam.x=sam.x+9
  }
  if (keyDown("left")){
      sam.x=sam.x-9
  }
    
  if (sam.isTouching(virus1)|| sam.isTouching(virus2)|| sam.isTouching(virus3)|| sam.isTouching(virus4)){
  sam.x=20;
  sam.y=190;
  vidas=vidas-1
  }
  
  drawSprites();
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["cae67dce-b1b8-455e-bae0-8912717d750c","a8e5b356-75fa-4f37-9c63-3ae0bd8fc996","2273e252-157b-4c29-b495-cedaf6d08a65","5e2d5e5c-1a36-41c1-a1cc-2287095ca9d8"],"propsByKey":{"cae67dce-b1b8-455e-bae0-8912717d750c":{"name":"hippo_token_1","sourceUrl":"assets/api/v1/animation-library/gamelab/jpCH7vEOxqzzABMtodY7GcIKmik65HHk/category_animals/hippo_token.png","frameSize":{"x":284,"y":285},"frameCount":1,"looping":true,"frameDelay":2,"version":"jpCH7vEOxqzzABMtodY7GcIKmik65HHk","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":284,"y":285},"rootRelativePath":"assets/api/v1/animation-library/gamelab/jpCH7vEOxqzzABMtodY7GcIKmik65HHk/category_animals/hippo_token.png"},"a8e5b356-75fa-4f37-9c63-3ae0bd8fc996":{"name":"giraffe_token_1","sourceUrl":"assets/api/v1/animation-library/gamelab/VBBrN0j9GCck_4YNZ7F8yRothlBbBffl/category_animals/giraffe_token.png","frameSize":{"x":284,"y":285},"frameCount":1,"looping":true,"frameDelay":2,"version":"VBBrN0j9GCck_4YNZ7F8yRothlBbBffl","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":284,"y":285},"rootRelativePath":"assets/api/v1/animation-library/gamelab/VBBrN0j9GCck_4YNZ7F8yRothlBbBffl/category_animals/giraffe_token.png"},"2273e252-157b-4c29-b495-cedaf6d08a65":{"name":"coin_gold_1","sourceUrl":"assets/api/v1/animation-library/gamelab/pUFPchUgZRoy5C6YtEEkLfSDmZWPxW.y/category_board_games_and_cards/coin_gold.png","frameSize":{"x":61,"y":61},"frameCount":1,"looping":true,"frameDelay":2,"version":"pUFPchUgZRoy5C6YtEEkLfSDmZWPxW.y","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":61,"y":61},"rootRelativePath":"assets/api/v1/animation-library/gamelab/pUFPchUgZRoy5C6YtEEkLfSDmZWPxW.y/category_board_games_and_cards/coin_gold.png"},"5e2d5e5c-1a36-41c1-a1cc-2287095ca9d8":{"name":"coin_bronze_1","sourceUrl":"assets/api/v1/animation-library/gamelab/iKGg06YL5McsU6VC.oRRQRtI1E.3XFoY/category_board_games_and_cards/coin_bronze.png","frameSize":{"x":60,"y":61},"frameCount":1,"looping":true,"frameDelay":2,"version":"iKGg06YL5McsU6VC.oRRQRtI1E.3XFoY","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":61},"rootRelativePath":"assets/api/v1/animation-library/gamelab/iKGg06YL5McsU6VC.oRRQRtI1E.3XFoY/category_board_games_and_cards/coin_bronze.png"}}};
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

//var board = createSprite(200, 200,400,400);
//board.shapeColor = "tan";
var score = 0
var counter = 0
lives = 2
var inner_1 = createSprite(200,300,200,5);
var inner_2 = createSprite(100,200,5,200);
var inner_3 = createSprite(200,100,200,5);
var inner_4 = createSprite(300,200,5,200);

pocket1 = createSprite(375,375,50,50);
pocket2 = createSprite(25,375,50,50);
pocket3 = createSprite(25,25,50,50);
pocket4 = createSprite(375,25,50,50);

circle1 = createSprite(150, 250);
circle2 = createSprite(150,150);
circle3 = createSprite(250,250);
circle4 = createSprite(250,150);
circle5 = createSprite(200,200);
striker = createSprite(300,200);

coin = createSprite(175,200);
coin2 = createSprite(225,190);
coin3 = createSprite(200,215);
coin4 = createSprite(185,215);
coin5 = createSprite(180,180);
coin6 = createSprite(200,175);

circle1.setAnimation("hippo_token_1")
circle2.setAnimation("hippo_token_1")
circle3.setAnimation("hippo_token_1")
circle4.setAnimation("hippo_token_1")
circle5.setAnimation("hippo_token_1")
striker.setAnimation("giraffe_token_1")

coin6.setAnimation("coin_gold_1")
coin2.setAnimation("coin_gold_1")
coin4.setAnimation("coin_gold_1")
coin.setAnimation("coin_bronze_1")
coin3.setAnimation("coin_bronze_1")
coin5.setAnimation("coin_bronze_1")

circle1.scale = 0.1
circle2.scale = 0.1
circle3.scale = 0.1
circle4.scale = 0.1
circle5.scale = 0.25
striker.scale = 0.1

coin.scale = 0.3
coin2.scale = 0.3
coin3.scale = 0.3
coin4.scale = 0.3
coin5.scale = 0.3
coin6.scale = 0.3
function draw() {
  background("tan")
  textSize(30)
  text("Score: " + score,200,50)
  createEdgeSprites()
  if (counter != 6 && counter != 13) {
    if (keyDown(RIGHT_ARROW)) {
      striker.x = striker.x + 3
    }
     if (keyDown(LEFT_ARROW)) {
      striker.x = striker.x - 3
    }
      if (keyDown(UP_ARROW)) {
      striker.y = striker.y - 3
    }
     if (keyDown(DOWN_ARROW)) {
      striker.y = striker.y + 3
    }
  }
  if (striker.isTouching(coin)) {
    coin.velocityX = randomNumber(-5,5);
    coin.velocityY = randomNumber(-5,5);
   
  }
  if (striker.isTouching(coin2)) {
    coin2.velocityX = randomNumber(-5,5);
    coin2.velocityY = randomNumber(-5,5);
  }
  if (striker.isTouching(coin3)) {
    coin3.velocityX = randomNumber(-5,5);
    coin3.velocityY = randomNumber(-5,5);
  }
  if (striker.isTouching(coin4)) {
    coin4.velocityX = randomNumber(-5,5);
    coin4.velocityY = randomNumber(-5,5);
  }
  if (striker.isTouching(coin5)) {
    coin5.velocityX = randomNumber(-5,5);
    coin5.velocityY = randomNumber(-5,5);
  }
  if (striker.isTouching(coin6)) {
    coin6.velocityX = randomNumber(-5,5);
    coin6.velocityY = randomNumber(-5,5);
  }
  if (counter == 6) {
    text("Press 'r' to reset board",90,82.5)
    text("You have " + lives + " chances left",50,350)
    if (keyWentDown("r")) {
      reset()
    }
  }

  coin.bounceOff(edges);
  coin2.bounceOff(edges);
  coin3.bounceOff(edges);
  coin4.bounceOff(edges);
  coin5.bounceOff(edges);
  coin6.bounceOff(edges);
  if (striker.isTouching(edges)) {
    striker.x = 300
    striker.y = 200
  }
  if (counter != 13 && counter != 6) {
    if (striker.isTouching(pocket1) || striker.isTouching(pocket2)||striker.isTouching(pocket3) || striker.isTouching(pocket4)) {
      score --
    }
    }
  
  drawSprites();
  func_score(coin);
  func_score(coin2);
  func_score(coin3);
  func_score(coin4);
  func_score(coin5);
  func_score(coin6);
  if (counter == 13) {
    text("You Win",115,82.5)
  }

}
function func_score(coin_par){
  if (coin_par.isTouching(pocket1)||coin_par.isTouching(pocket2) || coin_par.isTouching(pocket3)||coin_par.isTouching(pocket4)) {
    score++
    coin_par.velocityX = 0
    coin_par.velocityY = 0
    coin_par.destroy()
    counter++
  }
}
function reset() {
  counter = 0
  lives --
  if (lives == 0){
    counter = 7
    
  }
  coin = createSprite(175,200);
  coin2 = createSprite(225,190);
  coin3 = createSprite(200,215);
  coin4 = createSprite(185,215);
  coin5 = createSprite(180,180);
  coin6 = createSprite(200,175);
  
  coin6.setAnimation("coin_gold_1")
  coin2.setAnimation("coin_gold_1")
  coin4.setAnimation("coin_gold_1")
  coin.setAnimation("coin_bronze_1")
  coin3.setAnimation("coin_bronze_1")
  coin5.setAnimation("coin_bronze_1")
  
  coin.scale = 0.3
  coin2.scale = 0.3
  coin3.scale = 0.3
  coin4.scale = 0.3
  coin5.scale = 0.3
  coin6.scale = 0.3
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

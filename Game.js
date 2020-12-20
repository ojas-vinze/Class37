class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hide();
    testSize(30);
    text("Game Start",120,100);
    player.getPlayerInfo();

    if(allPlayersData!==undefined){
      var display_position=130;
      for(var plr in allPlayersData){
        if(plr==="player"+player.index){
          fill("red");
        }
        else{
          fill("black");
        }
        display_position=display_position+20;
        testSize(15);
        text(allPlayersData[plr].name+":"+allPlayers[plr].distance,120,display_position);
      }
    }
    if(keyIsDown(UP_ARROW) && player.index!==null){
      player.distance +=50; 
      player.update();
    }
  }
}

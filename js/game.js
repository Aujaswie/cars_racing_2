class Game {
    constructor (){};
    
    getState (){
        var gameStateRef = database.ref ('gameState') ;
        gameStateRef.on ("value",function (data){
            gameState = data.val ();
        })
    }

    update(state){
        database.ref ('/').update({
            gameState: state
        })
        
    }
    start(){
        if (gameState == 0){
            player = new Player ();
            player.getCount ();
            form = new Form ();
            form.display();

        }
         car1 = createSprite (100,200);
         car2 = createSprite (300,200);
         car3 = createSprite (500,200);
         car4 = createSprite (700,200);
         cars = [car1,car2,car3,car4]

         car1.addImage (whiteCar);
         car2.addImage (redCar);
         car3.addImage (blueCar);
         car4.addImage (blackCar);

    }

    play (){
        form.hide ();
        textSize (30);
        Player.getPlayersInfo();
        
        
        var index = 0;
        var x = 170;
        var y;

        if(allPlayers !== undefined){
            background (ground);
            image(track,0,-4*displayHeight,displayWidth,5*displayHeight+200);
            for (var plr in allPlayers){
             index = index+1;
             x= x+300;
             y= displayHeight - allPlayers [plr].distance  ; 
             cars [index -1].x = x;
             cars [index -1].y = y;

             if(index== player.index){
                 camera.position.x = displayWidth/2;
                 camera.position.y = cars [index-1].y;
                 cars [index-1].shapeColor = "cyan";
             }
             
            }
        }

        if (keyIsDown(UP_ARROW)&& player.index !== null){
         player.distance += 50 ;
         player.update ();
        }

        if(player.distance>= 5150){
            gameState =2;
        }

        drawSprites ();
    }

    end(){
        console.log(player.distance);
    }
}



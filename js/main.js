//SCRIPT PRINCIPAL, AQUÍ SE CREA EL GAMEOBJECT Y LA JUGABILIDAD

window.onload = function(){
    
    var game = new Phaser.Game("100%","100%",Phaser.AUTO,"game");
    
    
    
     //SE DECLARA EL ESTADO DEL JUEGO COMO TAL 
    BasicGame.TheGame = function(game){
        
        this.cont = 0; //CONTADOR PARA EL SCORE
        this.life = 100; //CONTADOR PARA LA VIDA DEL USUARIO
        this.ScoreText = "";
        this.Vida = "";
        this.sprite1 = null;
        this.sprite2 = null;
        this.sprite3 = null;
    }
    
    //PROTOTIPO DEL ESTADO DEL JUEGO
    BasicGame.TheGame.prototype = {
        
        //FUNCIÓN PARA CREAR ELEMENTOS DEL JUEGO
        create: function(){
            
            this.game.world.setBounds(0,0,1920,1080); //SE DECLARAN LOS LÍMITES DEL JUEGO
            this.add.sprite(0,0,"backdrop");
            
            var canvas = window.document.getElementsByTagName('canvas')[0],
        prevX = 0, prevY = 0, mouseDown = false;
    
    canvas.addEventListener('touchstart',function(e){
    	prevX = e.changedTouches[0].screenX;
        prevY = e.changedTouches[0].screenY;
    });
    
    canvas.addEventListener('mousedown',function(e){
    	mouseDown = true;
    	prevX = e.screenX;
        prevY = e.screenY;
    });
    
    canvas.addEventListener('touchmove',function(e){
    	e.preventDefault();
    	game.camera.x+= prevX - e.changedTouches[0].screenX;
    	prevX = e.changedTouches[0].screenX;
        game.camera.y+= prevY - e.changedTouches[0].screenY;
        prevY = e.changedTouches[0].screenY;
    });
    
    canvas.addEventListener('mousemove',function(e){
    	if(mouseDown){
	    	e.preventDefault();
	    	game.camera.x+= prevX - e.screenX;
	    	prevX = e.screenX;
	        game.camera.y+= prevY - e.screenY;
	        prevY = e.screenY;
	    }
    });
    
    canvas.addEventListener('mouseup',function(e){
    	mouseDown = false;
    });
    
    canvas.addEventListener('mouseleave',function(e){
    	mouseDown = false;
    });
    
    //SE CREA EL TEXTO DEL PUNTAJE
    this.ScoreText = this.add.text((game.width/2),50,"PUNTAJE "+this.cont,{ font: "32px Arial", fill: "#f26c4f", align: "left" });   
    this.ScoreText.fixedToCamera = true; //EL TEXTO SE MUEVE JUNTO A LA CÁMARA
    this.ScoreText.cameraOffset.setTo((game.width/2),50); //SE QUEDA FIJA EN ESA POSICIÓN DE LA PANTALLA
    
    
    //SE CREA EL PORCENTAJE DE LA VIDA
    this.Vida = this.add.text(32,32,"Energia: "+this.life+"%",{font: "20px Arial", fill: "#f26c4f", align: "left"});
    this.Vida.fixedToCamera = true; //EL TEXTO SE MUEVE JUNTO A LA CÁMARA
    this.Vida.cameraOffset.setTo(32,32); //SE QUEDA FIJO EL TEXTO EN ESA POSICIÓN
            
    
    //CREANDO LAS ZONAS PARA ACTIVAR EVENTOS
    this.sprite1 = this.add.sprite(game.world.randomX,game.world.randomY,"points");        
    this.sprite2 = this.add.sprite(game.world.randomX,game.world.randomY,"points");
    this.sprite3 = this.add.sprite(game.world.randomX,game.world.randomY,"points");
            
    //CONFIGURANDO LOS POINTS PARA QUE SEAN CLICKEABLES
    this.sprite1.inputEnabled = true;
    this.sprite2.inputEnabled = true;
    this.sprite3.inputEnabled = true;
    
    //SE LE ASIGNA EL EVENTO CORRESPONDIENTE A LOS POINTS        
    this.sprite1.events.onInputDown.add(this.ClickPoint,this);
    this.sprite2.events.onInputDown.add(this.ClickPoint,this);
    this.sprite3.events.onInputDown.add(this.ClickPoint,this);
    
            
       },
    
      ClickPoint: function(sprite){
          
          
        console.log("click click");
          
          //USO DE JQUERY PARA ACTIVAR EL MODAL
          $("#myModal").modal();
      },
        
        //FUNCIÓN PARA VALIDAR LAS RESPUESTA DEL ACERTIJO, DEPENDIENDO DE SU VALOR AFECTA AL JUGADOR
      ValidarRsp: function() {
          
          var respuesta = document.getElementById("rsp").value;
          
          if(respuesta == "true"){
              this.cont++;
              this.ScoreText.text = "PUNTAJE "+this.cont;
              document.getElementById("rsp").value = "";
          }
          else if(respuesta == "false"){
              this.life = this.life - 10;
              this.Vida.text = "Energia "+this.life+"%";
              document.getElementById("rsp").value = "";
          }
      },
        
        //FUNCIÓN PARA ACTUALIZAR CAMBIOS EN EL JUEGO 
      update: function(){
            
          var click = document.getElementById("rspButton");
          click.addEventListener("click",this.ValidarRsp());
          
          if(this.life <= 0){
              game.state.start("GameOver");
          }
          
       },
              
        //FUNCIÓN PARA REUBICAR LOS ELEMENTOS DE LA PANTALLA EN CASO QUE LA RESOLUCIÓN CAMBIE
        resize: function(){
            //REUBICANDO EL TEXTO DE ScoreText
            this.ScoreText.x = Math.round((game.width-this.ScoreText.width)/2);
            this.ScoreText.Y = Math.round((game.height-this.ScoreText.height)/2);
            this.ScoreText.cameraOffset.setTo(this.ScoreText.x,this.ScoreText.y);
        }
    };
    

    
    
    //SE DECLARAN LOS ESTADOS DEL JUEGO
    game.state.add("Boot",BasicGame.Boot);
    game.state.add("Preloader",BasicGame.Preloader);
    game.state.add("GameOver",BasicGame.GameOver);
    game.state.add("TheGame",BasicGame.TheGame);
    game.state.start("Boot"); //SE EJECUTA EL ESTADO Boot
    
    
    
}
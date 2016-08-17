//SCRIPT PARA EL ESTADO DE GAME OVER, EL SE ACTIVA SI EL JUGADOR PIERDE

BasicGame.GameOver = function(game){
    
}

BasicGame.GameOver.prototype = {
    
    create: function(){
        
      var texto = this.add.text(this.game.world.centerX,this.game.world.centerY,"Estas cansado, juega más tarde",{font: "30px Arial", fill: "#f26c4f", align: "left"});
        
      texto.cameraOffset.setTo(this.game.world.centerX,this.game.world.centerY);    
    }
};
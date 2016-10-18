/*ESTE SCRIPT ES PARA DEFINIR EL ESTADO DE Preload, EN ESTE ESTADO SE PRECARGAN TODOS LOS
ASSETS NECESARIOS PARA UTILIZARLOS EN LOS ESTADOS POSTERIORES A ESTE
*/
//var cont = 0;

BasicGame.Preloader = function (game){
    this.loading = null;
    
    this.playbottom = null;
    
};

//SE DEFINE EL PROTOTIPO DE ESTE OBJETO
BasicGame.Preloader.prototype = {
    
    //FUNCIÓN DEL ESTADO PARA PRECARGAR ASSETS
    preload: function(){
        
        this.load.image("backdrop","assets/juego1_vzla_full_3726x3072px.jpg");
        this.load.image("points","assets/points.png");
    },
    //FUNCIÓN DEL ESTADO PARA CREAR ELEMENTOS YA CARGADOS ANTERIORMENTE
    create: function(){
        var loadingbar = this.add.sprite(this.game.world.centerX,this.game.world.centerY,"loading");
        loadingbar.anchor.setTo(0.5,1);
        this.load.setPreloadSprite(loadingbar);
        this.state.start("TheGame");
    }
    
};
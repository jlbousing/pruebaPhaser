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
        
        this.load.image("backdrop","assets/HD-Game-Wallpaper-HD-Wallpapers_ndjuLSA.jpg");
        this.load.image("points","assets/points.png");
    },
    //FUNCIÓN DEL ESTADO PARA CREAR ELEMENTOS YA CARGADOS ANTERIORMENTE
    create: function(){
        this.add.sprite(0,0,"loading");
        this.state.start("TheGame");
    }
    
};
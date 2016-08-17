/*ESTE SCRIPT ES LA RAÍZ DEL JUEGO, AQUÍ SE CARGAN ELEMENTOS COMO LAS FÍSICAS, ASSETS, ETC.*/


BasicGame = {
    //EN ESTE OBJETO SE DEFINEN LAS VARIABLES GLOBALES DEL PROYECTO
    score: 0
};

//SE DECLARA EL OBJETO Boot DEL JUEGO
BasicGame.Boot = function(game){
    
};

//SE DECLARA EL PROTOTIPO DEL OBJETO Boot
BasicGame.Boot.prototype = {
    
    //FUNCIÓN PARA INICIALIZAR CARACTERÍSTICAS DEL JUEGO
    init: function(){
        
        //SE INICIALIZAN PROPIEDADES PARA DIFERENTES PANTALLAS
        
        //  Unless you specifically know your game needs to support multi-touch I would recommend setting this to 1
        this.input.maxPointers = 1;

        //  Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
        this.stage.disableVisibilityChange = true;

        //  This tells the game to resize the renderer to match the game dimensions (i.e. 100% browser width / height)
        this.scale.scaleMode = Phaser.ScaleManager.RESIZE;
        
        /*
        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = true;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.scaleMode = Phaser.ScaleManager.RESIZE;
        this.scale.setMinMax(480, 260, 1024, 768);
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        
        if (!this.game.device.desktop)
        {
            this.scale.forceOrientation(true, false);
            this.scale.setResizeCallback(this.gameResized, this);
            this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
            this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
        }
        
        */
    },
    
    //FUNCIÓN PARA PRECARGAR ARCHIVOS EN EL ESTADO Boot
    preload: function(){
        this.load.image("loading","assets/logo_eluniversalVE.jpg");
    },
    
    //FUNCIÓN PARA CREAR ELEMENTOS EN ESTE ESTADO
    create: function(){
        
        //SE CAMBIA DE ESTADO
        this.state.start("Preloader");
    }
    
};
brainVita.preloader = function(game){
	// define width and height of the game
	brainVita.GAME_WIDTH = 800;
	brainVita.GAME_HEIGHT = 600;
};
brainVita.preloader.prototype = {
	preload: function(){
		// set background color and preload image
		this.stage.backgroundColor = '#B4D9E7';
		this.preloadBar = this.add.sprite((brainVita.GAME_WIDTH-311)/2, (brainVita.GAME_HEIGHT-27)/2, 'preloaderBar');
		this.load.setPreloadSprite(this.preloadBar);
		// load images
		this.load.image('background', 'img/background.png');
		this.load.image('Mainmenu', 'img/Mainmenu.png');
		//this.load.spritesheet('startButton', 'img/startButton.png',220,70);
		 this.game.load.atlasJSONHash('start', 'img/start.png', 'img/start.json');
		 this.game.load.atlasJSONHash('highscore_btn', 'img/highscore_btn.png', 'img/highscore_btn.json');
		 this.game.load.atlasJSONHash('tryagain', 'img/tryagain.png', 'img/tryagain.json');
		 this.game.load.atlasJSONHash('back_btn', 'img/back_btn.png', 'img/back_btn.json');
		 this.game.load.atlasJSONHash('help_btn', 'img/help_btn.png', 'img/help_btn.json');
		 this.game.load.atlasJSONHash('quit', 'img/quit.png', 'img/quit.json');
		 this.game.load.atlasJSONHash('undo_btn', 'img/undo_btn.png', 'img/undo_btn.json');
		 this.game.load.atlasJSONHash('pause', 'img/pause.png', 'img/pause.json');
		 this.game.load.atlasJSONHash('cross-icon', 'img/cross-icon.png', 'img/cross-icon.json');
		
		this.load.image('helpscreen', 'img/helpscreen.png');
		this.load.image('highscore', 'img/highscore.png');
	
		this.load.image('board','img/board.png');
		this.load.image('marble','img/marble.png');
		this.load.image('finalscreen','img/finalscreen.png');
	    this.load.image('Timer','img/Timer.png');
	    
	    




		// load spritesheets
		
	},
	create: function(){
		// start the MainMenu state
		this.state.start('MainMenu');
	}
};
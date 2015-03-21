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
		this.load.spritesheet('startButton', 'img/startButton.png',220,70);
		this.load.spritesheet('highscorebutton', 'img/highscorebutton.png',220,70);
		this.load.spritesheet('HelpButton', 'img/HelpButton.png',220,70);
		this.load.spritesheet('quitButton', 'img/quitButton.png',220,70);
		this.load.spritesheet('tryagainButton', 'img/tryagainButton.png',220,70);


		
	
		this.load.image('helpscreen', 'img/helpscreen.png');
		this.load.image('highscore', 'img/highscore.png');
		this.load.image('back','img/back.png');
		this.load.image('board','img/board.png');
		this.load.image('marble','img/marble.png');
		this.load.image('finalscreen','img/finalscreen.png');
		this.load.image('cross_icon','img/cross_icon.png');
		this.load.image('pause_icon','img/pause_icon.png');
	    this.load.image('Timer','img/Timer.png');
	    this.load.image('Undo','img/Undo.png');




		// load spritesheets
		
	},
	create: function(){
		// start the MainMenu state
		this.state.start('MainMenu');
	}
};
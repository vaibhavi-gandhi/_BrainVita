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
		this.game.load.atlasJSONHash('spritesheet', 'img/spritesheet.png', 'img/spritesheet.json');
		this.game.load.atlasJSONHash('text', 'img/text.png', 'img/text.json');
		this.load.image('helpscreen', 'img/helpscreen.png');
		this.load.image('leaderBoard', 'img/leaderBoard.png');
		this.load.image('board','img/board.png');
		this.load.image('marble','img/marble.png');
		this.load.image('pausedscreen','img/pausedscreen.png');
		
	},
	create: function(){
		// start the MainMenu state
		this.state.start('MainMenu');
	}
};
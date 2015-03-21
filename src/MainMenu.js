brainVita.MainMenu = function(game){};
brainVita.MainMenu.prototype = {
	create: function(){
		// display images
		this.add.sprite(0, 0, 'Mainmenu');
		// add the button that will start the game
		this.add.button(298, 235, 'startButton', this.GameScreen, this,2,0,1);
		this.add.button(298, 339, 'HelpButton', this.help, this,2,0,1);
		this.add.button(298, 457, 'highscorebutton', this.highscores, this,2,0,1);
	},
	/*startGame: function() {
		// start the Game state
		this.state.start('Game');
	}*/

	help:function(){
		this.state.start('helpscreen');
	},

	highscores:function()
	{
		this.state.start('Display_highscores');
	},
	GameScreen:function(){
		this.state.start('Game');
	},
	
};


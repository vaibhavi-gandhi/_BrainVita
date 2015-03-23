brainVita.MainMenu = function(game){};
brainVita.MainMenu.prototype = {
	create: function(){
		// display images
		this.add.sprite(0, 0,'background');
		this.add.sprite(180,73,'text','mainText');
		// add the button that will start the game
		this.add.button(298, 235, 'spritesheet', this.GameScreen, this,'s1','s0','s2');
		this.add.button(298, 339, 'spritesheet', this.help, this,'h1','h0','h2');
		this.add.button(298, 457, 'spritesheet', this.highscores, this,'hs1','hs0','hs2');
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


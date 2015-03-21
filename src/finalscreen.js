brainVita.finalscreen = function(game){};
brainVita.finalscreen.prototype = {
	create: function(){
		// display images
		this.add.sprite(0, 0, 'finalscreen');
		this.add.text(598,85,brainVita.countMarble);
		// add the button that will start the game
		this.add.button(280, 333, 'tryagain', this.tryagain, this);
		this.add.button(280, 435, 'quit', this.quit, this);
	},
	tryagain: function() {
		// start the Game state
		this.state.start('Game');
	},
	quit: function() {
		// start the Game state
		this.state.start('MainMenu');
	}
};

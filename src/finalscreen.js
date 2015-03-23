brainVita.finalscreen = function(game){};
brainVita.finalscreen.prototype = {
	create: function(){
		// display images
		this.add.sprite(0, 0, 'background');
		this.add.sprite(201, 84,'text', 'finalText');

		this.add.text(598,85,brainVita.countMarble);
		// add the button that will start the game
		this.add.button(280, 333, 'spritesheet', this.tryagain, this,'ta1','ta0','ta2');
		this.add.button(280, 435, 'spritesheet', this.quit, this,'q1','q0','q2');
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

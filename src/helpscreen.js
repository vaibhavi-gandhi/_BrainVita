brainVita.helpscreen = function(game){};
brainVita.helpscreen.prototype = {
	create: function(){
		// display images
		this.add.sprite(0, 0, 'helpscreen');
		// add the button that will start the game
		this.add.button(330, 510, 'spritesheet', this.back, this,'ba2','ba1','ba3');
		
	},
	back: function() {
		// start the Game state
		this.state.start('MainMenu');
	}

	};
brainVita.Display_highscores = function(game){};
brainVita.Display_highscores.prototype = {
	create: function(){
		// display images
		this.add.sprite(0, 0, 'highscore');
		// add the button that will start the game
		this.add.button(330, 510, 'back_btn', this.back, this,'ba2','ba1','ba3');
		
		
	},
	back: function() {
		// start the Game state
		this.state.start('MainMenu');
	}
};
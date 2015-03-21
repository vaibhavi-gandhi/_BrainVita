brainVita.Game = function(game){

};

brainVita.Game.prototype = {
	create: function(){
		this. moves = 0;
	    this.lEdge = 2;
	    this.rEdge = 4;
	    this.board=[];
	    this.marbles=[];
	    brainVita.countMarble=0;
	    this.iPos=0;
	    this.jPos=0;
	    this.mySeconds = 0; 
        this.myMinutes = 0;
        this.undoMove=0;
        this.Seconds=0;
	  
		this.createBoard();
		this.addMarbles();
		this.timerText = this.game.add.text(400, 15, '0:0' + this.mySeconds,this._fontStyle);
        this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);
		

		
	},
	updateCounter: function() {
     this.Seconds++;
     this.myMinutes =Math.floor(this.Seconds/ 60);
     this.mySeconds=this.Seconds%60;
     if (this.mySeconds < 10){
   	    this.timerText.setText( this.myMinutes + ':'+ '0' + this.mySeconds);
     }
     else
    {
   	this.timerText.setText( this.myMinutes + ':' + this.mySeconds);
 	}
},

	createBoard: function(){
		this.add.sprite(0, 0, 'background');
		this.add.sprite(80, 30, 'board');
		this.add.sprite(334, 10, 'Timer');
		this.undoBtn=this.add.button(6, 5, 'Undo', this.undo, this);
		this.add.button(683, 1, 'pause_icon', this.managePause, this);
		this.add.button(736, -1, 'cross_icon', this.close, this);
		//this.undoBtn.inputEnabled=true;
	
		for(i=0; i<7; i++){
				this.board[i] = new Array(7);
				for(j=0; j<7; j++){
					if((i < this.lEdge && j < this.lEdge) || // top-left
						(i > this.rEdge && j < this.lEdge) || // bottom-left
						(i < this.lEdge && j > this.rEdge) || // top-right
						(i > this.rEdge && j > this.rEdge) )
					{
						this.board[i][j]=-1;
					}
					else
					{
						this.board[i][j]=1;
					}
				}
			}
	    this.board[3][3] = 0;
	},

    addMarbles: function(){
		for(i=0; i<7; i++){
			this.marbles[i] = new Array(7);
			for(j=0; j<7; j++){    

				if(this.board[i][j]==1)
				{
				 this.marbles[i][j]=this.add.sprite((80+60)+j*70,(30+50)+i*72,'marble');
	            }
				  
            }
    	
        } 
        this.renderBoard(this.marbles);

        },   

        renderBoard : function(marbles){

			for(i=0; i<7; i++){
			for(j=0; j<7; j++){    
				 if(this.board[i][j]>0 && marbles[i][j].alive)
				 {
				 	marbles[i][j].inputEnabled=false;
				 }
				 }  
            }
        	for(i=0; i<7; i++){
			for(j=0; j<7; j++){    
				 if(this.isEligibleCell(i,j) && marbles[i][j].alive)
				 { 
				 marbles[i][j].iIndex = i;
				 marbles[i][j].jIndex = j;
				 marbles[i][j].xPosition = marbles[i][j].x;
				 marbles[i][j].yPosition = marbles[i][j].y;
				 marbles[i][j].inputEnabled=true;
				 marbles[i][j].input.enableDrag();
				 marbles[i][j].events.onDragStop.add(this.onDragStop,this);
				 }  
            }
    
        } 
       

        },

        onDragStop : function(sprite,pointer) {
        	
             var iIndex = sprite.iIndex;
             var jIndex = sprite.jIndex;
              this.iPos=iIndex;
	          this.jPos=jIndex;
              var update = 0;
            
            
		    if (iIndex+2<=6 && this.board[iIndex+2][jIndex]==0 && 
		    	this.board[iIndex+1][jIndex]==1) {
                                                    var bounds = new Phaser.Rectangle((80+30)+jIndex*70,(25+30)+(iIndex+2)*72,80,80);
                                                     
		    	                                         if (sprite.x>bounds.left && sprite.x<bounds.right &&
		    	                                             sprite.y>bounds.top && sprite.y<bounds.bottom) {
		    	                                            
		    	                                            this.board[iIndex+2][jIndex]=1;
				 	                                        this.board[iIndex+1][jIndex]=0;
				 	                                        this.board[iIndex][jIndex]=0; 
				 	                                        this.marbles[iIndex+1][jIndex].kill();  
				 	                                        this.marbles[iIndex][jIndex].kill();        	
				 	                                    	this.marbles[iIndex+2][jIndex]=this.add.sprite((80+60)+jIndex*70,(50+30)+(iIndex+2)*72,'marble');
				 	                                        update++;
				 	                                        this.undoMove=1;
				 	                                        this.undoBtn.inputEnabled=true;
				 	                                        this.undoBtn.visible=true;
				 	                                      } 
				 	                                     
				 	                                      
				 	                                     }  
				 	                           
		
	 	                                  
		 if (jIndex+2<=6 && this.board[iIndex][jIndex+2]==0 && this.board[iIndex][jIndex+1]==1) {
		    	                                         var bounds = new Phaser.Rectangle((80+60)+(jIndex+2)*70,(25+30)+iIndex*72,80,80);
                                                     
		    	                                         if (sprite.x>bounds.left && sprite.x<bounds.right &&
		    	                                             sprite.y>bounds.top && sprite.y<bounds.bottom) {
		    	                                            
		    	                                         
		    	                                          this.board[iIndex][jIndex+2]=1;
				 	                                      this.board[iIndex][jIndex+1]=0;
				 	                                      this.board[iIndex][jIndex]=0; 
				 	                                      this.marbles[iIndex][jIndex].kill(); 
				 		                                  this.marbles[iIndex][jIndex+1].kill();
				 		                                  this.marbles[iIndex][jIndex+2]=this.add.sprite((80+60)+(jIndex+2)*70,(50+30)+iIndex*72,'marble');
				 	                                      update++;
				 	                                      this.undoMove=2;
				 	                                      this.undoBtn.inputEnabled=true;
				 	                                      this.undoBtn.visible=true;
				 	                                     } 
				 	                                    
				 	                                    }
				 	                                
		 	                                
	     if (iIndex-2>=0 && this.board[iIndex-2][jIndex]==0 && this.board[iIndex-1][jIndex]==1) { 
				                                      var bounds = new Phaser.Rectangle((30+80)+jIndex*70,(25+30)+(iIndex-2)*72,80,80);
                                                     
		    	                                         if (sprite.x>bounds.left && sprite.x<bounds.right &&
		    	                                             sprite.y>bounds.top && sprite.y<bounds.bottom) {
		    	                                            
				                                          this.board[iIndex-2][jIndex]=1;
				 	                                      this.board[iIndex-1][jIndex]=0; 
				 	                                      this.board[iIndex][jIndex]=0; 
				 	                                      this.marbles[iIndex][jIndex].kill();
				 		                                  this.marbles[iIndex-1][jIndex].kill();
				 		                                  this.marbles[iIndex-2][jIndex]=this.add.sprite((60+80)+jIndex*70,(50+30)+(iIndex-2)*72,'marble');
				 	                                     update++;
				 	                                     this.undoMove=3;
				 	                                     this.undoBtn.inputEnabled=true;
				 	                                     this.undoBtn.visible=true;
				 	                                     }

				 	    
				 	                                    }
				 	                                
		
				 	                                
		 if (jIndex-2>=0 && this.board[iIndex][jIndex-2]==0  && this.board[iIndex][jIndex-1]==1) {
				                                    var bounds = new Phaser.Rectangle((80+30)+(jIndex-2)*70,(25+30)+iIndex*72,80,80);
                                                     
		    	                                         if (sprite.x>bounds.left && sprite.x<bounds.right &&
		    	                                             sprite.y>bounds.top && sprite.y<bounds.bottom) {
		    	                                            
				                                          
				                                         this.board[iIndex][jIndex-2]=1; 
				 	                                     this.board[iIndex][jIndex-1]=0;
				 	                                     this.board[iIndex][jIndex]=0; 
				 	                                     this.marbles[iIndex][jIndex].kill(); 
				 		                                 this.marbles[iIndex][jIndex-1].kill();
				 		                                 this.marbles[iIndex][jIndex-2]=this.add.sprite((80+60)+(jIndex-2)*70,(50+30)+iIndex*72,'marble');
				 	                                     update++;
				 	                                     this.undoMove=4;
				 	                                     this.undoBtn.inputEnabled=true;
				 	                                     this.undoBtn.visible=true;
				 	                                     } 
				 	                                    
				 	                                    }
			if (update==0) {
	             	sprite.reset((80+60)+jIndex*70,(50+30)+iIndex*72);
	             	this.undoBtn.inputEnabled=false;
	             	this.undoBtn.visible=false;	 	                           
			} 	                                    
			 	                                
			this.renderBoard(this.marbles);				 
        },



	    	
       isEligibleCell:function(x,y) {
		return this.getAvailableHoles(x,y).length > 0;
		    

		},

	getAvailableHoles:function(x,y){
		 this.holes = [];
			if(this.board[x][y] <= 0)
			{
				return this.holes; }
			 if(this.isCellExists(x, y-2)&& this.board[x][y-2] == 0 && this.board[x][y-1]==1 ) 
			 {
			  this.holes.push({x:x, y: y-2});
            
		
			}
		    if( this.isCellExists(x, y+2) && this.board[x][y+2] == 0 && this.board[x][y+1]==1) 
			{ 
				this.holes.push({x:x, y: y+2});
			
		
	         }
			if( this.isCellExists(x-2, y) && this.board[x-2][y] == 0 && this.board[x-1][y]==1) 
			 {
			 	this.holes.push({x:x-2, y: y});
			
		
		     }   
			 if(this.isCellExists(x+2, y)&& this.board[x+2][y] == 0&& this.board[x+1][y]==1 )
			 { 
			 	this.holes.push({x:x+2, y: y});
			
			 }
            

		return this.holes;

	} ,


		 isCellExists: function(x,y){ 
		 	var val;
		 	if(x<0 || x>6)
		 	{
                return false;
		 		
		 	}
		 	if(y<0 || y>6)
		 	{
		 		return false;
		 		
		 	}
		 	val=this.board[x][y];
		
		 	if(val>=0)
		 	{
		 		return true;
		 		
		 	}
		 	else
		 	{
		 		return false;
		 	}
		 	
			
		},

		isGameOver: function(){
			var i,j;
			for(i=0; i < 7; i++){
				for(j=0; j < 7; j++){
					if(this.board[i][j] == 1 && this.getAvailableHoles(i,j).length > 0){
						return false;
				}
			}
		}
			return true;
		},

		update:function()
		{
			if(this.isGameOver())
			{
			   for(i=0; i < 7; i++){
				for(j=0; j < 7; j++){
					if(this.board[i][j]==1)
					{
						brainVita.countMarble++;
					}
				}
			}
               this.state.start('finalscreen');
			}
		},
           
        undo:function()
        {
        	if(this.undoMove==1)
        	{
        		  this.board[this.iPos+2][this.jPos]=0;
				  this.board[this.iPos+1][this.jPos]=1;
				  this.board[this.iPos][this.jPos]=1;
				  this.marbles[this.iPos+2][this.jPos].kill();
				  this.marbles[this.iPos+1][this.jPos]=this.add.sprite((80+60)+this.jPos*70,(50+30)+(this.iPos+1)*72,'marble');
				  this.marbles[this.iPos][this.jPos]=this.add.sprite((60+80)+this.jPos*70,(50+30)+(this.iPos)*72,'marble');


        	}
        	
        	if(this.undoMove==2)
        	{
        		 this.board[this.iPos][this.jPos+2]=0;
				 this.board[this.iPos][this.jPos+1]=1;
				 this.board[this.iPos][this.jPos]=1; 
				 this.marbles[this.iPos][this.jPos+2].kill();
				 this.marbles[this.iPos][this.jPos+1]=this.add.sprite((60+80)+(this.jPos+1)*70,(50+30)+(this.iPos)*72,'marble');
				 this.marbles[this.iPos][this.jPos]=this.add.sprite((80+60)+this.jPos*70,(50+30)+(this.iPos)*72,'marble');

        	}

        	if(this.undoMove==3)
        	{

			    this.board[this.iPos-2][this.jPos]=0;
				this.board[this.iPos-1][this.jPos]=1; 
	            this.board[this.iPos][this.jPos]=1;
	            this.marbles[this.iPos-2][this.jPos].kill();
				this.marbles[this.iPos-1][this.jPos]=this.add.sprite((60+80)+this.jPos*70,(50+30)+(this.iPos-1)*72,'marble');
				this.marbles[this.iPos][this.jPos]=this.add.sprite((60+80)+this.jPos*70,(50+30)+(this.iPos)*72,'marble');
 
        	}
        	
        	if (this.undoMove==4)
        	{
        		 this.board[this.iPos][this.jPos-2]=0; 
				 this.board[this.iPos][this.jPos-1]=1;
				 this.board[this.iPos][this.jPos]=1;
				 this.marbles[this.iPos][this.jPos-2].kill();
				 this.marbles[this.iPos][this.jPos-1]=this.add.sprite((60+80)+(this.jPos-1)*70,(50+30)+(this.iPos)*72,'marble');
				 this.marbles[this.iPos][this.jPos]=this.add.sprite((60+80)+this.jPos*70,(50+30)+(this.iPos)*72,'marble');
 
        	}
        	this.undoBtn.inputEnabled=false;
        	this.undoBtn.visible=false;
        	this.renderBoard(this.marbles);
        },

        managePause: function(){
        // pause the game
        this.game.paused = true;
        var graphicOverlay = new Phaser.Graphics(this.game, 0 , 0);
        graphicOverlay.beginFill(0x000000, 0.3);
        graphicOverlay.drawRect(0,0, 800, 600);
        graphicOverlay.endFill();
        this.overlay = this.game.add.image(-10,-10,graphicOverlay.generateTexture());
        this.overlay.inputEnabled = true;
        // add proper informational text
        pausedText = this.add.text(this.world.centerX,250, "Game paused.\nTap anywhere to continue.", this._fontStyle1);
        pausedText.anchor.setTo(0.5, 0.5);
        // set event listener for the user's click/tap the screen
        this.input.onDown.add(function(){
            // remove the pause text
            pausedText.destroy();
            // unpause the game
            this.game.paused = false;
            this.overlay.destroy();
        }, this);
    },

    close:function()
    {
    	this.state.start('MainMenu');
    }
        

};

   

    




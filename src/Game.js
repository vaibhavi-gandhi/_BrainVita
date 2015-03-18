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
	
		this.createBoard();
		this.addMarbles();

		
	},

	createBoard: function(){
		this.add.sprite(0, 0, 'background');
		this.add.sprite(0, 0, 'board');
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
				 this.marbles[i][j]=this.add.sprite(60+j*70,50+i*72,'marble');
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
            var update = 0;
            
            
		    if (iIndex+2<=6 && this.board[iIndex+2][jIndex]==0 && 
		    	this.board[iIndex+1][jIndex]==1) {
                                                    var bounds = new Phaser.Rectangle(30+jIndex*70,25+(iIndex+2)*72,80,80);
                                                     
		    	                                         if (sprite.x>bounds.left && sprite.x<bounds.right &&
		    	                                             sprite.y>bounds.top && sprite.y<bounds.bottom) {
		    	                                            
		    	                                            this.board[iIndex+2][jIndex]=1;
				 	                                        this.board[iIndex+1][jIndex]=0;
				 	                                        this.board[iIndex][jIndex]=0; 
				 	                                        this.marbles[iIndex+1][jIndex].kill();  
				 	                                        this.marbles[iIndex][jIndex].kill();        	
				 	                                    	this.marbles[iIndex+2][jIndex]=this.add.sprite(60+jIndex*70,50+(iIndex+2)*72,'marble');
				 	                                        update++;
				 	                                      } 
				 	                                     
				 	                                      
				 	                                     }  
				 	                           
		
	 	                                  
		 if (jIndex+2<=6 && this.board[iIndex][jIndex+2]==0 && this.board[iIndex][jIndex+1]==1) {
		    	                                         var bounds = new Phaser.Rectangle(30+(jIndex+2)*70,25+iIndex*72,80,80);
                                                     
		    	                                         if (sprite.x>bounds.left && sprite.x<bounds.right &&
		    	                                             sprite.y>bounds.top && sprite.y<bounds.bottom) {
		    	                                            
		    	                                         
		    	                                          this.board[iIndex][jIndex+2]=1;
				 	                                      this.board[iIndex][jIndex+1]=0;
				 	                                      this.board[iIndex][jIndex]=0; 
				 	                                      this.marbles[iIndex][jIndex].kill(); 
				 		                                  this.marbles[iIndex][jIndex+1].kill();
				 		                                  this.marbles[iIndex][jIndex+2]=this.add.sprite(60+(jIndex+2)*70,50+iIndex*72,'marble');
				 	                                      update++;
				 	                                     } 
				 	                                    
				 	                                    }
				 	                                
		 	                                
	     if (iIndex-2>=0 && this.board[iIndex-2][jIndex]==0 && this.board[iIndex-1][jIndex]==1) { 
				                                      var bounds = new Phaser.Rectangle(30+jIndex*70,25+(iIndex-2)*72,80,80);
                                                     
		    	                                         if (sprite.x>bounds.left && sprite.x<bounds.right &&
		    	                                             sprite.y>bounds.top && sprite.y<bounds.bottom) {
		    	                                            
				                                          this.board[iIndex-2][jIndex]=1;
				 	                                      this.board[iIndex-1][jIndex]=0; 
				 	                                      this.board[iIndex][jIndex]=0; 
				 	                                      this.marbles[iIndex][jIndex].kill();
				 		                                  this.marbles[iIndex-1][jIndex].kill();
				 		                                  this.marbles[iIndex-2][jIndex]=this.add.sprite(60+jIndex*70,50+(iIndex-2)*72,'marble');
				 	                                     update++;
				 	                                     }

				 	    
				 	                                    }
				 	                                
		
				 	                                
		 if (jIndex-2>=0 && this.board[iIndex][jIndex-2]==0  && this.board[iIndex][jIndex-1]==1) {
				                                    var bounds = new Phaser.Rectangle(30+(jIndex-2)*70,25+iIndex*72,80,80);
                                                     
		    	                                         if (sprite.x>bounds.left && sprite.x<bounds.right &&
		    	                                             sprite.y>bounds.top && sprite.y<bounds.bottom) {
		    	                                            
				                                          
				                                         this.board[iIndex][jIndex-2]=1; 
				 	                                     this.board[iIndex][jIndex-1]=0;
				 	                                     this.board[iIndex][jIndex]=0; 
				 	                                     this.marbles[iIndex][jIndex].kill(); 
				 		                                 this.marbles[iIndex][jIndex-1].kill();
				 		                                 this.marbles[iIndex][jIndex-2]=this.add.sprite(60+(jIndex-2)*70,50+iIndex*72,'marble');
				 	                                     update++;
				 	                                     } 
				 	                                    
				 	                                    }
			if (update==0) {
	             	sprite.reset(60+jIndex*70,50+iIndex*72);	 	                           
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
		}


};

   

    




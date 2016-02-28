module.exports = { 
	vectorize: function(pathCoord)  //pathCoord is an int array
	{
		//Turns array of coordinates into vectors
		//vector takes in direction(down, right etc) and length
		var vectors;
	
		var currDirect = 0;
		var prevDirect = 0;
		for(var i = 0;i < pathCoord.length;i++)
		{
			curr = pathCoord[i];
			prev = pathCoord[i-1];
		
			var ri = currDirect[0];
			var ci = currDirect[1];
			
			var rf = prevDirect[0];
			var cf = prevDirect[1];
			prevDirect = currDict;
			if(rf - ri > 0)
			{
				currDirect = 2;
			} else if(ri - rf){
				currDirect = 0;
			}
	
			if(cf - ci > 0)
			{
				currDirect = 1;
			} else if(ci - cf > 0){
				currDirect = 3;
			}
			if(prevDirect != currDirect)
			{
				vectors.push(currDirect);
			}
		}
		console.log(vectors);
		return vectors;
	
	},
	
	getNext: function(a,b)
	{
		//0: up, 1 right, 3 left, 2 down
		//a: directionFacing
		//b; //desired direction
		if(a === b){
			console.log("forwards")
		} else if(b - a === 2) {
			console.log("backwards");
		} else if((b+1)%4 === a) {
			console.log("left")
		} else if((a+1)%4 === b) {
			console.log("right")
		}
	},
	

	
};

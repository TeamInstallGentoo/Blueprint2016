module.exports = {
	/*goDown: function()
	{
		//It'll go down the next optimal staircase
	},
	*/
	parseRoomNumber: function(roomNums)
	{
		var floors = [0,0,1,0,2,2,2,3,3,4];
		var digit = (''+roomNums)[0];
		return floors[digit];
	},
	getStairRange: function(stairNum)
	{
		if(stairNum === 1 || stairNum === 2 || stairNum ===3)
		{
			return [1,3];
		} else if(stairNum === 4 || stairNum === 5) {
			return [0,3];
		} else if(stairNum === 6 || stairNum ===7 || stairNum ===8) {
			return [2,3];
		} else if(stairNum ===9) {
			return [3,4];
		}
	},
	getPossibleStairs: function(roomNum, direction,goal)
	{
		var floor = this.parseRoomNumber(roomNum);
		var valid = [];
		console.log(floor);
		for(var i = 1; i < 10;i ++)  //go through all stairs
		{
			if(floor >= this.getStairRange(i)[0] && floor <= this.getStairRange(i)[1]) {
				//Works
				valid.push(i);
			}
		}
		console.log(valid);
		return valid;/*
		var mostEfficientStairs = [];
		var distance = 100;
		
		for(var i = 0;i < valid.length;i ++)   //goes through physically possible stairs to find most efficient
		{
			if(direction === 1)
			{
				if(Math.abs((this.getStairRange(valid[i]))[1] -  goal) < distance)
				{
					distance = Math.abs((this.getStairRange(valid[i]))[1] -  goal);
				}
			}
		   	else
		   	{
				if(Math.abs((this.getStairRange(valid[i]))[0] -  goal)< distance)
				{
					distance = Math.abs((this.getStairRange(valid[i]))[0] -  goal);
				}	
			}
		}
		console.log(distance);
		for(var i = 0;i < valid.length;i++)
		{
			console.log("sdf" + Math.abs(this.getStairRange(valid[i])[1] -  goal));
			if(Math.abs((this.getStairRange(valid[i]))[direction] -  goal) === distance)
			{
				mostEfficientStairs.push(valid[i]);
			}
		}
		return mostEfficientStairs;*/
	}/*,
	getClosestStairs: function(roomNum, valid)
	{
		//gives distance to a staircase from a coordinate
		var floor = this.parseRoomNumber(roomNum);
		for(var i = 0;i < valid.length;i++) {
			
		}
	}*/
};

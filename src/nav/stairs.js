// Pathfinder from "./pathfinder.js";

module.exports = {
	go: function(start,end)
	{
		//It'll go down the next optimal staircase
		floor1 = this.parseRoomNumber(start);
		floor2 = this.parseRoomNumber(end);
		if(floor2 > floor1)
			return "Go up " + (floor2 - floor1) + " flights of stairs";
		else if(floor2 < floor1)
			return "Go down " + (floor1 - floor2) + " flights of stairs";
		else
			return "Stay on this floor";
	},
	
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
};

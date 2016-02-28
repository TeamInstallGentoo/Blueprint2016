var Stairs = require("./stairs.js");
var Pathfinder = require("./pathfinder.js");

module.exports = {
	getGoodStair: function(roomNum, roomFloor,direction) {
		var ok = getPossibleStairs(roomNum,0,1)
		var minimum = 100;
		var goodStair;
		for(var i = 0;i < ok.length;i++)
		{
			if(Pathfinder(7, roomNum, "s"+ok[i]) < minimum) {
				minimum = Pathfinder(7, roomNum, "s"+ok[i]);
				goodStair = ok[i];
			}
		}
		return goodStair;
	}
}

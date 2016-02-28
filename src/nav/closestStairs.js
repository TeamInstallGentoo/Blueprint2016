var Pathfinder = require("./pathfinder.js");
module.exports = {
	getGoodStair: function(floor, origin) {
		var closest = 10000;
		closestName = "";
		var stairs = [];
		floor.map((row, r) => {
			row.map((col, c) => {
				if(col.match(/s(.*)/)) stairs.push(col);
			});
		});
		stairs.forEach((stair) => {
			var path = Pathfinder(floor, origin, stair);
			if(path.length < closest) {
				closest = path.length;
				closestName = stair;
			}
		});
		return closestName;
	}
};

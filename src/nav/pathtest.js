var floor = require("../floor3.js");
var PF = require("pathfinding");

var coords = [0, 0];
var coords2 = [0, 0];

floor.map((row, r) => {
	row.map((col, c) => {
		if(col == "616") coords = [c, r];
	});
});

floor.map((row, r) => {
	row.map((col, c) => {
		if(col == "nurse") coords2 = [c, r];
	});
});

var grid = new PF.Grid(floor);
floor.forEach((row, r) => {
	row.forEach((col, c) => {
		if (col != 1) grid.setWalkableAt(c, r, true);
		else grid.setWalkableAt(c, r, false);
	});
});
var finder = new PF.AStarFinder();
var path = finder.findPath(coords[0], coords[1], coords2[0], coords2[1], grid);
console.log(path);

var PF = require("pathfinding");

export default function(floor, start, dest) {
	var coords = [0, 0, 0, 0];
	floor.map((row, r) => {
		row.map((col, c) => {
			if(col == start) coords = [c, r];
		});
	});

	floor.map((row, r) => {
		row.map((col, c) => {
			if(col == dest) coords = coords.concat([c, r]);
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
	var path = finder.findPath(coords[0], coords[1], coords[2], coords[3], grid);
	return path;
}

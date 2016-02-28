module.exports = {
	vectorize: function (pathCoord) { //pathCoord is an int array
			//Turns array of coordinates into vectors
			//vector takes in direction(down, right etc) and length
		var vectors = [];
		var coords = [];
		var currDirect = -1;
		var prevDirect = -1;
		var curr = [0, 0];
		var prev = [0, 0];
		for (var i = 0; i < pathCoord.length - 1; i++) {
			curr = pathCoord[i + 1];
			prev = pathCoord[i];
			var ri = prev[0];
			var ci = prev[1];

			var rf = curr[0];
			var cf = curr[1];
			prevDirect = currDirect;
			if (rf - ri > 0) {
				currDirect = 2;
			} else if (ri - rf) {
				currDirect = 0;
			}

			if (cf - ci > 0) {
				currDirect = 1;
			} else if (ci - cf > 0) {
				currDirect = 3;
			}
			if (prevDirect != currDirect) {
				coords.push(pathCoord[i]);
				vectors.push(currDirect);
			}
		}
		coords.push(pathCoord[pathCoord.length - 1]);
		return {vectors: vectors, coords: coords};

	},

	getSteps: function (a, b) {
		//0: up, 1 right, 3 left, 2 down
		//a: directionFacing
		//b; //desired direction
		if (a === b) {
			return "forwards";
		} else if (b - a === 2) {
			return "backwards";
		} else if ((b + 1) % 4 === a) {
			return "left";
		} else if ((a + 1) % 4 === b) {
			return "right";
		}
	},

	getDirections: function (vector) {
		console.log(vector.length);
		var facing = 0;
		var goal;
		var arr = [];
		for (var i = 0; i < vector.length; i++) {
			goal = vector[i];
			arr.push(this.getSteps(facing, goal));
			facing = goal;
		}
		return arr;
	}
};

var Navigation = require("./directions.js");
var pathCoord = [[0,0],[1,0],[2,0],[2,1],[2,2],[2,3]];
console.log(Navigation.vectorize(pathCoord));
Navigation.getDirections(Navigation.vectorize(pathCoord));

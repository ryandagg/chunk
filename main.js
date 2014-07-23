var chunkIt = function(array, divisor) {
	var chunkArray = [];
	var maxChunkLength = Math.ceil(array.length / divisor);
	var remainder = array.length % divisor;
	var offset = 0;
	// Check if array length is evenly divisible by 'divisor' and sets flag to manage remainder conditional in for loop.
	var even = remainder === 0;

	for(var ii = 0; ii < array.length; ii++) {
		// "remainder" is decremented each loop so that the first arrays get the extra numbers. For array lengths not evenly divisible, sets 'offset' to -1 aftwards so that each subsequent array get the appropriate numbers afterwards.
		if(remainder > 0) {
			remainder--;
		}
		else if(!even) {
			offset = -1;
		}
		chunkArray.push(array.slice(ii, ii + maxChunkLength + offset));
		// increases iterator by amount of splice above so that the same element doesn't get used more than once.
		ii += maxChunkLength + offset - 1;
	}
	return chunkArray
}

console.log("test1: ", chunkIt([1,2,3,4,5,6,7,8,9,10], 2)) // should return [ [1,2,3,4,5], [6,7,8,9,10] ]
console.log("test2: ", chunkIt(_.range(15), 3)) // should return [ [1,2,3,4,5], [6,7,8,9,10], [11,12,13,14,15] ]
console.log("test3: ", chunkIt([1,2,3,4,5,6,7,8,9,10], 3)) // should return [ [1,2,3,4], [5,6,7], [8,9,10] ]
console.log("test4: ", chunkIt([1,2,3,4,5,6,7,8,9,10], 7)) // should return [ [1,2], [3,4], [5,6], [7], [8], [9], [10] ]
console.log("test5: ", chunkIt(_.range(17), 3)) 




$(document).on('ready', function() {

});
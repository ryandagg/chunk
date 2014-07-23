var chunkIt = function(array, divisor) {
	var chunkArray = [];
	var chunkLength = Math.ceil(array.length / divisor);
	var remainder = array.length % divisor;
	// Check if array length is evenly divisible by 'divisor' and sets flag to manage remainder conditional in for loop.
	var isEven = remainder === 0;

	for(var ii = 0; ii < array.length; ii += chunkLength) {
		// "remainder" is decremented each loop so that the first arrays get the extra numbers. For array lengths not evenly divisible, decrements 'chunkLength' by 1 aftwards so that each subsequent array gets the appropriate numbers afterwards.
		if(remainder > 0) {
			remainder--;
		}
		else if(!isEven) {
			chunkLength -= 1;
			isEven = true;
		}
		chunkArray.push(array.slice(ii, ii + chunkLength));
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
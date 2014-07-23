var chunkIt = function(array, divisor) {
	var chunkArray = [];
	var howManyChunks = Math.ceil(array.length / divisor);
	var remainder = array.length % divisor
	var offset1 = 0;
	if(remainder === 0) {
		offset2 = 1;
	}
	else {
		offset2 = 0;
	}
	for(var ii = 0; ii < array.length; ii++) {
		if(remainder > 0) {
			remainder--;
		}
		else {
			offset1 = -1;
		}
		chunkArray.push(array.slice(ii, ii + howManyChunks + offset1 + offset2));
		ii += howManyChunks + offset1 - 1 + offset2;
		
	}
	return chunkArray
}

console.log("test1: ", chunkIt([1,2,3,4,5,6,7,8,9,10], 2)) // should return [ [1,2,3,4,5], [6,7,8,9,10] ]
console.log("test2: ", chunkIt([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 3)) // should return [ [1,2,3,4], [5,6,7], [8,9,10] ]
console.log("test3: ", chunkIt([1,2,3,4,5,6,7,8,9,10], 3)) // should return [ [1,2,3,4], [5,6,7], [8,9,10] ]
console.log("test4: ", chunkIt([1,2,3,4,5,6,7,8,9,10], 7)) // should return [ [1,2], [3,4], [5,6], [7], [8], [9], [10] ]




$(document).on('ready', function() {

});

// var chunkIt = function(array, divisor) {
// 	var chunkArray = [];
// 	var howManyChunks = Math.ceil(array.length / divisor);
// 	var remainder = array.length % divisor
// 	var offset1 = 0;
// 	var offset2;
// 	if(remainder === 0) {
// 		offset2 = 1;
// 	}
// 	else {
// 		offset2 = 0;
// 	}
// 	for(var ii = 0; ii < array.length; ii++) {
// 		if(remainder > 0 && ii > 0) {
// 			remainder--;
// 		}
// 		else {
// 			offset1 = -1;
// 		}
// 		chunkArray.push(array.slice(ii, ii + howManyChunks + offset1 + offset2));
// 		ii += howManyChunks + offset1 + offset2;
		
// 	}
// 	return chunkArray
// }

// console.log("test1: ", chunkIt([1,2,3,4,5,6,7,8,9,10], 2)) // should return [ [1,2,3,4,5], [6,7,8,9,10] ]
// console.log("test2: ", chunkIt([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 3)) // should return [ [1,2,3,4], [5,6,7], [8,9,10] ]
// console.log("test3: ", chunkIt([1,2,3,4,5,6,7,8,9,10], 3)) // should return [ [1,2,3,4], [5,6,7], [8,9,10] ]
// console.log("test4: ", chunkIt([1,2,3,4,5,6,7,8,9,10], 7)) // should return [ [1,2], [3,4], [5,6], [7], [8], [9], [10] ]




// $(document).on('ready', function() {

// });
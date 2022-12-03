function matrixMultiply(matrix, vector) {
	var result = [];
	for (var i = 0; i < matrix[0].length; i++) {
		var sum = 0;
		for (var j = 0; j < vector.length; j++) {
			sum += matrix[j][i] * vector[j];
		}
		result.push(sum);
	}
	return result;
}

function transform(arr, arr2) {
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		result.push(dot(arr, arr2));
	}
	return result;
}

function checkLinearTransform(scalar, arr) {
	scale(scalar, arr) == addTo(scalar, arr);
}

function add(arr, arr2) {
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		result.push(arr[i] + arr2[i]);
	}
	return result;
}

function addTo(scalar, arr) {
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		result.push(arr[i] + scalar);
	}
	return result;
}

function axpy(scalar, arr, arr2) {
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		result.push(scalar * arr[i] + arr2[i]);
	}
	return result;
}

function angle(arr, arr2) {
	return Math.acos(dot(arr, arr2) / (length(arr) * length(arr2)));
}

function dot(arr, arr2) {
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i] * arr2[i];
	}
	return sum;
}

function rotate(arr, angle) {
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		let num = arr[i] * Math.cos(angle) - arr[(i + 1) % arr.length] * Math.sin(angle);
		result.push(parseInt(num.toFixed(5)));
	}
	return result;
}

function length(arr) {
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i] * arr[i];
	}
	return Math.sqrt(sum);
}

function length2(arr) {
	return Math.sqrt(dot(arr, arr));
}

function scale(scalar, arr) {
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		result.push(arr[i] * scalar);
	}
	return result;
}

function pushVector(scalar, arr) {
	return [scalar].concat(arr);
}

function norm(arr) {
	return scale(arr, 1 / length(arr));
}

function checkOrthogonal(arr, arr2) {
	return dot(arr, arr2) == 0;
}

// console.log(dot([1, 2, 3], [4, 5, 6]));
// console.log(length([1, 2, 3]));
// console.log(length2([1, 2, 3]));
// console.log(scale([1, 2, 3], 5));
// console.log(checkOrthogonal([1, 2, 3], [4, 5, 6]));
// console.log(norm([1, 2, 3, 99, 23]), "norm");
// console.log(pushVector(5, [1, 2, 3]));
// console.log(add([1, 2, 3], [4, 5, 6]));
// console.log(axpy(5, [1, 2, 3], [4, 5, 6]));
// console.log(angle([2, 1, 2, 3], [2, 4, 5, 6]), "angle");
// console.log(rotate([0, 0, 1], Math.PI));

// console.log( matrixMultiply([[-1, -3, -2], [0, 1, -1], [2, -1, 2]], [1, 0, 0]), "mult");
console.log(matrixMultiply([scale(-2, [2, 1, -2]), scale(-2, [-1, 0, 3])], [0, 1]), 'mult');

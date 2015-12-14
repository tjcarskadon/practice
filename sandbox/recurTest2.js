//Notes:
//need to refactor this to be more efficent.  I think I can create functions that are potentially recursive based on typeof

var results = [];

function logMe(obj) {

	//take in an object, remove the first value.  Check that value for type
	//if it is not a string then make it a string and push the stringified 
	//version to the results array.  
	//Then call the function again on the Object without the last value
	//when the length of the string is 0 then log the resutls.

	var l = obj.length, //this will only work if it is a string or an array - Will i need an edge case here for if this is false or null?
		curVal = obj.shift(); //to hold the results before it get's logged to the console
		// console.log("l is = " + l);
		// console.log("curVal = " + curVal);
	
	//base case
	if (l === 0) {

		console.log(results);
		results = [];
		return;
	}
function objectHandler(curObj) {

	for (var key in curObj) {
		var thisValue = curObj[key];

		if(typeof thisValue === 'object') {
			results.push(key.toString());
			if(Array.isArray(thisValue)) {
				arrayHandler(thisValue);
			} else {
				results.push(key.toString());
				//call this function again on the current object
				objectHandler(thisValue);
			}
		} else if (typeof thisValue !== 'function' || typeof thisValue !== 'undefined') {
			// console.log(typeof thisValue);
			return;
		} else {
			//we have a key value pair so push that to the array.
			results.push(key.toString());
			results.push(thisValue.toString());
		}
	}
}

//take in an array and iterate it pushing the results to results
function arrayHandler(arr) {

	arr.forEach(function(v) {
		if(typeof v === 'object') {
			objectHandler(v);
		} else {
			results.push(v.toString());
		}
	});


}

	if (Array.isArray(curVal)) {

		arrayHandler(curVal);
		logMe(obj);

	} else if (typeof curVal === 'object') {

		//it is an object and maybe JSON data iterate over it and log each value 
		//it might be null so we should check that first

		if(curVal === null){

			results.push('null');
			logMe(obj);

		} else {

			objectHandler(curVal);
			logMe(obj);
		}
		

	} else {

		results.push(curVal.toString());
		logMe(obj);
	}


}

var simpleObj = [
	9,
	null,
	true,
	false,
	"Hello world", [],
	[8],
	["hi"],
	[8, "hi"],
	[1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
	[8, [
		[], 3, 4
	]],
	{"a": "apple"},
	{"foo": true, "bar": false, "baz": null},
  {"boolean, true": true, "boolean, false": false, "null": null },
   // basic nesting
  {"a":{"b":"c"}},
  {"a":["b", "c"]},
  [{"a":"b"}, {"c":"d"}],
  {"a":[],"c": {}, "b": true}
];

unstringifiableValues = [
  {
    'functions': function(){},
    'undefined': undefined
  }
];

logMe(simpleObj);
logMe(unstringifiableValues);

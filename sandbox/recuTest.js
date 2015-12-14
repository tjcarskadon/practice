//completed but untested in the specRunner need to refactor for efficency,
//not sure if I am handling the unstrifiable obj correctly 

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
		return;
	}


	if (Array.isArray(curVal)) {

		//the obj is an array so iterate over it and log each element obj

		curVal.forEach(function(v) {

				if(typeof v === 'object') {
					for(var z in v) {
						results.push(z.toString());
						v[z] !== null ? results.push(v[z].toString()) : results.push('null');
					}
				} else {
					results.push(v.toString());
				}
			});

		logMe(obj);

	} else if (typeof curVal === 'object') {

		//it is an object and maybe JSON data iterate over it and log each value 
		//it might be null so we should check that first

		if(curVal === null){

			results.push('null');
			logMe(obj);

		} else {

			for (var k in curVal){

				if(typeof curVal[k] === 'function' || typeof curVal[k] === 'undefined') {
					return;
				} else {
					results.push(k.toString());
	
					if(typeof curVal[k] === 'object'){
						for (var x in curVal[k]) {
	
							if(Array.isArray(curVal[k])) {
								curVal[k][x] !== null ? results.push(curVal[k][x].toString()) : results.push('null');
							} else {
								results.push(x.toString());
								if(typeof curVal[k][x] === 'object') {
	
									var thisVal = curVal[k][x];
									for (var y in thisVal) {
	
										results.push(y.toString());
										thisVal !== null ? results.push(thisVal.toString()) : results.push('null');
									}
								} else {
									curVal[k][x] !== null ? results.push(curVal[k][x].toString()) : results.push('null');
								}
							}
						}
					} else {
						// results.push(k.toString());
						curVal[k] !== null ? results.push(curVal[k].toString()) : results.push('null');
					}
				}
			}
			logMe(obj);
		}
		

	} else {

		results.push(curVal.toString());
		// console.log(obj);
		logMe(obj);
		//we know it is either a string,a number, a boolean, undefined, a symbol or a function
		//for now let's log that to the console and see what happens.
	}


}

//need to refactor the clasification to a function so that it can be called on the values
//This function needs to take in a value, check it for type, then return that value 
//if it is not null, a function, or undefined.  

function typeCheck(someVal) {

	switch (typeof someVal) {

		case 'null':
			return "null";
			break;
		case 'function':
			//figure out what to return later for now just a string
			return 'function';
			break;
		case 'undefined':
			return 'undefined';
			break;
		default:
			return 'other';
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

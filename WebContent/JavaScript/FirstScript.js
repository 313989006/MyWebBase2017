/**
 * 
 */
function bp() {
	alert("这是一个测试的");
}
function forIn(){
	var args = forIn.arguments.length;
	console.info(args + "args");
	
	var array=["AA",22,"BB",44,55,"CC",36.5];
	for ( var temp in array) {
		console.info(temp + "---" + array[temp]);
	}
}
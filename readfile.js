var fs = require('fs'),
	filename = './textFile.txt';



module.exports = function() {

	var filedata,len = 0;
	var lineCount = 0;
	var stream = fs.createReadStream(filename, { encoding: 'utf8',});
	stream.on('data',function(chunk){

			 var linesArray = chunk.split("\n");
			 lineCount += linesArray.length;
		
	});

	stream.once('end',function(){

		console.log(lineCount);

	});
 
}
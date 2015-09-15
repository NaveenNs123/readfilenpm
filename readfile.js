var fs = require('fs'),
var os = require('os');

var EOL = os.EOL;
filename = './textFile.txt';

module.exports = function readfilenpm() {

	if ( !fs.existsSync( path ) ) {
        throw new Error("no such file or directory '" + path + "'");
    }


	var filedata,len = 0;
	var lineCount = 0;
	var stream = fs.createReadStream(filename, { encoding: 'utf8',});
	stream.on('data',function(chunk){

			 var linesArray = chunk.split("\n");
			 lineCount += linesArray.length;
		
	});

	stream.once('end',function(){

		console.log("the lines in the file is "+lineCount);

	});
 
}
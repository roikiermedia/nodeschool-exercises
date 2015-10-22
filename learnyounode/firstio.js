var fs = require("fs");

function getPath () {
  var path;

  path = process.argv[2];
  return path;
}

function fileToString (path) {
  var buffer;
  var string;

  buffer = fs.readFileSync(path);
  string = buffer.toString();

  //console.log(string);

  return string;
}

var fileString;
var path = getPath();
var fileArray;

fileString = fileToString(path);
fileArray = fileString.split("\n");

//console.log(fileArray);
console.log(fileArray.length - 1);

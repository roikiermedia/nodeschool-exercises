var fs = require("fs");

var newLines;
var errorMessage = "Something, somewhere went wrong!";

function countNewLines (callback) {
  var path;
  path = process.argv[2];

  fs.readFile(path, "utf8", function(err, data) {
    if (err) {console.error(errorMessage);}

    var file = data;
    var fileArray = file.split("\n");

    newLines = (fileArray.length - 1);
    callback();
  });
}

function printNewLines () {
  console.log(newLines);
}

countNewLines(printNewLines);

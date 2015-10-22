var fs = require("fs");

var errorMessage = "Something, somewhere went wrong!";
var path = process.argv[2];
var extension = process.argv[3];
var list;


function filterDir(callback) {
  fs.readdir(path, function(err, files) {
    if (err) { console.log(errorMessage); }

    var filesArr = files;
    var filesArrFiltered = filesArr.filter(containsExtension);

    list = filesArrFiltered;
    callback();
  });

  function containsExtension(element, index, array) {
    //.filter uses callback function for filtering, falsy values are removed
    if (element.indexOf("." + extension) == -1) { return false; }
    else { return true; }
  }
}

function printList() {
  list.forEach(printArray);

  function printArray(element, index, array) {
    console.log(element);
  }
}

filterDir(printList);

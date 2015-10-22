var filterdir = require("./filterdir.js");

var path = process.argv[2];
var extension = process.argv[3];

function printList(err, data) {
  if (err) { console.log("Something, somewhere went wrong!"); }
  data.forEach(printArray);

  function printArray(element, index, array) {
    console.log(element);
  }
}

filterdir(path, extension, printList);

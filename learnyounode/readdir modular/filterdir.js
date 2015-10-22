var fs = require("fs");

module.exports = function (dir, ext, callback) {
  fs.readdir(dir, function(err, files) {
    if (err) { return callback(err); } //early return if io error

    var data = files.filter(containsExtension); //filter array for extension

    callback(null, data);
  });

  function containsExtension(element, index, array) {
    //.filter uses callback function for filtering, falsy values are removed
    if (element.indexOf("." + ext) == -1) { return false; }
    else { return true; }
  }
};

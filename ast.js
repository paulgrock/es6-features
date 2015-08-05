var babel = require("babel");
var util = require('util');

babel.transformFile("./public/js/module.js", function (err, result) {
  if (err) console.error(err);
  console.log(util.inspect(result, {
    depth: null
  }));
  return result; // => { code, map, ast }
});

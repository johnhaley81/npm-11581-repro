var cp = require("child_process");

module.exports = function prepareForBuild() {
  return new Promise(function(resolve, reject) {
    console.log('Running "npm install --ignore-scripts"');

    cp.exec("npm install --ignore-scripts", function(err, stdout, stderr) {
      if (err) {
        console.error(stderr);
        reject(err, stderr);
      }
      else {
        resolve();
        console.info(stdout);
      }
    });
  });
};

// Called on the command line
if (require.main === module) {
  module.exports();
}

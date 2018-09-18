module.exports = function(file) {
  const fs = require('fs');
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(data);
      process.stdout.write('\nprompt>');
    }
  });
};

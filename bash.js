process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  let cmd = data.toString().trim();
  const pwd = require('./pwd.js');
  const ls = require('./ls.js');
  const fs = require('fs');

  if (cmd === 'pwd') {
    pwd();
  }
  if (cmd === 'ls') {
    ls();
  }
  // if (cmd === 'pwd') {
  //   process.stdout.write(process.cwd());
  // } else {
  //   process.stdout.write('You typed: ' + cmd);
  // }

  // process.stdout.write('\nprompt > ');
});

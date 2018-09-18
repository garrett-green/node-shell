process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  let cmd = data.toString().trim();
  const pwd = require('./pwd.js');
  const ls = require('./ls.js');
  const cat = require('./cat.js');

  if(cmd.startsWith('cat')) {
    cmd = cmd.slice(4);
    cat(cmd);

  }

  if (cmd === 'pwd') {
    pwd();
  }
  if (cmd === 'ls') {
    ls();
  }

});

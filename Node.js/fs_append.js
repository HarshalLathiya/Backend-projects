const fs = require('fs');
fs.appendFile('nj.txt', '\nAdding more text...', (err) => {
  if (err) throw err;
  console.log('Content added!');
});

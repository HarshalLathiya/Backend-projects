const fs = require('fs');
fs.writeFile('nj.txt', 'Hello from Node!', (err) => {
  if (err) throw err;
  console.log('File written successfully!');
});

const path = require('path');

console.log(__dirname);                    // Current directory
console.log(__filename);                   // Current file path
console.log(path.basename(__filename));    // file.js
console.log(path.join(__dirname, 'Harshal')); // Combine paths

const express = require('express');
const app = express();

// Define a simple route

// app.get('/search', (req, res) => {
//   const name = req.query.name;
//   const breed = req.query.breed;
//   res.send(`Search result for ${name} (${breed})`);
// });

// app.get('/user/:id', (req, res) => {
//   const userId = req.params.id;
//   res.send(`Harshal ID is ${userId}`);
// });

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});


  
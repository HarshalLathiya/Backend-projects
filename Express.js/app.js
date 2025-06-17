const express = require('express');
const app = express();
const users = require('./users');

app.use(express.json()); // to parse JSON request bodies

const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './../public')));

app.use(cors({
  origin: true,
  credentials: true,
}));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
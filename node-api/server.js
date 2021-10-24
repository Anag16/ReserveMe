const PORT = 3003;

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

//middleware 
app.use(morgan('dev'));
// app.use(cors()) - to use for later

app.listen(PORT, console.log(`Server is listening on port ${PORT}`));
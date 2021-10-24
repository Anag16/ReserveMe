const PORT = 3003;

const express = require('express');
const morgan = require('morgan');

const app = express();

app.listen(PORT, console.log(`Server is listening on port ${PORT}`));
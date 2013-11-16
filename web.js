var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(path.join(process.cwd(), 'source')));
console.log(process.env.PORT || 5000);
app.listen(process.env.PORT || 5000);
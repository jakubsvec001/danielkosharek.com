var express = require('express');
var PORT = 3000;
var app = express();
app.use(express.static('public'));
app.listen(PORT, function () {
    console.log("Listening on port " + PORT);
});

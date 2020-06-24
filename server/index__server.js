const express = require('express');
const path = require('path');
const PORT = 4000;
const app = express();


const indexPath = path.resolve(__dirname, '../public/index.html');
console.log(indexPath)

app.use(express.static('./public'));

app.get('/*', (req, res) => {
  res.sendFile(indexPath, (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});


app.listen(PORT, function () {
  console.log('Listening on port ' + PORT);
});

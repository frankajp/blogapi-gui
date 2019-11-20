
const express = require('express');
// const favicon = require('express-favicon');
const path = require('path');
const app = express();
const port = 3000

app.use(express.static(__dirname+'/public/'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname+'/public/', 'index.html'));
});
console.log('Server started on port 3000');
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
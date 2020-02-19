const express = require("express");
const app = express();
// const axios
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.set('port', PORT);
app.set('env', NODE_ENV);

app.get('/api/v1/articles', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Success!'
  });
});

app.listen(PORT, () => {
  console.log(`Express Server started on Port ${app.get('port')} | Environment: ${app.get('env')}`);
});
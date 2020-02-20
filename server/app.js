const Feed = require('rss-to-json');
const express = require("express");
const app = express();
const PORT = process.env.PORT || 6006;
const NODE_ENV = process.env.NODE_ENV || 'development';
const endpoint = "https://medium.com/feed/@itspaulolimahimself";

app.set('port', PORT);
app.set('env', NODE_ENV);

app.get('/api/v1/articles', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  Feed.load(endpoint, (error, rss) => {
    return error ? 
      res.status(404).send({
        success: 'false',
        message: 'Error!',
        error
      })
    :
      res.status(200).send({
        success: 'true',
        message: 'Success!',
        articles: rss
      });
});
});

app.listen(PORT, () => {
  console.log(`Express Server started on Port ${app.get('port')} | Environment: ${app.get('env')}`);
});
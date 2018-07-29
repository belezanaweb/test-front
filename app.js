const express = require('express'),
      app     = express(),
      request = require('request');

app.set('views'      , __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  request({url: 'http://www.mocky.io/v2/5b15c4923100004a006f3c07', json: true}
  , function(err, response, body){
    res.render('index', {data: body});
  })
});

app.listen(3000);
      
// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
var exphbs  = require('express-handlebars');

const app = express();
app.engine('html', exphbs({
  extname: '.html'
}));
app.set('view engine', 'html');
 
app.get('/', function (req, res) {
    res.render('home', {
      title: "Home"
    });
});


// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

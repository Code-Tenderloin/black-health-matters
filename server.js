// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
var exphbs  = require('express-handlebars');

const app = express();
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('public'))

app.get('/', function (req, res) {
    res.render('home', {
      title: "Home"
    });
});

app.get('/:title', function (req, res) {
    const { title } = req.params
    console.log({title})
    res.render(title, {
      title
    });
})

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

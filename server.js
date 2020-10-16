// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
var exphbs  = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
if (process.env !== 'production') app.disable('view cache')

app.use(express.static('public'))

app.get('/', function (req, res) {
    res.render('home', {
      title: "home",
      displayTitle: 'Home',
      slug: 'Over the course of the academic year, The Spokesman will report on the disparities in healthcare for the Black community from Maryland’s largest HBCU. The series will explore medical racism, the contentious relationship between the Black community and hospitals, how COVID-19 has exacerbated Black health issues, and the barriers between Black students and medical school.',
      thumbnailUrl: 'https://cdn.glitch.com/03f006d0-e079-4e82-9710-e203769a31d8%2Fad-2.jpggit statu'
    });
});

app.get('/:title.html', function (req, res) {
    const { title } = req.params
    let meta = {}
    try {
      meta = require(`./views/${title}.meta.json`)
    } catch (e) {
      console.log(`could not find ./views/${title}.meta.json`)
    }
    
    const titleCapitalized = title.charAt(0).toUpperCase() + title.slice(1)
    const displayTitle = titleCapitalized.replace(/\_/g, ' ')
    
    const {slug, thumbnailUrl} = meta
    
    console.log({title, displayTitle, slug, thumbnailUrl})
  
    res.render(title, {
      title,
      displayTitle,
      slug,
      thumbnailUrl,
      layout: 'article.handlebars'
    });
})

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

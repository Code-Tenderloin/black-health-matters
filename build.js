const mkdirp = require("mkdirp");
const fs = require("fs-extra");
const hb = require("handlebars");

console.log("creating dist directory");
mkdirp(__dirname + "/dist");

console.log("copying public files");
fs.copy(__dirname + "/public/", __dirname + "/dist");

const readTemplate = (path) => fs.readFileSync(__dirname + path).toString();
const createCompiler = (templateString) => hb.compile(templateString);
const registerPartial = (name, path) =>
  hb.registerPartial(name, readTemplate(path));

registerPartial("cards", "/views/partials/cards.handlebars");
registerPartial("footer", "/views/partials/footer.handlebars");
registerPartial("header", "/views/partials/header.handlebars");
registerPartial(
  "social-meta-tags",
  "/views/partials/social-meta-tags.handlebars"
);

const main = createCompiler(readTemplate("/views/layouts/main.handlebars"));
const article = createCompiler(
  readTemplate("/views/layouts/article.handlebars")
);

fs.writeFileSync(
  __dirname + "/dist/index.html",
  main(
    {
      isHome: true,
      title: "home",
      displayTitle: "Home",
      slug:
        "Over the course of the academic year, The Spokesman will report on the disparities in healthcare for the Black community from Maryland’s largest HBCU. The series will explore medical racism, the contentious relationship between the Black community and hospitals, how COVID-19 has exacerbated Black health issues, and the barriers between Black students and medical school.",
      thumbnailUrl:
        "https://cdn.glitch.com/03f006d0-e079-4e82-9710-e203769a31d8%2Fad-2.jpg",
    },
    function (err) {
      return console.log(err);
    }
  )
);

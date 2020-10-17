# handlebars-express

A server that serves a handlebars based editorial website to present articles and pages

## Project Overview

- Edit `views/{file}.handlebars` to change the content of a page, it will become `/file.html` on the server (see how `example.handlebars` is rendered to `/example.html`)
- Edit `views/{file}.meta.json` to control social media link previews for a page
  - preview twitter share at https://cards-dev.twitter.com/validator
  - preview facebook share at https://developers.facebook.com/tools/debug/
- Edit `views/layouts/{file}.handlebars` to change the page wrapper for types of pages
- Edit `views/partial/{file}.handlebars` to edit a partial included with `{{> file}}` in a handlebars template
- `public/main.js` is the javacript that runs when you load the home webpage
- `public/style.css` is the styles for every page
- `public/article.css` is only included on article pages
- Drag in `assets`, like images or music, to add them to your project

On the back-end,

- your app starts at `server.js`
- add frameworks and packages in `package.json`
- safely store app secrets in `.env` (nobody can see this but you and people you invite)

Set the environment variable `NODE_ENV` to `production` to turn on caching.

Click `Show` in the header to see your app live. Updates to your code will instantly deploy.

## Made on [Glitch](https://glitch.com/) by volunteers from the Code Tenderloin OFA Class of 2020

> you can [remix this project on Glitch](https://glitch.com/edit/#!/black-health)

**Glitch** is the friendly community where you'll build the app of your dreams. Glitch lets you instantly create, remix, edit, and host an app, bot or site, and you can invite collaborators or helpers to simultaneously edit code with you.

Find out more [about Glitch](https://glitch.com/about).

( ᵔ ᴥ ᵔ )

## Project Notepad

- Poynter Institute Partnership Project
- Focus on Black Health and Medical System During COVID-19
- Landing Page on Wordpress Site
- Published Site: https://bhm.themsuspokesman.com/

- Content updated throughout the year, 6 Stories, Last story in April
- Scrolling interactive like 1619 from nytimes (should it link to individual articles from a home page “map?”)
- Continuous reading mode like Medium?
- Launch Early Next Month (October 16th)
- Introductory essay and student portraits at first launch
- Editorial team meets Thursday at 11am (EST)
- Keep color schemes from current site for consistency
- There must be a link to the podcast
- There must be ability to share
- Drop down menu with link to podcast, about (authors, stories), 6 stories
- Menu to share current story

### TODO:

> If Alice is online and working on this, [she'll probably have the google meet open](https://meet.google.com/htg-jctz-btn)

#### High Priority

- [ ] Add Clarification (Alice)

#### Before Second Story

- [ ] menu to share current story
- [ ] Hide cards on their own pages (Alice)
- [ ] Give Card background the solid blue color
- [ ] add h2 to top of the card that reads: “Other Black Health Matters Stories”

#### Low Priority

- validate responsive design
  - [ ] Enlarge Spokesman logo on home page? For mobile only?
  - [ ] Inspect article header columns and make a container > row to hold the image and captions?
- [ ] Add balloons that are toggled by clicking an element
- [ ] link to the podcast

### Needed from Editorial:

- [x] notes on picture placement with caption and credits
- [x] brief site description Program Overview

### DONE

- [x] The Spokesman color is a bit off compared to the bodyAdd the first story to the card in the home page
- [x] Fill in the Card 1 With first Del story example
- [x] Link card 1 to the example Del story
- [x] Link home page story/slug section to example Del story
- [x] add section for “first story” to home page
- [x] Change contact page name to “Meet the Staff”
- [x] Fill in the project description section with text from jamboard page 4\*
- [x] style image with caption and credit for reuse around the site (Style differently in the pullout and story content divs)
- [x] make story text Single Spaced and Left Aligned
- [x] style story slug to match story title
- validate responsive design
  - [x] home screen big orange text is too wide on small screens (Alice)
  - [x] Article title and image/slug should be single column on small screens (Alice)
  - [x] Story content width should max out at screen width on small screens (Alice)
  - [x] Check out home page display issues on very small screens (e.g. Moto G4)
  - [x] Check out article page display issues on very small screens (e.g. Moto G4)
- [x] add pictures, titles, and contact info for staff on “Meet the Staff” page
      https://themsuspokesman.com/staff/
- [x] setup launch page on wordpress (Alice)
- [x] convert card section to partial (Alice)
- [x] refactor social sharing and menu JavaScript (Alice)
- Wordpress Launch
  - [x] Add link to “Black Health Matters” in header menu (QOTW can be removed if necessary) links to Page with Ad image of the series and link, change business tab to BHM (Alice)
  - [x] Cross Post Story to Wordpress With BHM.glitch the canonical permalink (Alice)
- [x] make link previews look good on social networks with card meta tags (Alice)
- [x] add “production” environment variable and turn on caching (Alice)

# handlebars-express

A server that serves a handlebars based editorial website to present articles and pages

## Project Overview

On the front-end,

- Edit `views/{file}.handlebars` to change the content of a page, it will become `/file.html` on the server (see how `example.handlebars` is rendered to `/example.html`)
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

Click `Show` in the header to see your app live. Updates to your code will instantly deploy.

## Made on [Glitch](https://glitch.com/)

> you can [remix this project on Glitch](https://glitch.com/edit/#!/black-health)

**Glitch** is the friendly community where you'll build the app of your dreams. Glitch lets you instantly create, remix, edit, and host an app, bot or site, and you can invite collaborators or helpers to simultaneously edit code with you.

Find out more [about Glitch](https://glitch.com/about).

( ᵔ ᴥ ᵔ )

## Project Notepad

* Poynter Institute Partnership Project
* Focus on Black Health and Medical System During COVID-19
* Landing Page on Wordpress Site
* Published Site: https://bhm.themsuspokesman.com/


* Content updated throughout the year, 6 Stories, Last story in April
* Scrolling interactive like 1619 from nytimes (should it link to individual articles from a home page “map?”)
* Continuous reading mode like Medium?
* Launch Early Next Month (October 16th)
* Introductory essay and student portraits at first launch
* Editorial team meets Thursday at 11am (EST)
* Keep color schemes from current site for consistency
* There must be a link to the podcast
* There must be ability to share 
* Drop down menu with link to podcast, about (authors, stories), 6 stories
* Menu to share current story


Saturday 2-4(5)

Tues 5-7

Friday Meeting

Launch Date: October 16th Noon Eastern
We will receive first article no later than Thursday


### TODO:

- [ ] (low priority) Hide cards on their own pages (Alice)
- [ ] (low priority)Give Card background the solid blue color
- [ ] add h2 to top of the card that reads: “Other Black Health Matters Stories”
- [ ] add “production” environment variable and turn on caching (Alice)
- [ ] make link previews look good on social networks with card meta tags (Alice)
- validate responsive design
    - [ ] Enlarge Spokesman logo on home page? For mobile only?
- [ ] Add balloons that are toggled by clicking an element
- [ ] link to the podcast
- [ ] menu to share current story

### Needed from Editorial:

- [X] notes on picture placement with caption and credits
- [X] brief site description Program Overview

### DONE

- [X] The Spokesman color is a bit off compared to the bodyAdd the first story to the card in the home page
- [X] Fill in the Card 1 With first Del story example
- [X] Link card 1 to the example Del story
- [X] Link home page story/slug section to example Del story
- [X] add section for “first story” to home page
- [X] Change contact page name to “Meet the Staff”
- [X] Fill in the project description section with text from jamboard page 4*
- [X] style image with caption and credit for reuse around the site (Style differently in the pullout and story content divs)
- [X] make story text Single Spaced and Left Aligned
- [X] style story slug to match story title
- validate responsive design
    - [X] home screen big orange text is too wide on small screens (Alice)
    - [X] Article title and image/slug should be single column on small screens (Alice)
    - [X] Story content width should max out at screen width on small screens (Alice)
    - [X] Check out home page display issues on very small screens (e.g. Moto G4)
    - [X] Check out article page display issues on very small screens (e.g. Moto G4)
- [X] add pictures, titles, and contact info for staff on “Meet the Staff” page
    https://themsuspokesman.com/staff/
- [X] setup launch page on wordpress (Alice)
- [X] convert card section to partial (Alice)
- [X] refactor social sharing and menu JavaScript (Alice)
- Wordpress Launch
    - [X] Add link to “Black Health Matters” in header menu (QOTW can be removed if necessary) links to Page with Ad image of the series and link, change business tab to BHM (Alice)
    - [X] Cross Post Story to Wordpress With BHM.glitch the canonical permalink (Alice)
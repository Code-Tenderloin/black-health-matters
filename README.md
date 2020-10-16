

# handlebars-express

A server that serves a handlebars based editorial website to present articles and pages


## Project Overview

On the front-end,

- Edit `views/{file}.handlebars` to change the content of a page, it will become 
- Edit `views/layouts/{file}.handlebars` to change the page wrapper for types of pages
- Edit `views/partial/{file}.handlebars` to create a partial to include with `{{> file}}` in a handlebars template
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

**Glitch** is the friendly community where you'll build the app of your dreams. Glitch lets you instantly create, remix, edit, and host an app, bot or site, and you can invite collaborators or helpers to simultaneously edit code with you.

Find out more [about Glitch](https://glitch.com/about).

( ᵔ ᴥ ᵔ )
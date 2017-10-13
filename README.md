# README #

### What is this repository for? ###

A barbones node.js server with webpack set up.   

### How do I get set up? ###

Start by `git clone ajre@bitbucket.org:cgis_development/node-scaffolding.git` into the desired directory. 

---

!! **_IMPORTANT_** !! After cloning down the project, remember to `git remote rm origin`. Otherwise your changes will modify this scaffolding project!

---

Then run `yarn` or `yarn install`
to install the dependecies.

Spin up your node server ( run with nodemon for development ) by typing `npm start`. 
This will also run `yarn run dev-build` for convenience. 

After that's done, running `yarn run dev-server` will start the webpack-dev-server with hot-reloading enabled.

### Recommended ###

You can set up aliases in webpack.config.js; There are some examples commented out. 

This will allow importing from your directory structure logically without having to type the whole path.

These are some example aliases we've found to be helpful: 
```javascript
'Tejas': path.resolve( __dirname, './Client/scripts/Tejas' ),
'Redux': path.resolve( __dirname, './Client/scripts/Redux' ),
'Config': path.resolve( __dirname, './Client/config.js' ),
'Styles': path.resolve( __dirname, './Client/styles' ),
'Utilities': path.resolve( __dirname, './Client/scripts/Utilities' ),
'Components': path.resolve( __dirname, './Client/scripts/Components' )
```
With Aliasing: 
```javascript
import {
    BarChart
} from 'Components/Barchart/component.jsx'
```

vs.

Without Aliasing:
```javascript
import {
    BarChart
} from './Client/scripts/Components/Barchart/component.jsx'
```

### Reminder ###

Be sure to change the directory name as well as set up the correct remotes.
Don't forget to change the name in the package.json!
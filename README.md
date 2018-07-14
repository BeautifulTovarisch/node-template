# README #

### What is this repository for? ###

This project is intended to be included as a submodule. It provides a barbones node.js server.

### How do I get set up? ###

[Download this repository](https://bitbucket.org/cgis_development/node-scaffolding/get/e4d96f80f66f.zip)

Afterwards, unzip the folder and rename it to the desired project.

Run `yarn` or `yarn install`
to install the dependecies.

Type `npm start` to spin up the application. This should also start [AVA](https://github.com/avajs/ava) for automated testing.

### Deployment ###

After moving the code to the desired location, be sure to type `yarn install --production` in order to only install production dependencies.

### Note ###

This project has undergone a substantial rewrite to avoid duplicating configuration. The backend and frontend exist as isolated apps.

You can pair this with the [Weback Template](https://bitbucket.org/cgis_development/webpack-scaffolding/src/master/) standalone front-end application.

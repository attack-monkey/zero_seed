Welcome to zero
======================================

zero docs @ https://zero-b1894.firebaseapp.com

----

Zero seed is a seed project for the no-library js application framework - zero.  

Clone the seed project as a starting point of any zero project.

*Note that zero seed ships with webpack and bootstrap (sass, but no javascript) pre-installed.*

### clone and cd

`$ git clone https://github.com/attack-monkey/zero_seed.git`  
`$ cd zero_seed`

### install
`$ npm install`

### run the dev server
`$ npm start`

### build
`$ npm run-script build`  
and the app will be built in `dist`

----

### How the webpack build works

Webpack first bundles all javascript into one or more bundles, starting from the root `index.js`. Any import statements it comes accross will import that javascript into the bundle. The bootstrap sass is also converted into css at this stage.

An `index.html` is generated from `assets/pages/index.html`, and the bundled javascript is injected into this page.

This is all moved to a `dist` folder, ready for distribution.

Using `npm start` will perform this build in the background and run it on a local server. The project will display in a browser on `localhost:8080`. Any saves will automatically refresh the browser. `npm run-script build` will perform the build the project and create the dist folder with bundled project inside.

### Generating components

There is a snippets folder that contains a my-feature folder. This folder is a component template. Copy and paste the folder where ever you need a new component. Then replace `my-feature` with the name of your component. Do this for the component folder name, .component.js name, .template.html name, and the reference to the template within .component.js file.

----

### Bootstrap configuration

Bootstrap is installed as part of the zero seed project and set up according to the following bootstrap / webpack guide.
http://getbootstrap.com/docs/4.0/getting-started/webpack/#importing-styles


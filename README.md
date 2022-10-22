## To change port
In same port, we can't run more than one app in the same time.
Add  ["dev": "next dev -p 3001"] in package.json and restart the app

### Functional Component
In general, the 1st letter of a function name must be started with a lowercase letter and in a camel case format

The 1st letter of a Functional Component name must be started with a uppercase letter and in a camel case format

Functional Component must return a JSX element

### useState
It's state variable function to store value

### import 
We'll import either a Functional component / Function

### INSTALL NPM BOOTSTRAP PACKAGE 
1. Goto https://www.npmjs.com/
2. Search for "Bootstrap" 
3. npm i bootstrap ->  -> It only install the latest version
4. npm i bootstrap@4.6.0 -> For specific version
5. search package for "react-bootstrap"
6. npm i react-bootstrap
7. Goto styles -> global.css -> add this line -> @import url('../node_modules/bootstrap//dist/css/bootstrap.min.css');
8. Then goto _app.js -> import css -> import '../styles/globals.css'
9. Goto Bootstrap official site -> https://getbootstrap.com/ then select v4.6
10. 
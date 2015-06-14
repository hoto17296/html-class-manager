# html-class-manager [![Build Status](https://travis-ci.org/hoto17296/html-class-manager.svg)](https://travis-ci.org/hoto17296/html-class-manager)
Manage html classes and generate className string.

## Install
```
$ npm install --save html-class-manager
```

## Usage
``` javascript
var HtmlClassManager = require('html-class-manager');
var classes = new HtmlClassManager();

// Add classes
classes.add('foo bar');       // space separated classes
classes.add('foo', 'bar');    // multi arguments
classes.add(['foo', 'bar']);  // array

// Generate className string
classes.add('hoge', 'fuga').toString();  //=> 'hoge fuga'

// Keeps classes unique
classes.add('foo bar').add('foo').toString();  //=> 'foo bar'

// Remove classes
classes.add('foo bar buzz').remove('foo', 'buzz').toString();  //=> 'bar'

// Get as array
classes.add('foo bar').getAll();  //=> ['foo', 'bar']

// Remove all classes
classes.add('foo bar').clear().toString();  //=> ''
```

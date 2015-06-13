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
classes.add('foo', 'bar').toString();  //=> 'foo bar'
classes.add(['hoge', 'piyo']).toString();  //=> 'foo bar hoge piyo'

// Keeps classes unique
classes.add('foo', 'bar', 'buzz').toString();  //=> 'foo bar hoge piyo buzz'

// Remove classes
classes.remove('hoge', 'piyo').toString();  //=> 'foo bar buzz'

// Get as array
classes.getAll();  //=> ['foo', 'bar', 'buzz']

// Remove all classes
classes.clear().toString();  //=> ''
```

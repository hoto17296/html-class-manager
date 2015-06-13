'use strict';

var parseClasses = function(classes, separator) {
  if ( ! classes instanceof Array ) { return []; }

  for (var i = 0, len = classes.length; i < len; i++) {
    if ( classes[i] instanceof Array ) {
      classes[i] = parseClasses(classes[i], separator);
      continue;
    }
    if ( ! ( typeof classes[i] == "string" || classes[i] instanceof String ) ) {
      delete classes[i];
      continue;
    }
    if ( classes[i].indexOf(separator) !== -1 ) {
      classes[i] = parseClasses(classes[i].split(separator), separator);
    }
  }

  return Array.prototype.concat.apply([], classes); // flatten
};

var HtmlClassManager = function(separator) {
  this.classes = [];
  this.separator = separator ? separator : ' ';
};

HtmlClassManager.prototype = {

  getAll: function() {
    return this.classes;
  },

  add: function() {
    this.classes = this.classes.concat( parseClasses(arguments, this.separator) );
    // uniq
    this.classes = this.classes.filter(function(val, i, self) {
      return self.indexOf(val) === i;
    });
    return this;
  },

  remove: function() {
    parseClasses(arguments, this.separator).map(function(className) {
      var index = this.classes.indexOf(className);
      if ( index !== -1 ) {
        this.classes.splice(index, 1);
      }
    }, this);
    return this;
  },

  clear: function() {
    this.classes = [];
    return this;
  },

  toString: function() {
    return this.classes.join( this.separator );
  },

};

module.exports = HtmlClassManager;

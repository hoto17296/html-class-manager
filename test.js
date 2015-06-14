'use strict';
var should = require('should');
var HtmlClassManager = require('./');
var classes = new HtmlClassManager;

beforeEach(function() {
  classes.clear();
});

it('should classes are added with array', function() {
  classes.add(['foo', 'bar']).toString().should.equal('foo bar');
});

it('should classes are added with arguments', function() {
  classes.add('foo', 'bar').toString().should.equal('foo bar');
});

it('should classes are added with space sparated classes', function() {
  classes.add('foo bar', 'buzz').toString().should.equal('foo bar buzz');
});

it('should not be duplicated', function() {
  classes.add('foo', 'bar').add('foo', 'buzz').toString().should.equal('foo bar buzz');
});

it('should classes are deleted with array', function() {
  classes.add('foo', 'bar', 'buzz').remove(['foo', 'bar']).toString().should.equal('buzz');
});

it('should classes are deleted with arguments', function() {
  classes.add('foo', 'bar', 'buzz').remove('foo', 'bar').toString().should.equal('buzz');
});

it('should classes are deleted with space separated classes', function() {
  classes.add('foo', 'bar', 'buzz').remove('foo bar').toString().should.equal('buzz');
});

var expect = require('chai').expect;

var Bullet = require('../lib/bullet');

describe('Bullet', function(){
    it('should exist', function(){
	expect(Bullet).to.exist;
    });

    it('should be a constructor', function(){
	expect(Bullet).to.be.a('function');
    });

    it('should be an instanceof Asteroid', function(){
	expect(new Bullet()).to.be.an.instanceof(require('asteroids-asteroid'));
    });
});

var expect = require('chai').expect;

var Bullet = require('../lib/bullet');

describe('Bullet', function(){
    it('should exist', function(){
	expect(Bullet).to.exist;
    });

    it('should be a constructor', function(){
	expect(Bullet).to.be.a('function');
    });
});

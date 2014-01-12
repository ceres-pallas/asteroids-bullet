var expect = require('chai').expect;

var Bullet = require('../lib/bullet');

describe('Bullet', function(){
    var bullet;

    beforeEach(function(){
	bullet = new Bullet(function(){
	    this.velocity({ speed : 1, heading: 0 });
	});
    });

    it('should exist', function(){
	expect(Bullet).to.exist;
    });

    it('should be a constructor', function(){
	expect(Bullet).to.be.a('function');
    });

    it('should be an instanceof Asteroid', function(){
	expect(new Bullet()).to.be.an.instanceof(require('asteroids-asteroid'));
    });


    it('should have created a bullet', function(){
	expect(bullet).to.exist;
    });

    describe('interactions', function(){
	describe('tick', function(){
	    it('should update position', function(){
		bullet.tick();

		expect(bullet.position()).to.deep.equal({ x: 1, y: 0 });
	    });
	});
    });
});

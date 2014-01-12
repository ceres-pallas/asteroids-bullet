var expect = require('chai').expect;

var Bullet = require('../lib/bullet');

describe('Bullet', function(){
    var options = { speed : 1, heading: 0, lifetime: 3 };
    var bullet;

    beforeEach(function(){
	bullet = new Bullet(function(){
	    this.velocity(options);
	    this.ttl(options.lifetime);
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

    describe('object', function(){
	['ttl'].forEach(function(method){
	    it('should respond to the method ' + method, function(){
		expect(bullet).to.respondTo(method);
	    });
	})
    });

    describe('interactions', function(){
	describe('ttl', function(){
	    it('should set timeToDeath', function(){
		var lifetime = 3;
		bullet.ttl(lifetime);

		expect(bullet.ttl()).to.equal(lifetime);
	    });
	});

	describe('tick', function(){
	    it('should update position', function(){
		bullet.tick();

		expect(bullet.position()).to.deep.equal({ x: 1, y: 0 });
	    });

	    it('should die after a number of ticks', function(){
		bullet.ttl(options.lifetime);

		for (var index = 0; index < options.lifetime; index++) {
		    bullet.tick();
		}

		expect(bullet.ttl()).to.equal(0);
	    });

	    it('should notify when bullet dies', function(done){
		bullet.addListener('died', done);
		bullet.ttl(1);

		bullet.tick();
	    });
	});
    });
});

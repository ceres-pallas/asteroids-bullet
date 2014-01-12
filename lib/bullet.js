var Asteroid = require('asteroids-asteroid');

var Bullet = module.exports = function(initializer){
    Asteroid.call(this, initializer);
}
Bullet.prototype = new Asteroid();
Bullet.prototype.ttl = function(timeToDeath){
    if (timeToDeath != undefined) {
	this.timeToDeath = timeToDeath;
    }
    return this.timeToDeath != undefined ? this.timeToDeath : Number.POSITIVE_INFINITY;
}
Bullet.prototype.tick = function(){
    Asteroid.prototype.tick.call(this);
    var ttl = Math.max(this.ttl() - 1, 0);
    if (ttl === 0) {
	this.notifyOf('died');
    }
    this.ttl(ttl);
}

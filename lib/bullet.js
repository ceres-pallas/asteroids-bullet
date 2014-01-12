var Asteroid = require('asteroids-asteroid');

var Bullet = module.exports = function(initializer){
    Asteroid.call(this, initializer);
}
Bullet.prototype = new Asteroid();

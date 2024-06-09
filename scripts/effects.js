const Effects.bladeShoot = new Effect(20, e => {
  	Draw.color(Color.white, Color.valueOf("989aa4"), e.fin());
	
  	const hl = new Floatc2({get: function(x, y){
  		Fill.poly(e.x + x, e.y + y, 3, e.fout() * 5, e.finpow() * 12.0);
  	}});
	
  	Angles.randLenVectors(e.id, 4, e.finpow() * 35.0, e.rotation, 180.0, hl);
});

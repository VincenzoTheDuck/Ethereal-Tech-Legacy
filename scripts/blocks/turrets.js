const fungi = extend(ItemTurret, "fungi", {});

const vortex = extend(ItemTurret, "vortex", {});

const fusor = extend(PowerTurret, "fusor", {});

const thearchy = extend(PowerTurret, "thearchy", {});

const bladeShoot = new Effect(20, e => {
  Draw.color(Color.white, Color.valueOf("989aa4"), e.fin());

  Drawf.tri(e.x, e.y, 6, 60 * e.fout(), e.rotation-75);
  Drawf.tri(e.x, e.y, 6, 60 * e.fout(), e.rotation);
  Drawf.tri(e.x, e.y, 6, 60 * e.fout(), e.rotation+75);
});

const bladeBeam = extend(LaserBulletType, {
  	length: 200,
  	colors: [Color.valueOf("989aa4"), Color.valueOf("dcdde3"), Color.white],
  	damage: 150,
  	hitSize: 1.5,
  	drawSize: 150,
  	lifetime: 15,
  	sideAngle: 0,
  	width: 32,
	shootEffect: bladeShoot,
});

const blade = extend(PowerTurret, "blade", {
  shootType: bladeBeam,
});

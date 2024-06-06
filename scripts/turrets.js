const fungi = extend(ItemTurret, "fungi", {});

const vortex = extend(ItemTurret, "vortex", {});

const fusor = extend(PowerTurret, "fusor", {});

const thearchy = extend(PowerTurret, "thearchy", {});

const bladeBeam = extend(LaserBulletType, {
  	length: 200,
  	colors: [Color.valueOf("989aa4"), Color.valueOf("dcdde3"), Color.white],
  	damage: 150,
  	hitSize: 4,
  	drawSize: 400,
  	lifetime: 35,
  	sideAngle: 15,
  	width: 32,
});

const blade = extend(PowerTurret, "blade", {
  shootType: bladeBeam,
});

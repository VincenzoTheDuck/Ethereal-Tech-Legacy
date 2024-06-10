// wip

const crysolaGen = extend(PlanetGenerator, {});

const crysola = new JavaAdapter(Planet, {}, "crysola", Planets.sun, 1, 2.5)
crysola.generator = crysolaGen;
crysola.startSector = 13;
crysola.hasAtmosphere = true;
crysola.alwaysUnlocked = true;
crysola.atmosphereColor = Pal.lancerLaser;
crysola.meshLoader = new HexMesh(crysola, 5)
crysola.atmosphereRadIn = -0.02;
crysola.atmosphereRadOut = 0.12;
crysola.allowLaunchToNumbered = false;

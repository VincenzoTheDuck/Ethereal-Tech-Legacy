// wip

const crysolaGen = extend(PlanetGenerator, {});

const crysola = new JavaAdapter(Planet, {}, "crysola", Planets.sun, 1, 2.5)
crysola.generator = crysolaGen;
crysola.startSector = 13;
crysola.hasAtmosphere = true;
crysola.alwaysUnlocked = true;
crysola.atmosphereColor = Pal.lancerLaser;
crysola.meshLoader = new HexMesh(crysola, 6)
crysola.atmosphereRadIn = -0.02;
crysola.atmosphereRadOut = 0.12;
crysola.allowLaunchToNumbered = false;
crysola.cloudMeshLoader = new MultiMesh(
  new HexSkyMesh(crysola, 11, 0.15, 0.13, 5, Color.valueOf("a4b8fa85"), 2, 0.45, 0.9, 0.38),
  new HexSkyMesh(crysola, 1, 0.6, 0.16, 5, Color.valueOf("a4b8fa90"), 2, 0.45, 1, 0.41)
);

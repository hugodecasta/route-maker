import LatLon from 'geodesy/latlon-ellipsoidal-vincenty.js';

export function computeRoute(p1, p2) {
  const azimut = p1.initialBearingTo(p2);
  const dist = p1.distanceTo(p2);

  const divPoints = 20;

  const minDist = dist / (divPoints - 1);
  let startPoint = p1;
  let startAzimut = azimut;
  const pointsData = [
    {point: p1, az: azimut},
    ...Array(divPoints - 2)
      .fill(0)
      .map(() => {
        const nextPoint = startPoint.destinationPoint(minDist, startAzimut);
        startAzimut = startPoint.finalBearingTo(nextPoint);
        startPoint = nextPoint;
        return {point: nextPoint, az: startAzimut};
      }),
    {point: p2, az: null},
  ];

  pointsData.forEach(({point, az}) => {
    console.log(point.toString('dms'), az + '°');
  });
  return pointsData;
}

export function azimutFromPoints(pg1, pg2) {
  const p1 = new LatLon(pg1.lat, pg1.lng);
  const p2 = new LatLon(pg2.lat, pg2.lng);
  return p1.initialBearingTo(p2);
}

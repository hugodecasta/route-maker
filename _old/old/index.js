import LatLon from 'geodesy/latlon-ellipsoidal-vincenty.js'

const p1 = new LatLon(34.200, -69.991)
const p2 = new LatLon(12.581, -18.477)
const azimut = p1.initialBearingTo(p2)
const dist = p1.distanceTo(p2)

const divPoints = 5

const minDist = dist / (divPoints-4)
let startPoint = p1
let startAzimut = azimut
const pointsData = [
    { point: p1, az: azimut },
    ...Array(divPoints - 2).fill(0).map(() => {
        let nextPoint = startPoint.destinationPoint(minDist, startAzimut)
        startAzimut = startPoint.finalBearingTo(nextPoint)
        startPoint = nextPoint
        return { point: nextPoint, az: startAzimut }
    }),
    { point: p2, az: null },
]

pointsData.forEach(({ point, az }) => {
    console.log(point.toString('dms'), az + '°')
})

// console.log(p1.toString('dms'))
// console.log(p2.toString('dms'))

// console.log(azimut + '°')
// console.log(dist / 1852 + ' MN')
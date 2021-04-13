const turf = require('@turf/turf');
const { default: axios } = require('axios');
const querystring = require('querystring');
const decode = require('./polyline-decode');

require('dotenv').config()

const getGeoCentriod = locs => {
    let features = turf.points([
        ...(locs.map(loc => [loc.lat, loc.lng]))
    ])
    return turf.center(features);
}

const geoCenterHelper = async (candidate, origins) => {
    const pathData = [], errors = [];
    for(const origin of origins) {
        try{
            const res = await axios.get('https://maps.googleapis.com/maps/api/directions/json?' + querystring.stringify({
            key: process.env.GMAPS_APIKEY,
            origin: `${origin.loc.lat},${origin.loc.lng}`,
            destination: turf.getCoord(candidate).join(','),
            mode: origin.mode || undefined
            //TODO: Other filters
            })).catch(e => {throw e})
            const data = res.data;
            if (!(data.status === 'OK')) throw 'No path results found. Locations are too far apart.';
            const route = data.routes[0]
            const path = {
                duration: route.legs[0].duration.value,
                distance: route.legs[0].distance.value,
                polyline: decode(route.overview_polyline.points)
            }
            pathData.push(path)
        }
        catch (e) {
            errors.push(e)
        }
    }
    if(errors.length > 0) throw errors.toString();
    let maxPath = pathData[0].polyline, maxDuration = pathData[0].duration, averageDuration = 0, averageDistance = 0;
    pathData.forEach((path, i) => {
        averageDuration += path.duration/pathData.length;
        averageDistance += path.distance/pathData.length;
        if(path.duration > maxDuration){
            maxPath = path.polyline;
            maxDuration = path.duration;
        }
    })
    const r = averageDuration/maxDuration;
    const x = Math.round(maxPath.length * r);
    if(maxPath[x]){
        return {
            averageSquaredError: getAverageSquaredError(pathData.map(path => path.duration), averageDuration),
            newCandidate: turf.point([maxPath[x].lat, maxPath[x].lng]),
            averageDuration: averageDuration,
            averageDistance: averageDistance
        }
    }
    else {
        return {
            averageSquaredError: 0,
            newCandidate: candidate,
            averageDuration: averageDuration,
            averageDistance: averageDistance
        }
    }
}

const getAverageSquaredError = (durations, average) => {
    if(durations && durations.length > 0){
        let sum = 0;
        durations.forEach(duration => sum += Math.pow(duration-average, 2))
        return sum/durations.length
    }
    return null;
}

const geoCenter = async(origins, power = 5, tol = 300) => {
    let candidate = getGeoCentriod(origins.map(origin => origin.loc)), i = 0;
    let averageDuration = Infinity;
    while (i < power){
        let data;
        data = await geoCenterHelper(candidate, origins).catch(e => {throw(e)})
        averageDuration = data.averageDuration;
        averageDistance = data.averageDistance
        if(data.averageSquaredError <= tol) break;
        else {
            candidate = data.newCandidate;
        }
        i++;
    }
    if(candidate){
        const coord = turf.getCoord(candidate);
        return {
        loc: {
            lat: coord[0],
            lng: coord[1]
        },
        averageDuration: averageDuration,
        averageDistance: averageDistance
        }
    }
    return null;
}

module.exports = geoCenter
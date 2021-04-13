const {geoCenter, getAverageSquaredError, cutPath, geoCenterHelper, getGeoCentriod} = require('../algo/geocenter');
const turf = require('@turf/turf');
const stub = require('sinon').stub
const expect = require('chai').expect;
const { default: axios } = require('axios');

describe('getGeoCentriod - basic functionality', () => {
    it('empty array of locs', ()=>{
        expect(() => getGeoCentriod([])).to.throw('Input must contain at least 2 locs')
    })
    it('array of 1 loc', ()=>{
        expect(() => getGeoCentriod([{lat: 0, lng: 0}])).to.throw('Input must contain at least 2 locs')
    })
    it('valid locs are all equal', ()=>{
        expect(getGeoCentriod([{lat: 0, lng: 0},{lat: 0, lng: 0},{lat: 0, lng: 0}])).to.deep.equal(turf.point([0,0]))
    })
    it('valid locs are all non-equal', ()=>{
        expect(getGeoCentriod([{lat: 1, lng: 1},{lat: 1, lng: -1},{lat: -1, lng: 1},{lat: -1, lng: -1}])).to.deep.equal(turf.point([0,0]))
    })
    it('valid locs are non-equal', ()=>{
        expect(getGeoCentriod([{lat: 1, lng: 1},{lat: 1, lng: 1},{lat: 1, lng: 1},{lat: 1, lng: -1},{lat: -1, lng: 1},{lat: -1, lng: -1}])).to.deep.equal(turf.point([0,0]))
    })
    it('valid locs are opposite sides on equator', ()=>{
        expect(getGeoCentriod([{lat: 180, lng: 1},{lat: -180, lng: 1}])).to.deep.equal(turf.point([0,1]))
    })
    it('valid locs are opposite poles', ()=>{
        expect(getGeoCentriod([{lat: 69, lng: 90},{lat: 69, lng: -90}])).to.deep.equal(turf.point([69,0]))
    })
    it('invalid loc format', ()=>{
        expect(() => getGeoCentriod([{latitude: 0, longitude: 0}, {latitude: 0, longitude: 0}, {latitude: 0, longitude: 0}])).to.throw(Error, new RegExp('.*'))
    })
    it('out of bound loc coordinates', ()=>{
        expect(getGeoCentriod([{lat: 500, lng: -500},{lat: 500, lng: -500},{lat: 500, lng: -500}])).to.deep.equal(turf.point([500,-500]))
    })
    it('invalid loc coordinates', ()=>{
        expect(() => getGeoCentriod([{lat:"0", lng: "0"},{lat: {}, lng: undefined}])).to.throw(Error, new RegExp('.*'))
    })
})

describe('cutPath - basic functionality', () => {
    const pathData1 = [{duration: 200, polyline: [{lat:0, lng:0}, {lat:1, lng:0}, {lat:1, lng:1}]}, {duration: 100, polyline: [{lat:0, lng:1}, {lat:1, lng:1}]}]
    const pathData2 = [{duration: 400, polyline: [{lat:0, lng:0}, {lat:1, lng:0}, {lat:2, lng:0}, {lat:2, lng:1}, {lat:1, lng:1}]}, {duration: 100, polyline: [{lat:0, lng:1}, {lat:1, lng:1}]}]
    const pathData3 = [{duration: 100, polyline: [{lat:0, lng:0}, {lat:1, lng:0}, {lat:2, lng:0}, {lat:2, lng:1}, {lat:1, lng:1}]}, {duration: 100, polyline: [{lat:0, lng:1}, {lat:1, lng:1}]}]
    it('empty pathData', ()=>{
        expect(() => cutPath([], turf.point([0,0]))).to.throw('Input must contain at least 2 locs')
    })
    it('empty candidate point', ()=>{
        expect(() => cutPath(pathData1, null)).to.throw('Invalid candidate point')
    })
    it('invalid candidate point', ()=>{
        expect(() => cutPath(pathData1, [1,1])).to.throw('Invalid candidate point')
    })
    it('valid parameters 1', ()=>{
        expect(cutPath(pathData1, turf.point([1,1])).newCandidate).to.deep.equal(turf.point([1,1]))
    })
    it('valid parameters 2', ()=>{
        expect(cutPath(pathData2, turf.point([1,1])).newCandidate).to.deep.equal(turf.point([2,1]))
    })
    it('valid parameters 3 (path too short to cut)', ()=>{
        expect(cutPath(pathData3, turf.point([0,0])).newCandidate).to.deep.equal(turf.point([0,0]))
    })
})
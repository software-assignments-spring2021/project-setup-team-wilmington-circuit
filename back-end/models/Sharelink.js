const mongoose = require('mongoose');

const sharelinkSchema = new mongoose.Schema({
	"link_id": {type: String, required: true},
	"origins": [{"loc": {"lat": Number, "lng": Number}, "query": String, "mode": String, "options": Map}],
	"searchData": {"query": String, "options": Map},
	"places": [{"name": String, "loc": {"lat": Number, "lng": Number}, "rating": Number, "icon": String, "price": Number, "hours": Map, "placeId": String, "photoreference": [Map]}],
	"averageDuration": String
}, {collection: "Sharelink"})

module.exports = ShareLink = mongoose.model("ShareLink", sharelinkSchema)
const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
	"location_name": String,
	"origin": {
		"query": String,
		"loc": 
		{
			lat: Number,
			lng: Number,
		},
		"mode": String,
		"options": Map,
	}, // stored as coords
	"user_id": String, // stored as google_id
}, {collection: "Location"});

module.exports = Group = mongoose.model("location", locationSchema);
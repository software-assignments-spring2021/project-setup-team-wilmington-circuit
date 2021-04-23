const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new mongoose.Schema({
	"group_name": String,
	"origins": [ {
		"query": String,
		"loc": 
		{
			lat: Number,
			lng: Number,
		},
		"mode": String,
		"options": Map,
	}], // stored as coords
	"user_id": String, // stored as google_id
}, {collection: "Group"});

module.exports = Group = mongoose.model("group", groupSchema);
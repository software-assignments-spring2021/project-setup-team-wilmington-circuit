const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new mongoose.Schema({
	"name": String,
	"locations": [ {
		lat: Number,
		lng: Number
	}], // stored as coords
	"userId": String, // stored as google_id
}, {collection: "Group"});

module.exports = Group = mongoose.model("group", groupSchema);
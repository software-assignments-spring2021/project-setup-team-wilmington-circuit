const mongoose = require("mongoose");

const User = new mongoose.Schema({
	"google_id": {type: String, required: true}, // 'Aa' from Google account obj
	"name": {type: String},
	"locations": [String], // stored as coords
	"friends": [String], // stored as google_id
	"groups": [String] // stored as group_id
}, {collection: "User"});
mongoose.model("User", User);


const ShareLink = new mongoose.Schema({
	"link_id": {type: String, required: true},
	"origins": [{"loc": {"lat": Number, "lng": Number}, "query": String, "mode": String, "options": Map}],
	"searchData": {"query": String, "options": Map},
	"places": [{"name": String, "loc": {"lat": Number, "lng": Number}, "rating": Number, "icon": String, "price": Number, "hours": Map, "placeId": String, "photoreference": [Map]}],
	"averageDuration": String
})
const shareLinkModel = mongoose.model("ShareLink", ShareLink)

const db = (process.env.NODE_ENV === "PRODUCTION") ?
	`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.w3xow.mongodb.net/myFirstDatabase?retryWrites=true&w=majority` :
	`mongodb://localhost/MeetMe`;

const connect = () => {
	mongoose.connect(db, {useNewUrlParser: true});
};

const disconnect = () => {
	mongoose.disconnect();
};

module.exports = {connect, disconnect, shareLinkModel};

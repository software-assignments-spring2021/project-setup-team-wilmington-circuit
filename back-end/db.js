const mongoose = require("mongoose");

const User = new mongoose.Schema({
	"google_id": {type: String, required: true}, // 'Aa' from Google account obj
	"name": {type: String},
	"locations": [String], // stored as coords
	"friends": [String], // stored as google_id
	"groups": [String] // stored as group_id
}, {collection: "User"});
mongoose.model("User", User);


const db = (process.env.NODE_ENV === "PRODUCTION") ?
	`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.w3xow.mongodb.net/myFirstDatabase?retryWrites=true&w=majority` :
	`mongodb://localhost/MeetMe`;

const connect = () => {
	mongoose.connect(db, {useNewUrlParser: true});
};

const disconnect = () => {
	mongoose.disconnect();
};

module.exports = {connect, disconnect};

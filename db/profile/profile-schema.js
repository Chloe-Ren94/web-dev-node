const mongoose = require('mongoose');
const schema = mongoose.Schema({
    name: String,
    handle: String,
    tweets: {type: Number, defaultValue: 0},
    profilePicture: String,
    bannerPicture: String,
    bio: String,
    location: String,
    website: String,
    dateOfBirth: String,
    dateJoined: String,
    followingCount: {type: Number, defaultValue: 0},
    followersCount: {type: Number, defaultValue: 0},
    edit: {type: Boolean, defaultValue: false}
}, {collection: 'profiles'});
module.exports = schema;
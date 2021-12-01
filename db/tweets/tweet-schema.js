const mongoose = require('mongoose');
const schema = mongoose.Schema({
    avatarIcon : String,
    userName : String,
    verified: {type: Boolean, defaultValue: false},
    handle : String,
    time : String,
    tweet : String,
    image : String,
    title : String,
    text : String,
    link : String,
    reply : {type: Number, defaultValue: 0},
    retweet : {type: Number, defaultValue: 0},
    like : {type: Number, defaultValue: 0},
    liked : {type: Boolean, defaultValue: false}
}, {collection: "tweets", timestamps: true});
module.exports = schema;
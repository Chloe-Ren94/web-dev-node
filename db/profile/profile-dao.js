const model = require('./profile-model');

const findProfile = () =>
    model.findOne();
const updateProfile = (id, profile) =>
    model.updateOne({_id: id},
        {$set: profile});

module.exports = {
    findProfile, updateProfile
}
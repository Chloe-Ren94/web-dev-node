const dao = require('./profile-dao');

module.exports = (app) => {
    const getCurrentProfile = (req, res) => {
        dao.findProfile()
            .then(profile => res.json(profile));
    }
    app.get('/rest/profile', getCurrentProfile);

    const updateCurrentProfile = (req, res) => {
        const id = req.params['id'];
        const profile = {
            ...req.body,
            edit: false
        };
        dao.updateProfile(id, profile)
            .then(status => res.send(status));
    }
    app.put('/rest/profile/:id', updateCurrentProfile);
};
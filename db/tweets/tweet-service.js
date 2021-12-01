const dao = require('./tweet-dao');

module.exports = (app) => {
    const findAllTweets = (req, res) => {
        dao.findAllTweets()
            .then(tweets => res.json(tweets));
    }
    app.get('/rest/tweets', findAllTweets);

    const postNewTweet = (req, res) => {
        const newTweet = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "verified": false,
            "handle": "ReactJS",
            "time": "2h",
            "avatarIcon": "/images/react-blue.png",
            "logo-image": "/images/react-blue.png",
            "reply": 123,
            "retweet": 234,
            "like": 345,
            "liked": false,
            ...req.body,
        }
        dao.createTweet(newTweet)
            .then(insertedTweet => res.json(insertedTweet));
    }
    app.post('/rest/tweets', postNewTweet);

    const deleteTweet = (req, res) => {
        const id = req.params['id'];
        dao.deleteTweet(id)
            .then(status => res.send(status));
    }
    app.delete('/rest/tweets/:id', deleteTweet);

    const likeTweet = (req, res) => {
        const id = req.params['id'];
        const tweet = req.body;
        if (tweet.liked) {
            tweet.liked = false;
            tweet.like--;
        } else {
            tweet.liked = true;
            tweet.like++;
        }
        dao.updateTweet(id, tweet)
            .then(status => res.send(status));
    }
    app.put('/rest/tweets/:id/like', likeTweet);
};
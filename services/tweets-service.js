let tweets = require('../data/posts.json');
module.exports = (app) => {
    const findAllTweets = (req, res) => {
        res.json(tweets);
    }
    app.get('/api/tweets', findAllTweets);

    const postNewTweet = (req, res) => {
        const newTweet = {
            _id: (new Date()).getTime() + '',
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
        tweets = [
            newTweet,
            ...tweets
        ];
        res.json(newTweet);
    }
    app.post('/api/tweets', postNewTweet);

    const deleteTweet = (req, res) => {
        const id = req.params['id'];
        tweets = tweets.filter(tweet => tweet._id !== id);
        res.sendStatus(200);
    }
    app.delete('/api/tweets/:id', deleteTweet);

    const likeTweet = (req, res) => {
        const id = req.params['id'];
        tweets = tweets.map(tweet => {
            if (tweet._id === id) {
                if (tweet.liked) {
                    tweet.liked = false;
                    tweet.like--;
                } else {
                    tweet.liked = true;
                    tweet.like++;
                }
                return tweet;
            }
            else {
                return tweet;
            }
        });
        res.sendStatus(200);
    }
    app.put('/api/tweets/:id/like', likeTweet);
};
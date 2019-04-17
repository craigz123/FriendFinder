const friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends)
    });
    app.post("/api/friends", function (req, res) {
        let totDif = 0;
        let bestMatch = {
            name: "",
            photo: "",
            friendDif: 1000
        };
        const userData = req.body;
        const userName = userData.name;
        const userScores = userData.scores;
    
        const b = userScores.map(function (item) {
            return parseInt(item, 10);
        });
        userData = {
            name: req.body.name,
            photo: req.body.photo,
            scores: b
        };
    
        console.log("Name: " + userName);
        console.log("Score: " + userScore);
    
        const sum = b.reduce((a, b) => a + b, 0);
        console.log("User score sum total: " + totDif)
        console.log("You match-up best with" + bestMatch.friendDif);
    
        for (let i = 0; i < friends.length; i++) {
            console.log(friends[i].name);
            totDif = 0;
            console.log("Total difference: " + totDif);
            console.log("best match-up dif: " + bestMatch.friendDif);
            
        }
    });
};


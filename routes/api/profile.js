const router = require("express").Router();
const db = require ("../../models");

router.post("/createProfile", (req, res) => {
    db.Profile.create({ username: req.body.username, 
        nickname: req.body.nickname, 
        age: req.body.age,
        location: req.body.location,
        something: req.body.something })
        .then(console.log("Successfully Created Profile"))
        .catch(console.log("Error received CREATE PROFILE"))
    
});


router.get("/", (req, res) => {
    return db.Profile.find(req.query)
    .then(result => res.json(result))
    .catch(err => console.log(err))
})

router.get("/:name", (req, res) => {
    return db.Profile.find({ username: req.params.name })
    .then(result => res.json(result))
    .catch(err => console.log(err))
})

module.exports = router;
const router = require("express").Router();
const db = require ("../../models");

router.post("/createProfile", (req, res) => {
    db.Profile.create({ username: req.body.username, 
        nickname: req.body.nickname, 
        age: req.body.age,
        location: req.body.location,
        something: req.body.something,
        town: null })
        .then(console.log("Successfully Created Profile"))
        .catch(err => console.log(err))
    
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

router.put("/join/:user/:nick/:town", async (req, res) => {
    await db.Profile.findOneAndUpdate({ username: req.params.user, nickname: req.params.nick }, { town: req.params.town} )
    .then(result => {
        res.json(result);
    })
    .catch(err => console.log(err))
})

router.put("/leave/:user/:nick", async (req, res) => {
    await db.Profile.findOneAndUpdate({ username: req.params.user, nickname: req.params.nick}, { town: null })
    .then( result => res.json(result))
    .catch(err => console.log(err))
})

module.exports = router;
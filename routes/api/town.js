const router = require("express").Router();
const db = require ("../../models");

router.post("/createTown", (req, res) => {
    db.Town.create({ name: req.body.name,
        createdBy: req.body.createdBy,
        description: req.body.description,
        members: [{
            username: req.body.username,
            nickname: req.body.nickname,
            age: req.body.age,
            location: req.body.location,
            something: req.body.something
        }]
    })
})


module.exports = router;
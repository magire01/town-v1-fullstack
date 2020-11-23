const router = require("express").Router();
const db = require ("../../models");

router.post("/createTown", (req, res) => {
    db.Town.create({ name: req.body.name,
        createdByUser: req.body.createdByUser,
        createdByNick: req.body.createdByNick,
        description: req.body.description,
        members: req.body.members
    })
    .then(console.log("Successfully Created Town!"))
    .catch(err => console.log(err))
})


module.exports = router;
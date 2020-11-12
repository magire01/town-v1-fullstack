const router = require("express").Router();
const db = require ("../../models");

router.post("/text", (req, res) => {
    db.Post.create({ username: req.body.username, 
        nickname: req.body.nickname, 
        text: req.body.text })
        .then(console.log("Successfully Created Post"))
        .catch(err => console.log(err))
    
});

router.get("/:username/:nickname/", (req, res) => {
    return db.Post.find({ username: req.params.username, nickname: req.params.nickname })
    .then(result => res.json(result))
    .catch(err => console.log(err))
})

module.exports = router;
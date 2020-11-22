const router = require("express").Router();
const db = require ("../../models");

router.post("/createPost", (req, res) => {
    db.Post.create({ username: req.body.username, 
        nickname: req.body.nickname, 
        postText: req.body.postText })
        .then(console.log("Successfully Created Post"))
        .catch(err => console.log(err))
    
});

router.get("/:name1/:name2", (req, res) => {
    return db.Post.find({ username: req.params.name1, nickname: req.params.name2  })
    .then((result) => {
        console.log(result);
        res.json(result);
    })
    .catch(err => console.log(err))
})

module.exports = router;
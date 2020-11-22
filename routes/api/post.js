const router = require("express").Router();
const db = require ("../../models");

router.post("/createPost", (req, res) => {
    db.Post.create({ username: req.body.username, 
        nickname: req.body.nickname, 
        postText: req.body.postText })
        .then(console.log("Successfully Created Post"))
        .catch(err => console.log(err))
    
});

module.exports = router;
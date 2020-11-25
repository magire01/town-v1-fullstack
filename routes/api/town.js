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

router.get("/all", (req, res) => {
    db.Town.find()
    .then(result => res.json(result))
    .catch(err => console.log(err))
})

router.get("/:town", (req, res) => {
    db.Town.find({ name: req.params.town })
    .then(result => res.json(result))
    .catch(err => console.log(err))
})

router.put("/join/:town/:user/:nick", (req, res) => {
    const newMember = { username: req.params.user, nickname: req.params.nick }
    db.Town.findOneAndUpdate({ name: req.params.town }, { $push: { members: newMember } })
    .then(result => console.log("User Joined Town"))
    .catch(err => console.log(err))
})

router.put("/leave/:town/:user/:nick", (req, res) => {
    const leaveMember = { username: req.params.user, nickname: req.params.nick }
    db.Town.findOneAndUpdate({ name: req.params.town }, {$pull: { members: leaveMember } })
    .then(result => console.log("User Left Town"))
    .catch(err => console.log(err))
})

router.put("/createPost/:town", (req, res) => {
    db.Town.findOneAndUpdate({ name: req.params.town }, {$push: { posts: req.body }})
    .then(result => console.log(result))
    .catch(err => console.log(err))
})

router.put("/removePost/:town/:id", (req, res) => {
    // db.Town.findOneAndUpdate({ name: req.params.town }, { $pull: {posts: { postId: req.paramsid } } } )
    db.Town.findOneAndUpdate({ name: req.params.town}, {$pull: {post: { postId: req.params.id } } })
    .then(result => console.log(result))
    .catch(err => console.log(err))
})

module.exports = router;
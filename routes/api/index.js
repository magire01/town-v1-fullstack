const router = require("express").Router();
const userRoutes = require("./user");
const profileRoutes = require("./profile");
const postRoutes = require("./post");
const townRoutes = require("./town");

// UserRoutes routes
router.use("/user", userRoutes);
router.use("/profile", profileRoutes);
router.use("/post", postRoutes);
router.use("/town", townRoutes);

module.exports = router;

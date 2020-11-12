const router = require("express").Router();
const userRoutes = require("./user");
const profileRoutes = require("./profile");
const postRoutes = require("./post");

// UserRoutes routes
router.use("/user", userRoutes);
router.use("/profile", profileRoutes);
router.use("/post", postRoutes);

module.exports = router;

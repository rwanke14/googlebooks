const router = require("express").Router();
const bookRoutes = require("./library");

// Book routes
router.use("/library", bookRoutes);

module.exports = router;
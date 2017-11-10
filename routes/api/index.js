const router = require("express").Router();
const articleRoutes = require("./allArticle");

//All of the article routes
router.use("/article", articleRoutes);

module.exports = router;
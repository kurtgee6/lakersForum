const router = require("express").Router();
const articleController = require("../../controllers/articleControllers");

router.route("/")
  .get(articleController.findAll)
  .post(articleController.create);

module.exports = router;
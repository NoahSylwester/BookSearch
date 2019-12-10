const router = require("express").Router();
const booksController = require("../../controllers/booksController");

const APIKey = 'AIzaSyCyTk9xSgBKjTuDUp_RzGuSR4g8XiU70_s';

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;

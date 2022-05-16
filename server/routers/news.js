const { Router } = require("express");
const router = Router();
const { getAllNews, saveNews, deleteNews } = require("../controllers/news");
const { validator } = require("../middleware/expressValidator");
const { body, param } = require("express-validator");

router.route("/").get(getAllNews);
// router.route("/").post(
//   [
//     body("name")
//       .exists()
//       .notEmpty()
//       .isString()
//       .withMessage("Name field cannot be null"),
//     body("date")
//       .exists()
//       .notEmpty()
//       .isString()
//       .withMessage("Date field cannot be null"),
//     body("description")
//       .exists()
//       .notEmpty()
//       .isString()
//       .withMessage("Description field cannot be null"),
//     body("text").exists().notEmpty().withMessage("Text field cannot be null"),
//   ],
//   upload.single("uploaded_file"),
//   (req, res, next) => {
//     validator(req, res, next);
//   },
//   saveNews
// );
router.route("/:id").delete(
  [param("id").isNumeric().withMessage("The id must be a numeric value")],
  (req, res, next) => {
    validator(req, res, next);
  },
  deleteNews
);

module.exports = router;

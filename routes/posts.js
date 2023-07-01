const express = require("express");
const {
  addposts,
  getposts,
  getonepost,
  delposts,
  updateposts,
} = require("../controllers/post.js");

const router = express.Router();

router.get("/", getposts);
router.get("/:id", getonepost);

router.post("/", addposts);
router.put("/:id", updateposts);
router.delete("/:id", delposts);

module.exports = router;

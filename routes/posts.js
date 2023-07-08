const express = require("express");
const {
  addposts,
  getposts,
  getonepost,
  delposts,
  updateposts,
  getadmins,
} = require("../controllers/post.js");

const router = express.Router();

router.get("/", getposts);
router.get("/:id", getonepost);

router.post("/", addposts);
router.put("/:id", updateposts);
router.delete("/:id", delposts);
router.get("/admins/", getadmins);

module.exports = router;

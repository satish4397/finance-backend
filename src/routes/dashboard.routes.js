const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");

const controller =
  require("../controllers/dashboard.controller");

router.get(
  "/summary",
  auth,
  role("ADMIN", "ANALYST", "VIEWER"),
  controller.getSummary
);

module.exports = router;
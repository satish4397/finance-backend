const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");

const controller =
  require("../controllers/record.controller");

router.post(
  "/",
  auth,
  role("ADMIN"),
  controller.createRecord
);

router.get(
  "/",
  auth,
  role("ADMIN", "ANALYST"),
  controller.getRecords
);

router.put(
  "/:id",
  auth,
  role("ADMIN"),
  controller.updateRecord
);

router.delete(
  "/:id",
  auth,
  role("ADMIN"),
  controller.deleteRecord
);

module.exports = router;
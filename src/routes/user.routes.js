const express = require("express");

const router =
  express.Router();

const auth =
  require("../middleware/auth.middleware");

const role =
  require("../middleware/role.middleware");

const controller =
  require(
    "../controllers/user.controller"
  );

router.post(
  "/",
  auth,
  role("ADMIN"),
  controller.createUser
);

router.get(
  "/",
  auth,
  role("ADMIN"),
  controller.getUsers
);

router.put(
  "/:id",
  auth,
  role("ADMIN"),
  controller.updateUser
);

router.patch(
  "/:id/status",
  auth,
  role("ADMIN"),
  controller.changeStatus
);

router.patch(
  "/:id/role",
  auth,
  role("ADMIN"),
  controller.updateRole
);

module.exports = router;
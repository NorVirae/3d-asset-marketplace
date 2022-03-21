const express = require("express");
const { uploadFile, deleteFile } = require("../controllers/file.controller");
const AuthCtrl = require("../controllers/auth.controller");
const { isEmailUnique } = require("../middleware/auth.middleware");
const router = express.Router()

router.post("/login", AuthCtrl.login);
router.post("/register", isEmailUnique, AuthCtrl.register);

module.exports = router;


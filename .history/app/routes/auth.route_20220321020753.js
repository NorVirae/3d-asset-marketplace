const express = require("express");
const { uploadFile, deleteFile } = require("../controllers/file.controller");
const router = express.Router()

router.post("/login", Auth);
router.post("/register", deleteFile);

module.exports = router;

